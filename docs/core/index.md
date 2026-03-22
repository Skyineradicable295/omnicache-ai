# Core Module

The core module is the foundation of OmniCache-AI. It contains the central orchestrator, key generation logic, TTL and eviction policies, tag-based invalidation, and the unified settings object that ties everything together.

---

## Overview

Every caching operation in OmniCache-AI flows through the core module. Whether you are caching LLM responses, embeddings, retrieval results, or agent context, the core module provides the primitives that make it work:

- **CacheManager** -- the single entry point for all cache reads, writes, and invalidations.
- **CacheKeyBuilder** -- deterministic, namespaced key generation with content hashing.
- **TTLPolicy / EvictionPolicy** -- fine-grained control over expiration and eviction.
- **InvalidationEngine** -- tag-based bulk invalidation of related cache entries.
- **OmnicacheSettings** -- a dataclass that centralizes every configuration knob, loadable from code or environment variables.

---

## Architecture

```mermaid
graph TD
    A[CacheManager] --> B[CacheKeyBuilder]
    A --> C[TTLPolicy]
    A --> D[InvalidationEngine]
    A --> E[CacheBackend]
    A --> F[VectorBackend]
    G[OmnicacheSettings] --> A
    G --> B
    G --> C
```

The `CacheManager` wires together a backend, key builder, TTL policy, and optional vector backend. The `OmnicacheSettings` dataclass feeds configuration into the factory method `CacheManager.from_settings()`, which selects and instantiates the correct components automatically.

---

## Components

| Component | Module | Description |
|---|---|---|
| [CacheManager](cache-manager.md) | `omnicache_ai.core.cache_manager` | Central orchestrator for all cache operations |
| [CacheKeyBuilder](key-builder.md) | `omnicache_ai.core.key_builder` | Deterministic namespaced key generation |
| [TTLPolicy](policies.md#ttlpolicy) | `omnicache_ai.core.policies` | Per-type TTL configuration |
| [EvictionPolicy](policies.md#evictionpolicy) | `omnicache_ai.core.policies` | Eviction strategy configuration |
| [InvalidationEngine](invalidation.md) | `omnicache_ai.core.invalidation` | Tag-based cache invalidation |
| [OmnicacheSettings](settings.md) | `omnicache_ai.config.settings` | Unified configuration dataclass |

---

## Quick Example

```python
from omnicache_ai import CacheManager, OmnicacheSettings

# One-line setup from environment variables
manager = CacheManager.from_settings(OmnicacheSettings.from_env())

# Build a key and cache a value
key = manager.key_builder.build("response", {"prompt": "Hello, world!"})
manager.set(key, "Hi there!", tags=["greetings"])

# Retrieve
value = manager.get(key)

# Invalidate all entries tagged "greetings"
removed = manager.invalidate("greetings")
```

---

## Next Steps

- [CacheManager](cache-manager.md) -- Start here to understand the central API
- [Configuration](../getting-started/configuration.md) -- All settings and environment variables
- [Quick Start](../getting-started/quickstart.md) -- End-to-end walkthrough
