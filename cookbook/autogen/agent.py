from __future__ import annotations
from omnicache_ai.adapters.autogen_adapter import AutoGenCacheAdapter
from omnicache_ai import CacheKeyBuilder, CacheManager, InMemoryBackend
from autogen_ext.models.openai import OpenAIChatCompletionClient
from autogen_agentchat.agents import AssistantAgent

import asyncio
import sys
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parents[2]
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))


async def main() -> None:
    manager = CacheManager(
        backend=InMemoryBackend(),
        key_builder=CacheKeyBuilder(namespace="cookbook-autogen"),
    )
    model_client = OpenAIChatCompletionClient(
        model="gemma3:4b",
        base_url="http://localhost:11434/v1",
        api_key="ollama",
        model_info={
            "vision": False,
            "function_calling": False,
            "json_output": False,
            "structured_output": False,
            "family": "unknown",
        },
    )
    agent = AssistantAgent("assistant", model_client=model_client)
    cached = AutoGenCacheAdapter(agent, manager)

    q = "Give a 5-point migration plan for moving sync webhooks to async processing"
    r1 = await cached.arun(q)
    r2 = await cached.arun(q)
    print("=== AutoGen First Run ===")
    print(r1)
    print("\n=== AutoGen Second Run (cache hit expected) ===")
    print(r2)


if __name__ == "__main__":
    asyncio.run(main())
