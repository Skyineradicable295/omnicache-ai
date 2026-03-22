# Configuration

OmniCache-AI can be configured programmatically or via environment variables.

---

## OmnicacheSettings

The `OmnicacheSettings` dataclass holds all configuration. Use it with `CacheManager.from_settings()`.

```python
from omnicache_ai import CacheManager, OmnicacheSettings

# Programmatic configuration
settings = OmnicacheSettings(
    backend="disk",
    disk_path="/data/cache",
    default_ttl=3600,
    namespace="myapp",
)
manager = CacheManager.from_settings(settings)
```

### All Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| `backend` | `"memory" \| "disk" \| "redis"` | `"memory"` | Primary storage backend |
| `redis_url` | `str` | `"redis://localhost:6379/0"` | Redis connection URL |
| `disk_path` | `str` | `"/tmp/omnicache"` | Disk cache directory path |
| `default_ttl` | `int \| None` | `3600` | Default TTL in seconds (`None` = no expiry) |
| `semantic_threshold` | `float` | `0.95` | Minimum cosine similarity for semantic cache hit |
| `vector_backend` | `"faiss" \| "chroma" \| "none"` | `"none"` | Vector similarity backend |
| `embedding_dim` | `int` | `1536` | Embedding dimension (for FAISS) |
| `max_memory_entries` | `int` | `10000` | Max entries for InMemoryBackend |
| `key_hash_algo` | `"sha256" \| "md5"` | `"sha256"` | Hash algorithm for key generation |
| `namespace` | `str` | `"omnicache"` | Key prefix namespace |
| `ttl_embedding` | `int \| None` | `86400` | TTL for embedding cache (24h) |
| `ttl_retrieval` | `int \| None` | `3600` | TTL for retrieval cache (1h) |
| `ttl_context` | `int \| None` | `1800` | TTL for context cache (30min) |
| `ttl_response` | `int \| None` | `600` | TTL for response cache (10min) |

---

## Environment Variables

Every setting maps to an `OMNICACHE_*` environment variable. Load them with `OmnicacheSettings.from_env()`.

```python
from omnicache_ai import CacheManager, OmnicacheSettings

manager = CacheManager.from_settings(OmnicacheSettings.from_env())
```

| Variable | Default | Description |
|---|---|---|
| `OMNICACHE_BACKEND` | `memory` | `memory`, `disk`, or `redis` |
| `OMNICACHE_REDIS_URL` | `redis://localhost:6379/0` | Redis connection URL |
| `OMNICACHE_DISK_PATH` | `/tmp/omnicache` | Disk cache directory |
| `OMNICACHE_DEFAULT_TTL` | `3600` | Seconds; `none` = no expiry |
| `OMNICACHE_NAMESPACE` | `omnicache` | Key prefix |
| `OMNICACHE_SEMANTIC_THRESHOLD` | `0.95` | Float 0-1 |
| `OMNICACHE_VECTOR_BACKEND` | `none` | `faiss`, `chroma`, or `none` |
| `OMNICACHE_EMBEDDING_DIM` | `1536` | Embedding dimension |
| `OMNICACHE_MAX_MEMORY_ENTRIES` | `10000` | InMemoryBackend capacity |
| `OMNICACHE_KEY_HASH_ALGO` | `sha256` | `sha256` or `md5` |
| `OMNICACHE_TTL_EMBEDDING` | `86400` | Per-layer TTL |
| `OMNICACHE_TTL_RETRIEVAL` | `3600` | Per-layer TTL |
| `OMNICACHE_TTL_CONTEXT` | `1800` | Per-layer TTL |
| `OMNICACHE_TTL_RESPONSE` | `600` | Per-layer TTL |

### Example

```bash
export OMNICACHE_BACKEND=redis
export OMNICACHE_REDIS_URL=redis://cache.internal:6379/0
export OMNICACHE_DEFAULT_TTL=7200
export OMNICACHE_NAMESPACE=prod
export OMNICACHE_TTL_RESPONSE=300
```
