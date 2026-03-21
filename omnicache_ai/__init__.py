"""omnicache-ai — Unified caching layer for AI/agent frameworks.

Quick start::

    from omnicache_ai import CacheManager, InMemoryBackend, CacheKeyBuilder

    manager = CacheManager(
        backend=InMemoryBackend(),
        key_builder=CacheKeyBuilder(),
    )
    manager.set("my_key", {"result": 42}, ttl=60)
    value = manager.get("my_key")

From settings::

    from omnicache_ai import CacheManager, OmnicacheSettings

    manager = CacheManager.from_settings(OmnicacheSettings(backend="disk"))

Optional backends (require extras)::

    from omnicache_ai.backends.redis_backend import RedisBackend     # [redis]
    from omnicache_ai.backends.vector_backend import FAISSBackend    # [vector-faiss]
    from omnicache_ai.backends.vector_backend import ChromaBackend   # [vector-chroma]

Framework adapters (require framework extras)::

    from omnicache_ai.adapters.langchain_adapter import LangChainCacheAdapter
    from omnicache_ai.adapters.langgraph_adapter import LangGraphCacheAdapter
    from omnicache_ai.adapters.autogen_adapter import AutoGenCacheAdapter
    from omnicache_ai.adapters.crewai_adapter import CrewAICacheAdapter
    from omnicache_ai.adapters.agno_adapter import AgnoCacheAdapter
    from omnicache_ai.adapters.a2a_adapter import A2ACacheAdapter
"""

from __future__ import annotations

# Config
from omnicache_ai.config.settings import OmnicacheSettings

# Protocols
from omnicache_ai.backends.base import CacheBackend, VectorBackend

# Core backends (no optional deps)
from omnicache_ai.backends.memory_backend import InMemoryBackend
from omnicache_ai.backends.disk_backend import DiskBackend

# Core engine
from omnicache_ai.core.key_builder import CacheKeyBuilder
from omnicache_ai.core.policies import TTLPolicy, EvictionPolicy
from omnicache_ai.core.invalidation import InvalidationEngine
from omnicache_ai.core.cache_manager import CacheManager

# Cache layers
from omnicache_ai.layers.embedding_cache import EmbeddingCache
from omnicache_ai.layers.retrieval_cache import RetrievalCache
from omnicache_ai.layers.context_cache import ContextCache
from omnicache_ai.layers.response_cache import ResponseCache
from omnicache_ai.layers.semantic_cache import SemanticCache

# Middleware
from omnicache_ai.middleware.llm_middleware import LLMMiddleware, AsyncLLMMiddleware
from omnicache_ai.middleware.embedding_middleware import EmbeddingMiddleware
from omnicache_ai.middleware.retriever_middleware import RetrieverMiddleware

__version__ = "0.1.0"

__all__ = [
    # Config
    "OmnicacheSettings",
    # Protocols
    "CacheBackend",
    "VectorBackend",
    # Backends
    "InMemoryBackend",
    "DiskBackend",
    # Core
    "CacheKeyBuilder",
    "TTLPolicy",
    "EvictionPolicy",
    "InvalidationEngine",
    "CacheManager",
    # Layers
    "EmbeddingCache",
    "RetrievalCache",
    "ContextCache",
    "ResponseCache",
    "SemanticCache",
    # Middleware
    "LLMMiddleware",
    "AsyncLLMMiddleware",
    "EmbeddingMiddleware",
    "RetrieverMiddleware",
]
