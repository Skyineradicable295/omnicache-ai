# Changelog

All notable changes to **omnicache-ai** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-03-21

### Added
- **Core**: `CacheManager`, `CacheKeyBuilder`, `TTLPolicy`, `EvictionPolicy`, `InvalidationEngine`
- **Backends**: `InMemoryBackend` (LRU), `DiskBackend` (diskcache), `RedisBackend`, `FAISSBackend`, `ChromaBackend`
- **Cache layers**: `EmbeddingCache`, `RetrievalCache`, `ContextCache`, `ResponseCache`, `SemanticCache`
- **Middleware**: `LLMMiddleware`, `AsyncLLMMiddleware`, `EmbeddingMiddleware`, `RetrieverMiddleware`
- **Adapters**: LangChain, LangGraph (0.x + 1.x), AutoGen (0.2.x + 0.4+), CrewAI, Agno, A2A
- **Config**: `OmnicacheSettings` with environment variable support
- **CLI**: `omnicache` entry point
- Tag-based invalidation engine
- Semantic similarity cache (exact + vector cosine lookup)
- Full test suite with pytest
- CI/CD via GitHub Actions
- README, COOKBOOK, and publishing recipes for PyPI / conda-forge
