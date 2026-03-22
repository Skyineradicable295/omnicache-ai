---
title: "OmnicacheSettings"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# OmnicacheSettings

`OmnicacheSettings` is a dataclass that centralizes every configuration knob in OmniCache-AI. It can be constructed programmatically or loaded from `OMNICACHE_*` environment variables.

---

## Overview

Managing cache configuration across backends, TTLs, namespaces, and vector stores can quickly become scattered. `OmnicacheSettings` provides a single source of truth:

- All fields have sensible defaults, so you can start with `OmnicacheSettings()` and override only what you need.
- The `from_env()` classmethod reads `OMNICACHE_*` environment variables, making it easy to configure caching per deployment without code changes.
- Pass the settings object to `CacheManager.from_settings()` to get a fully-wired cache manager in one call.

---

## Usage

### Programmatic Configuration

```python
from omnicache_ai.config.settings import OmnicacheSettings

# All defaults -- in-memory backend, 1h TTL, no vector backend
settings = OmnicacheSettings()

# Customized for production
settings = OmnicacheSettings(
    backend="redis",
    redis_url="redis://cache.internal:6379/0",
    namespace="prod",
    default_ttl=7200,
    ttl_response=300,
    vector_backend="faiss",
    embedding_dim=1536,
    semantic_threshold=0.93,
)
```

### From Environment Variables

```python
from omnicache_ai.config.settings import OmnicacheSettings

settings = OmnicacheSettings.from_env()
```

Set the environment variables before running your application:

<Tabs>
<TabItem value="bash" label="Bash">

```bash
export OMNICACHE_BACKEND=redis
export OMNICACHE_REDIS_URL=redis://cache.internal:6379/0
export OMNICACHE_NAMESPACE=prod
export OMNICACHE_DEFAULT_TTL=7200
export OMNICACHE_TTL_RESPONSE=300
export OMNICACHE_VECTOR_BACKEND=faiss
export OMNICACHE_EMBEDDING_DIM=1536
export OMNICACHE_SEMANTIC_THRESHOLD=0.93
```

</TabItem>

</Tabs>


<Tabs>
<TabItem value="docker" label="Docker">

```dockerfile
ENV OMNICACHE_BACKEND=redis
ENV OMNICACHE_REDIS_URL=redis://cache:6379/0
ENV OMNICACHE_NAMESPACE=prod
ENV OMNICACHE_DEFAULT_TTL=7200
ENV OMNICACHE_TTL_RESPONSE=300
```

</TabItem>

</Tabs>


<Tabs>
<TabItem value="-env-file" label=".env file">

```dotenv
OMNICACHE_BACKEND=redis
OMNICACHE_REDIS_URL=redis://cache.internal:6379/0
OMNICACHE_NAMESPACE=prod
OMNICACHE_DEFAULT_TTL=7200
OMNICACHE_TTL_RESPONSE=300
OMNICACHE_VECTOR_BACKEND=faiss
OMNICACHE_EMBEDDING_DIM=1536
```

</TabItem>

</Tabs>


:::tip
Use a `.env` file with a library like `python-dotenv` to keep environment variables organized during development. Call `dotenv.load_dotenv()` before `OmnicacheSettings.from_env()`.
:::


### Wiring to CacheManager

```python
from omnicache_ai import CacheManager, OmnicacheSettings

# One-line production setup
manager = CacheManager.from_settings(OmnicacheSettings.from_env())

# Or with explicit settings
manager = CacheManager.from_settings(OmnicacheSettings(
    backend="disk",
    disk_path="/data/cache",
))
```

---

## Configuration Fields

### Backend Selection

| Field | Type | Default | Description |
|---|---|---|---|
| `backend` | `"memory" \| "redis" \| "disk"` | `"memory"` | Primary storage backend |
| `redis_url` | `str` | `"redis://localhost:6379/0"` | Redis connection URL (used when `backend="redis"`) |
| `disk_path` | `str` | `"/tmp/omnicache"` | Directory path for disk cache (used when `backend="disk"`) |
| `max_memory_entries` | `int` | `10000` | Maximum entries for `InMemoryBackend` |

### Key Generation

| Field | Type | Default | Description |
|---|---|---|---|
| `namespace` | `str` | `"omnicache"` | Prefix applied to every cache key |
| `key_hash_algo` | `"sha256" \| "md5"` | `"sha256"` | Hash algorithm for key generation |

### TTL Configuration

| Field | Type | Default | Description |
|---|---|---|---|
| `default_ttl` | `int \| None` | `3600` | Default TTL in seconds; `None` disables expiry |
| `ttl_embedding` | `int \| None` | `86400` | TTL for embedding cache entries (24 hours) |
| `ttl_retrieval` | `int \| None` | `3600` | TTL for retrieval cache entries (1 hour) |
| `ttl_context` | `int \| None` | `1800` | TTL for context cache entries (30 minutes) |
| `ttl_response` | `int \| None` | `600` | TTL for response cache entries (10 minutes) |

### Semantic / Vector Configuration

| Field | Type | Default | Description |
|---|---|---|---|
| `semantic_threshold` | `float` | `0.95` | Minimum cosine similarity for a semantic cache hit |
| `vector_backend` | `"faiss" \| "chroma" \| "none"` | `"none"` | Vector similarity backend |
| `embedding_dim` | `int` | `1536` | Embedding vector dimension (used by FAISS backend) |

