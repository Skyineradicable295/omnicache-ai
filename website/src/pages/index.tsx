import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

/* ── Brand gradient text ── */
function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        background: 'linear-gradient(135deg, #06d6f0, #f59e0b)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      {children}
    </span>
  );
}

/* ── Section divider ── */
function Divider() {
  return (
    <div
      style={{
        height: 1,
        background: 'linear-gradient(to right, transparent, #1e3a5f, transparent)',
        margin: '4rem 0',
      }}
    />
  );
}

/* ══════════════════════════════════════
   HERO SECTION
══════════════════════════════════════ */
function Hero() {
  return (
    <div
      style={{
        position: 'relative',
        textAlign: 'center',
        padding: '5rem 1rem 3rem',
        overflow: 'hidden',
      }}
    >
      {/* Background glow blobs */}
      <div
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background:
            'radial-gradient(circle at 20% 50%, rgba(6,214,240,0.1) 0%, transparent 55%), radial-gradient(circle at 80% 50%, rgba(245,158,11,0.07) 0%, transparent 55%)',
        }}
      />

      {/* Badge */}
      <div
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '6px 16px', borderRadius: 100,
          background: 'rgba(30,58,95,0.5)', border: '1px solid #1e3a5f',
          fontSize: '0.78rem', fontWeight: 500, color: '#94a3b8',
          marginBottom: '1.5rem', letterSpacing: '0.02em',
        }}
      >
        <span
          style={{
            width: 8, height: 8, borderRadius: '50%', background: '#10b981',
            animation: 'pulse 2s ease-in-out infinite',
          }}
        />
        Open Source — MIT Licensed &nbsp;·&nbsp; v0.1.0
      </div>

      {/* Title */}
      <h1
        style={{
          fontSize: 'clamp(2.4rem, 5vw, 4rem)',
          fontWeight: 800, letterSpacing: '-0.03em',
          lineHeight: 1.1, marginBottom: '1rem', color: '#f1f5f9',
        }}
      >
        Cache Every Layer of Your<br />
        <GradientText>AI Agent Pipeline</GradientText>
      </h1>

      {/* Subtitle */}
      <p
        style={{
          fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#94a3b8',
          maxWidth: 620, margin: '0 auto 2rem', lineHeight: 1.7, fontWeight: 400,
        }}
      >
        OmniCache-AI is a framework-agnostic caching library that eliminates
        redundant AI operations. Cache embeddings, retrieval, context, LLM responses,
        and semantic similarity — cut latency and cost by up to 90%.
      </p>

      {/* CTA buttons */}
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <Link
          to="/docs/getting-started/quickstart"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '0.75rem 1.75rem', borderRadius: 100,
            background: 'linear-gradient(135deg, #06d6f0, #f59e0b)',
            color: '#0a0f1e', fontWeight: 700, fontSize: '0.92rem',
            textDecoration: 'none',
            boxShadow: '0 4px 20px rgba(6,214,240,0.3)',
            transition: 'all 0.25s',
          }}
          className="hero-btn-primary"
        >
          Get Started →
        </Link>
        <a
          href="https://github.com/ashishpatel26/omnicache-ai"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '0.75rem 1.75rem', borderRadius: 100,
            background: 'rgba(30,58,95,0.5)', border: '1px solid #1e3a5f',
            color: '#e2e8f0', fontWeight: 600, fontSize: '0.92rem',
            textDecoration: 'none', transition: 'all 0.25s',
          }}
          className="hero-btn-secondary"
        >
          ★ GitHub
        </a>
      </div>

      {/* Install command */}
      <div
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 12,
          padding: '0.7rem 1.25rem',
          background: '#060d1a', border: '1px solid #1e3a5f',
          borderRadius: 10,
          fontFamily: '"JetBrains Mono", "Fira Code", monospace',
          fontSize: '0.82rem', color: '#cbd5e1',
        }}
      >
        <span style={{ color: '#06d6f0', userSelect: 'none' }}>$</span>
        pip install git+https://github.com/ashishpatel26/omnicache-ai.git
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        .hero-btn-primary:hover {
          box-shadow: 0 6px 28px rgba(6,214,240,0.45) !important;
          transform: translateY(-1px);
          color: #0a0f1e !important;
        }
        .hero-btn-secondary:hover {
          border-color: #06d6f0 !important;
          color: #06d6f0 !important;
          box-shadow: 0 0 20px rgba(6,214,240,0.15) !important;
          transform: translateY(-1px);
        }
      `}</style>
    </div>
  );
}

/* ══════════════════════════════════════
   STATS BAR
══════════════════════════════════════ */
const stats = [
  { number: '5', label: 'Cache Layers' },
  { number: '5', label: 'Backends' },
  { number: '6', label: 'Adapters' },
  { number: '40+', label: 'Recipes' },
  { number: '3', label: 'Middleware' },
];

function StatsBar() {
  return (
    <div
      style={{
        display: 'flex', justifyContent: 'center', gap: '3.5rem',
        padding: '2rem 1rem', flexWrap: 'wrap',
        borderTop: '1px solid #1e3a5f', borderBottom: '1px solid #1e3a5f',
        background: 'rgba(17,24,39,0.5)',
      }}
    >
      {stats.map((s) => (
        <div key={s.label} style={{ textAlign: 'center' }}>
          <div
            style={{
              fontSize: '2rem', fontWeight: 800, lineHeight: 1.2,
              background: 'linear-gradient(135deg, #06d6f0, #f59e0b)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}
          >
            {s.number}
          </div>
          <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 4, fontWeight: 500 }}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ══════════════════════════════════════
   FEATURE CARDS
══════════════════════════════════════ */
const features = [
  {
    icon: '🗂️',
    title: '5 Cache Layers',
    desc: 'Response, Embedding, Retrieval, Context, and Semantic layers — each optimized for its data type and serialization format.',
    href: '/docs/layers',
    link: 'Explore layers',
  },
  {
    icon: '🗄️',
    title: '5 Storage Backends',
    desc: 'In-Memory LRU, Disk, Redis, FAISS, and ChromaDB. Pick the backend that matches your scale and persistence needs.',
    href: '/docs/backends',
    link: 'See backends',
  },
  {
    icon: '🧩',
    title: '6 Framework Adapters',
    desc: 'LangChain, LangGraph, AutoGen, CrewAI, Agno, and A2A. Drop-in integration with zero code changes.',
    href: '/docs/adapters',
    link: 'View adapters',
  },
  {
    icon: '🧠',
    title: 'Semantic Cache',
    desc: 'Returns cached answers for semantically similar queries using cosine similarity — not just exact matches.',
    href: '/docs/layers/semantic',
    link: 'Learn more',
  },
  {
    icon: '🏷️',
    title: 'Tag-Based Invalidation',
    desc: 'Tag entries by model, session, or deployment. Invalidate thousands of related keys with a single call.',
    href: '/docs/core/invalidation',
    link: 'See invalidation',
  },
  {
    icon: '⏱️',
    title: 'Smart TTL Policies',
    desc: 'Configure time-to-live per cache type. Embeddings last 24h, responses 10min. Fully env-var configurable.',
    href: '/docs/core/policies',
    link: 'Configure TTL',
  },
];

function FeatureCard({ icon, title, desc, href, link }: typeof features[0]) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <Link
      to={href}
      style={{ textDecoration: 'none' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          position: 'relative', padding: '1.5rem', borderRadius: 16,
          border: `1px solid ${hovered ? '#06d6f0' : '#1e3a5f'}`,
          background: hovered ? 'rgba(6,214,240,0.04)' : '#111827',
          transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
          boxShadow: hovered ? '0 0 32px rgba(6,214,240,0.18)' : '0 4px 20px rgba(0,0,0,0.3)',
          transform: hovered ? 'translateY(-4px)' : 'none',
          height: '100%', overflow: 'hidden',
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 3,
            background: 'linear-gradient(135deg, #06d6f0, #f59e0b)',
            opacity: hovered ? 1 : 0, transition: 'opacity 0.3s',
          }}
        />
        <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{icon}</div>
        <div style={{ fontWeight: 700, fontSize: '1rem', color: '#f1f5f9', marginBottom: '0.4rem' }}>
          {title}
        </div>
        <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
          {desc}
        </p>
        <div
          style={{
            marginTop: '0.75rem', fontSize: '0.82rem', fontWeight: 600,
            color: '#06d6f0', display: 'flex', alignItems: 'center', gap: 4,
          }}
        >
          {link} →
        </div>
      </div>
    </Link>
  );
}

function Features() {
  return (
    <div style={{ padding: '4rem 1rem', maxWidth: 1100, margin: '0 auto' }}>
      <h2
        style={{
          textAlign: 'center', fontWeight: 800, fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
          letterSpacing: '-0.02em', marginBottom: '0.75rem', color: '#f1f5f9',
        }}
      >
        Why <GradientText>OmniCache-AI</GradientText>?
      </h2>
      <p style={{ textAlign: 'center', color: '#94a3b8', maxWidth: 560, margin: '0 auto 3rem', fontSize: '1rem', lineHeight: 1.6 }}>
        Every feature designed to eliminate wasted AI compute and cost.
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.25rem',
        }}
      >
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════
   SUPPORTED FRAMEWORKS
══════════════════════════════════════ */
const frameworks = ['LangChain', 'LangGraph', 'AutoGen', 'CrewAI', 'Agno', 'A2A'];

function FrameworkBadges() {
  return (
    <div style={{ padding: '2rem 1rem', textAlign: 'center' }}>
      <p style={{ color: '#64748b', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', fontWeight: 600 }}>
        Works with every major AI framework
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
        {frameworks.map((fw) => (
          <span
            key={fw}
            style={{
              padding: '0.35rem 1rem', borderRadius: 100,
              background: 'rgba(30,58,95,0.4)', border: '1px solid #1e3a5f',
              fontSize: '0.82rem', fontWeight: 500, color: '#94a3b8',
            }}
          >
            {fw}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════
   QUICK EXAMPLE
══════════════════════════════════════ */
function QuickExample() {
  const lines = [
    { t: 'kw', v: 'from ' },{ t: 'tx', v: 'omnicache_ai ' },{ t: 'kw', v: 'import ' },{ t: 'cls', v: 'CacheManager' },{ t: 'tx', v: ', ' },{ t: 'cls', v: 'InMemoryBackend' },{ t: 'tx', v: ', ' },{ t: 'cls', v: 'CacheKeyBuilder' },
  ];
  const codeLines: Array<Array<{t:string,v:string}>> = [
    [{t:'kw',v:'from '},{t:'tx',v:'omnicache_ai '},{t:'kw',v:'import '},{t:'cls',v:'CacheManager'},{t:'tx',v:', '},{t:'cls',v:'InMemoryBackend'},{t:'tx',v:', '},{t:'cls',v:'CacheKeyBuilder'}],
    [],
    [{t:'cm',v:'# Wire up in 3 lines'}],
    [{t:'tx',v:'manager = '},{t:'cls',v:'CacheManager'},{t:'tx',v:'('}],
    [{t:'tx',v:'    backend='},{t:'cls',v:'InMemoryBackend'},{t:'tx',v:'(),'}],
    [{t:'tx',v:'    key_builder='},{t:'cls',v:'CacheKeyBuilder'},{t:'tx',v:'(namespace='},{t:'st',v:'"myapp"'},{t:'tx',v:'),'}],
    [{t:'tx',v:')'}],
    [],
    [{t:'cm',v:'# Cache any value with optional TTL'}],
    [{t:'tx',v:'manager.set('},{t:'st',v:'"my_key"'},{t:'tx',v:', {'},{t:'st',v:'"result"'},{t:'tx',v:': '},{t:'st',v:'"data"'},{t:'tx',v:'}, ttl=60)'}],
    [{t:'tx',v:'value = manager.get('},{t:'st',v:'"my_key"'},{t:'tx',v:')  '},{t:'cm',v:'# {"result": "data"}'}],
  ];

  const colors: Record<string,string> = { kw:'#06d6f0', cls:'#f59e0b', st:'#10b981', cm:'#475569', tx:'#e2e8f0' };

  return (
    <div style={{ padding: '3rem 1rem', maxWidth: 860, margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', fontWeight: 800, fontSize: '1.8rem', letterSpacing: '-0.02em', marginBottom: '2rem', color: '#f1f5f9' }}>
        Quick <GradientText>Example</GradientText>
      </h2>
      <div style={{ background: '#060d1a', border: '1px solid #1e3a5f', borderRadius: 14, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}>
        <div style={{ padding: '0.6rem 1.25rem', background: '#0d1526', borderBottom: '1px solid #1e3a5f', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ef4444' }} />
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#f59e0b' }} />
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#10b981' }} />
          <span style={{ marginLeft: 8, color: '#94a3b8', fontSize: '0.78rem', fontFamily: '"JetBrains Mono", monospace' }}>example.py</span>
        </div>
        <pre style={{ margin: 0, padding: '1.5rem', fontFamily: '"JetBrains Mono","Fira Code",monospace', fontSize: '0.84rem', lineHeight: 1.8, overflowX: 'auto' }}>
          {codeLines.map((line, li) => (
            <div key={li}>
              {line.length === 0 ? '\n' : line.map((tok, ti) => (
                <span key={ti} style={{ color: colors[tok.t] || '#e2e8f0', fontStyle: tok.t === 'cm' ? 'italic' : 'normal', fontWeight: tok.t === 'kw' ? 600 : 400 }}>{tok.v}</span>
              ))}
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════
   COMPARISON TABLE
══════════════════════════════════════ */
const comparisons = [
  { without: 'Every LLM call billed at full token cost', with: 'Identical prompts returned instantly, zero tokens' },
  { without: 'Embeddings re-computed on every request', with: 'Vectors stored and reused across sessions' },
  { without: 'Vector search re-run for same queries', with: 'Retrieval results cached by query + top_k' },
  { without: 'Agent state lost between runs', with: 'Session context persisted across turns' },
  { without: 'Similar questions treated as unique', with: 'Cosine similarity returns cached answer' },
];

function ComparisonTable() {
  return (
    <div style={{ padding: '3rem 1rem', maxWidth: 900, margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', fontWeight: 800, fontSize: '1.8rem', letterSpacing: '-0.02em', marginBottom: '2rem', color: '#f1f5f9' }}>
        Before vs. <GradientText>After</GradientText>
      </h2>
      <div style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid #1e3a5f', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ padding: '0.9rem 1.25rem', background: '#111827', color: '#ef4444', fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'left', width: '50%', borderBottom: '2px solid #1e3a5f' }}>
                ✗ Without Caching
              </th>
              <th style={{ padding: '0.9rem 1.25rem', background: '#111827', color: '#10b981', fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'left', borderBottom: '2px solid #1e3a5f' }}>
                ✓ With OmniCache-AI
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisons.map((row, i) => (
              <tr key={i} style={{ borderBottom: i < comparisons.length - 1 ? '1px solid #1a2234' : 'none' }}>
                <td style={{ padding: '0.85rem 1.25rem', color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.5, background: i % 2 === 0 ? '#0d1526' : '#111827' }}>
                  {row.without}
                </td>
                <td style={{ padding: '0.85rem 1.25rem', color: '#e2e8f0', fontSize: '0.88rem', lineHeight: 1.5, fontWeight: 500, background: i % 2 === 0 ? '#0d1526' : '#111827' }}>
                  {row.with}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════
   GET STARTED GRID
══════════════════════════════════════ */
const getStartedLinks = [
  { icon: '📥', title: 'Installation', desc: 'Install via pip, uv, or from GitHub', href: '/docs/getting-started/installation' },
  { icon: '🚀', title: 'Quick Start', desc: 'Your first cache in 30 seconds', href: '/docs/getting-started/quickstart' },
  { icon: '📖', title: 'Cookbook', desc: '40+ runnable recipes for every framework', href: '/docs/cookbook' },
  { icon: '⚡', title: 'API Reference', desc: 'Complete class and method documentation', href: '/docs/api-reference' },
];

function GetStartedGrid() {
  return (
    <div style={{ padding: '3rem 1rem 5rem', maxWidth: 900, margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', fontWeight: 800, fontSize: '1.8rem', letterSpacing: '-0.02em', marginBottom: '2rem', color: '#f1f5f9' }}>
        <GradientText>Get Started</GradientText>
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        {getStartedLinks.map((item) => {
          const [hovered, setHovered] = React.useState(false);
          return (
            <Link
              key={item.title}
              to={item.href}
              style={{ textDecoration: 'none' }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <div
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
                  padding: '1.4rem', borderRadius: 14,
                  border: `1px solid ${hovered ? '#06d6f0' : '#1e3a5f'}`,
                  background: hovered ? 'rgba(6,214,240,0.04)' : '#111827',
                  transition: 'all 0.25s',
                  boxShadow: hovered ? '0 0 24px rgba(6,214,240,0.15)' : 'none',
                  transform: hovered ? 'translateY(-3px)' : 'none',
                }}
              >
                <span style={{ fontSize: '1.8rem', marginBottom: '0.6rem' }}>{item.icon}</span>
                <div style={{ fontWeight: 700, color: '#f1f5f9', fontSize: '0.95rem', marginBottom: '0.3rem' }}>
                  {item.title}
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.82rem', margin: 0, lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════
   ROOT PAGE
══════════════════════════════════════ */
export default function Home() {
  return (
    <Layout
      title="Unified caching for AI pipelines"
      description="OmniCache-AI — framework-agnostic multi-layer caching for LLMs, embeddings, retrieval, and agents."
    >
      <main style={{ background: '#0a0f1e' }}>
        <Hero />
        <StatsBar />
        <Features />
        <Divider />
        <FrameworkBadges />
        <Divider />
        <QuickExample />
        <Divider />
        <ComparisonTable />
        <Divider />
        <GetStartedGrid />
      </main>
    </Layout>
  );
}
