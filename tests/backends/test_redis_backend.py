"""Tests for RedisBackend — skipped if redis is not installed."""
from __future__ import annotations

import pytest

redis = pytest.importorskip("redis")

from omnicache_ai.backends.redis_backend import RedisBackend


def test_import_error_without_redis(monkeypatch):
    """Ensure clear ImportError when redis is not available."""
    import omnicache_ai.backends.redis_backend as mod
    original = mod._REDIS_AVAILABLE
    monkeypatch.setattr(mod, "_REDIS_AVAILABLE", False)
    with pytest.raises(ImportError, match="omnicache-ai\\[redis\\]"):
        RedisBackend()
    monkeypatch.setattr(mod, "_REDIS_AVAILABLE", original)
