from __future__ import annotations
from omnicache_ai import CacheKeyBuilder, CacheManager, InMemoryBackend, TTLPolicy

import sys
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parents[2]
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))


def main() -> None:
    manager = CacheManager(
        backend=InMemoryBackend(),
        key_builder=CacheKeyBuilder(namespace="cookbook-ttl"),
        ttl_policy=TTLPolicy(default_ttl=60, per_type={
                             "response": 10, "embed": 3600}),
    )
    manager.set("demo", "ok", cache_type="response")
    print("stored key with response ttl policy")


if __name__ == "__main__":
    main()
