from __future__ import annotations
from omnicache_ai import CacheKeyBuilder, CacheManager, InMemoryBackend, InvalidationEngine

import sys
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parents[2]
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))


def main() -> None:
    manager = CacheManager(
        backend=InMemoryBackend(),
        key_builder=CacheKeyBuilder(namespace="cookbook-inv"),
        invalidation_engine=InvalidationEngine(InMemoryBackend()),
    )
    manager.set("k1", "v1", tags=["model:gemma3:4b"])
    manager.set("k2", "v2", tags=["model:gemma3:4b"])
    print("invalidated:", manager.invalidate("model:gemma3:4b"))


if __name__ == "__main__":
    main()
