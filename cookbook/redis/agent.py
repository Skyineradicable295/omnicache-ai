from __future__ import annotations
from omnicache_ai.backends.redis_backend import RedisBackend
from omnicache_ai import CacheKeyBuilder, CacheManager

import sys
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parents[2]
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))


def main() -> None:
    manager = CacheManager(
        backend=RedisBackend(url="redis://localhost:6379/0",
                             key_prefix="cookbook:"),
        key_builder=CacheKeyBuilder(namespace="cookbook-redis"),
    )
    manager.set("redis_demo", {"status": "ok"}, ttl=120)
    print("redis value:", manager.get("redis_demo"))


if __name__ == "__main__":
    main()
