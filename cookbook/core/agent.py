"""Core caching layers quick demo."""

from __future__ import annotations
from omnicache_ai import CacheKeyBuilder, CacheManager, EmbeddingCache, InMemoryBackend, ResponseCache
from langchain_ollama import ChatOllama, OllamaEmbeddings

import sys
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parents[2]
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))


def main() -> None:
    manager = CacheManager(
        backend=InMemoryBackend(),
        key_builder=CacheKeyBuilder(namespace="cookbook-core"),
    )
    rcache = ResponseCache(manager)
    ecache = EmbeddingCache(manager)

    llm = ChatOllama(model="gemma3:4b", temperature=0)
    messages = [{"role": "user", "content": "Give 3 release safety checks."}]

    def call(msgs: list[dict]) -> str:
        return llm.invoke(msgs).content

    r1 = rcache.get_or_generate(messages, call, model_id="gemma3:4b")
    r2 = rcache.get_or_generate(messages, call, model_id="gemma3:4b")
    print("=== Response Cache ===")
    print(r1)
    print("cache_hit_same:", r1 == r2)

    print("\n=== Embedding Cache ===")
    try:
        emb = OllamaEmbeddings(model="nomic-embed-text")
        vec1 = ecache.get_or_compute(
            text="payment webhook timeout error",
            compute_fn=lambda t: emb.embed_query(t),
            model_id="nomic-embed-text",
        )
        vec2 = ecache.get_or_compute(
            text="payment webhook timeout error",
            compute_fn=lambda t: emb.embed_query(t),
            model_id="nomic-embed-text",
        )
        print("vector_length:", len(vec1))
        print("cache_hit_same:", list(vec1) == list(vec2))
    except Exception as exc:
        print("embedding_demo_skipped:", exc)
        print("tip: run `ollama pull nomic-embed-text` and re-run this example")


if __name__ == "__main__":
    main()
