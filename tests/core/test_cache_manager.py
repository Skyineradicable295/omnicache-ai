"""Tests for CacheManager."""

from __future__ import annotations

import pytest

from omnicache_ai.backends.memory_backend import InMemoryBackend
from omnicache_ai.core.cache_manager import CacheManager
from omnicache_ai.core.invalidation import InvalidationEngine
from omnicache_ai.core.key_builder import CacheKeyBuilder
from omnicache_ai.core.policies import TTLPolicy
from omnicache_ai.config.settings import OmnicacheSettings


@pytest.fixture
def manager():
    return CacheManager(
        backend=InMemoryBackend(),
        key_builder=CacheKeyBuilder(namespace="test"),
        ttl_policy=TTLPolicy(default_ttl=None),
    )


def test_set_and_get(manager):
    manager.set("k", "hello")
    assert manager.get("k") == "hello"


def test_miss(manager):
    assert manager.get("missing") is None


def test_exists(manager):
    manager.set("k", "v")
    assert manager.exists("k")
    manager.delete("k")
    assert not manager.exists("k")


def test_delete(manager):
    manager.set("k", "v")
    manager.delete("k")
    assert manager.get("k") is None


def test_clear(manager):
    manager.set("a", 1)
    manager.set("b", 2)
    manager.clear()
    assert manager.get("a") is None


def test_tag_invalidation():
    tag_store = InMemoryBackend()
    engine = InvalidationEngine(tag_store=tag_store)
    manager = CacheManager(
        backend=InMemoryBackend(),
        key_builder=CacheKeyBuilder(namespace="test"),
        invalidation_engine=engine,
    )
    manager.set("k1", "v1", tags=["model:gpt4"])
    manager.set("k2", "v2", tags=["model:gpt4"])
    count = manager.invalidate("model:gpt4")
    assert count == 2
    assert manager.get("k1") is None
    assert manager.get("k2") is None


def test_from_settings_memory():
    settings = OmnicacheSettings(backend="memory", max_memory_entries=100)
    manager = CacheManager.from_settings(settings)
    manager.set("x", 42)
    assert manager.get("x") == 42
    manager.close()


def test_from_settings_disk(tmp_path):
    settings = OmnicacheSettings(backend="disk", disk_path=str(tmp_path / "cache"))
    manager = CacheManager.from_settings(settings)
    manager.set("x", 42)
    assert manager.get("x") == 42
    manager.close()
