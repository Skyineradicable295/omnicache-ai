"""Context cache layer for multi-turn conversation history."""

from __future__ import annotations

import pickle
from typing import TYPE_CHECKING, Any

if TYPE_CHECKING:
    from omnicache_ai.core.cache_manager import CacheManager


class ContextCache:
    """Cache layer for conversation context (message history).

    Keyed by session ID and optional turn index. Useful for persisting
    multi-turn agent context across process restarts or distributed workers.

    Args:
        manager: Underlying CacheManager instance.
    """

    def __init__(self, manager: "CacheManager") -> None:
        self._manager = manager

    def get(self, session_id: str, turn_index: int | None = None) -> list[Any] | None:
        """Retrieve cached message history for a session."""
        key = self._manager.key_builder.build(
            "context",
            session_id,
            extra={"turn": turn_index} if turn_index is not None else None,
        )
        raw = self._manager.get(key)
        return pickle.loads(raw) if raw is not None else None  # noqa: S301

    def set(
        self,
        session_id: str,
        messages: list[Any],
        turn_index: int | None = None,
        ttl: int | None = None,
        tags: list[str] | None = None,
    ) -> None:
        """Store message history for a session."""
        key = self._manager.key_builder.build(
            "context",
            session_id,
            extra={"turn": turn_index} if turn_index is not None else None,
        )
        self._manager.set(
            key,
            pickle.dumps(messages),
            ttl=ttl,
            cache_type="context",
            tags=tags or [f"session:{session_id}"],
        )

    def invalidate_session(self, session_id: str) -> int:
        """Remove all cached context for a session."""
        return self._manager.invalidate(f"session:{session_id}")
