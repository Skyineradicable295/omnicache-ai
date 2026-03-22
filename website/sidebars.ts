import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      link: { type: 'generated-index', title: 'Getting Started' },
      items: [
        'getting-started/installation',
        'getting-started/quickstart',
        'getting-started/configuration',
      ],
    },
    {
      type: 'category',
      label: 'Core',
      link: { type: 'doc', id: 'core/index' },
      items: [
        'core/cache-manager',
        'core/key-builder',
        'core/policies',
        'core/invalidation',
        'core/settings',
      ],
    },
    {
      type: 'category',
      label: 'Backends',
      link: { type: 'doc', id: 'backends/index' },
      items: [
        'backends/memory',
        'backends/disk',
        'backends/redis',
        'backends/faiss',
        'backends/chroma',
      ],
    },
    {
      type: 'category',
      label: 'Cache Layers',
      link: { type: 'doc', id: 'layers/index' },
      items: [
        'layers/response',
        'layers/embedding',
        'layers/retrieval',
        'layers/context',
        'layers/semantic',
      ],
    },
    {
      type: 'category',
      label: 'Middleware',
      link: { type: 'doc', id: 'middleware/index' },
      items: [
        'middleware/llm',
        'middleware/embedding',
        'middleware/retriever',
      ],
    },
    {
      type: 'category',
      label: 'Adapters',
      link: { type: 'doc', id: 'adapters/index' },
      items: [
        'adapters/langchain',
        'adapters/langgraph',
        'adapters/autogen',
        'adapters/crewai',
        'adapters/agno',
        'adapters/a2a',
      ],
    },
    {
      type: 'category',
      label: 'Cookbook',
      link: { type: 'doc', id: 'cookbook/index' },
      items: [
        'cookbook/core',
        'cookbook/langchain',
        'cookbook/langgraph',
        'cookbook/autogen',
        'cookbook/crewai',
        'cookbook/agno',
        'cookbook/a2a',
        'cookbook/semantic-cache',
        'cookbook/redis',
        'cookbook/invalidation',
        'cookbook/ttl',
        'cookbook/multi-framework',
      ],
    },
    {
      type: 'doc',
      id: 'api-reference/index',
      label: 'API Reference',
    },
  ],
};

export default sidebars;
