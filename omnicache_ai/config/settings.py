"""Configuration for omnicache-ai."""
from __future__ import annotations

import os
from dataclasses import dataclass, field
from typing import Literal


@dataclass
class OmnicacheSettings:
    """Central configuration object. All fields can be overridden via OMNICACHE_* env vars."""

    backend: Literal["memory", "redis", "disk"] = "memory"
    redis_url: str = "redis://localhost:6379/0"
    disk_path: str = "/tmp/omnicache"
    default_ttl: int | None = 3600  # seconds; None = no expiry
    semantic_threshold: float = 0.95
    vector_backend: Literal["faiss", "chroma", "none"] = "none"
    embedding_dim: int = 1536  # matches OpenAI text-embedding-3-small
    max_memory_entries: int = 10_000
    key_hash_algo: Literal["sha256", "md5"] = "sha256"
    namespace: str = "omnicache"

    # Per-type TTL overrides (seconds)
    ttl_embedding: int | None = 86400   # 24h — embeddings rarely change
    ttl_retrieval: int | None = 3600    # 1h
    ttl_context: int | None = 1800      # 30min
    ttl_response: int | None = 600      # 10min — LLM responses expire fast

    @classmethod
    def from_env(cls) -> "OmnicacheSettings":
        """Build settings from OMNICACHE_* environment variables."""
        def _int_or_none(key: str, default: int | None) -> int | None:
            val = os.environ.get(key)
            if val is None:
                return default
            return None if val.lower() == "none" else int(val)

        return cls(
            backend=os.environ.get("OMNICACHE_BACKEND", "memory"),  # type: ignore[arg-type]
            redis_url=os.environ.get("OMNICACHE_REDIS_URL", "redis://localhost:6379/0"),
            disk_path=os.environ.get("OMNICACHE_DISK_PATH", "/tmp/omnicache"),
            default_ttl=_int_or_none("OMNICACHE_DEFAULT_TTL", 3600),
            semantic_threshold=float(os.environ.get("OMNICACHE_SEMANTIC_THRESHOLD", "0.95")),
            vector_backend=os.environ.get("OMNICACHE_VECTOR_BACKEND", "none"),  # type: ignore[arg-type]
            embedding_dim=int(os.environ.get("OMNICACHE_EMBEDDING_DIM", "1536")),
            max_memory_entries=int(os.environ.get("OMNICACHE_MAX_MEMORY_ENTRIES", "10000")),
            key_hash_algo=os.environ.get("OMNICACHE_KEY_HASH_ALGO", "sha256"),  # type: ignore[arg-type]
            namespace=os.environ.get("OMNICACHE_NAMESPACE", "omnicache"),
            ttl_embedding=_int_or_none("OMNICACHE_TTL_EMBEDDING", 86400),
            ttl_retrieval=_int_or_none("OMNICACHE_TTL_RETRIEVAL", 3600),
            ttl_context=_int_or_none("OMNICACHE_TTL_CONTEXT", 1800),
            ttl_response=_int_or_none("OMNICACHE_TTL_RESPONSE", 600),
        )