:::note
The `embedding_dim` default of 1536 matches OpenAI's `text-embedding-3-small` model. Adjust this to match your embedding model's output dimension.
:::


---

## Environment Variable Reference

Every field maps to an `OMNICACHE_*` environment variable. The `from_env()` classmethod handles type conversion automatically.

| Variable | Type | Default | Maps to |
|---|---|---|---|
| `OMNICACHE_BACKEND` | `str` | `memory` | `backend` |
| `OMNICACHE_REDIS_URL` | `str` | `redis://localhost:6379/0` | `redis_url` |
| `OMNICACHE_DISK_PATH` | `str` | `/tmp/omnicache` | `disk_path` |
| `OMNICACHE_DEFAULT_TTL` | `int \| "none"` | `3600` | `default_ttl` |
| `OMNICACHE_SEMANTIC_THRESHOLD` | `float` | `0.95` | `semantic_threshold` |
| `OMNICACHE_VECTOR_BACKEND` | `str` | `none` | `vector_backend` |
| `OMNICACHE_EMBEDDING_DIM` | `int` | `1536` | `embedding_dim` |
| `OMNICACHE_MAX_MEMORY_ENTRIES` | `int` | `10000` | `max_memory_entries` |
| `OMNICACHE_KEY_HASH_ALGO` | `str` | `sha256` | `key_hash_algo` |
| `OMNICACHE_NAMESPACE` | `str` | `omnicache` | `namespace` |
| `OMNICACHE_TTL_EMBEDDING` | `int \| "none"` | `86400` | `ttl_embedding` |
| `OMNICACHE_TTL_RETRIEVAL` | `int \| "none"` | `3600` | `ttl_retrieval` |
| `OMNICACHE_TTL_CONTEXT` | `int \| "none"` | `1800` | `ttl_context` |
| `OMNICACHE_TTL_RESPONSE` | `int \| "none"` | `600` | `ttl_response` |

:::tip[Disabling TTL via environment]
Set any TTL variable to the string `"none"` (case-insensitive) to disable expiry for that cache type:

```bash
export OMNICACHE_TTL_EMBEDDING=none
```
:::


---

## API Reference

### Constructor

```python
@dataclass
class OmnicacheSettings:
    backend: Literal["memory", "redis", "disk"] = "memory"
    redis_url: str = "redis://localhost:6379/0"
    disk_path: str = "/tmp/omnicache"
    default_ttl: int | None = 3600
    semantic_threshold: float = 0.95
    vector_backend: Literal["faiss", "chroma", "none"] = "none"
    embedding_dim: int = 1536
    max_memory_entries: int = 10_000
    key_hash_algo: Literal["sha256", "md5"] = "sha256"
    namespace: str = "omnicache"
    ttl_embedding: int | None = 86400
    ttl_retrieval: int | None = 3600
    ttl_context: int | None = 1800
    ttl_response: int | None = 600
```

### Methods

| Method | Signature | Returns | Description |
|---|---|---|---|
| `from_env` | `from_env()` | `OmnicacheSettings` | Classmethod: build settings from `OMNICACHE_*` environment variables |

---

### Method Details

#### `from_env()`

Build an `OmnicacheSettings` instance by reading `OMNICACHE_*` environment variables. Any variable not set falls back to the field's default value. Integer fields are parsed with `int()`, float fields with `float()`, and TTL fields accept the string `"none"` to represent `None`.

```python
import os
os.environ["OMNICACHE_BACKEND"] = "disk"
os.environ["OMNICACHE_DISK_PATH"] = "/data/cache"
os.environ["OMNICACHE_DEFAULT_TTL"] = "7200"

settings = OmnicacheSettings.from_env()
print(settings.backend)      # "disk"
print(settings.disk_path)    # "/data/cache"
print(settings.default_ttl)  # 7200
```

---

## Example Configurations

### Development (In-Memory)

```python
settings = OmnicacheSettings(
    backend="memory",
    max_memory_entries=1000,
    default_ttl=60,
    namespace="dev",
)
```

### Production (Redis + FAISS)

```python
settings = OmnicacheSettings(
    backend="redis",
    redis_url="redis://cache.internal:6379/0",
    namespace="prod",
    default_ttl=3600,
    ttl_response=300,
    vector_backend="faiss",
    embedding_dim=1536,
    semantic_threshold=0.93,
    key_hash_algo="sha256",
)
```

### Disk-Based (Serverless / Edge)

```python
settings = OmnicacheSettings(
    backend="disk",
    disk_path="/tmp/omnicache",
    default_ttl=1800,
    vector_backend="none",
)
```

:::warning
When using `backend="redis"`, ensure the Redis server is reachable at the configured `redis_url`. The `CacheManager.from_settings()` factory will attempt to connect immediately.
:::


---

## Next Steps

- [CacheManager](cache-manager.md) -- Pass settings to `CacheManager.from_settings()`
- [Policies](policies.md) -- How TTL settings become a `TTLPolicy`
- [Configuration Guide](../getting-started/configuration.md) -- Overview of all configuration options
