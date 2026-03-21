"""Tests for LangChainCacheAdapter — skipped if langchain-core not installed."""
from __future__ import annotations

import pytest

langchain_core = pytest.importorskip("langchain_core", reason="langchain-core not installed")

from omnicache_ai.adapters.langchain_adapter import LangChainCacheAdapter
from omnicache_ai.backends.memory_backend import InMemoryBackend
from omnicache_ai.core.cache_manager import CacheManager
from omnicache_ai.core.key_builder import CacheKeyBuilder


@pytest.fixture
def adapter():
    manager = CacheManager(backend=InMemoryBackend(), key_builder=CacheKeyBuilder(namespace="t"))
    return LangChainCacheAdapter(manager)


def test_lookup_miss(adapter):
    assert adapter.lookup("hello", "gpt-4") is None


def test_update_and_lookup(adapter):
    adapter.update("hello", "gpt-4", ["world"])
    assert adapter.lookup("hello", "gpt-4") == ["world"]


def test_different_llm_strings_independent(adapter):
    adapter.update("hello", "gpt-4", ["v1"])
    assert adapter.lookup("hello", "gpt-3.5") is None
