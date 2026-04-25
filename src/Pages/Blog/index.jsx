import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    slug: '/blog/pixel-art-design',
    external: true,
    title: 'Pixel Art Design: The Complete Guide for Brands',
    excerpt: 'Discover pixel art design - what it is, which industries use it, and how to apply 8-bit aesthetics to your brand. With a playable octopus game inside.',
    category: 'Design Style',
    date: 'Apr 23, 2026',
    readTime: '12 min read',
    theme: {
      bg: '#0E0E0E',
      border: '4px solid #0F38DB',
      shadow: '5px 5px 0 #0a2ba8',
      radius: '0',
      badgeBg: 'transparent',
      badgeColor: '#0F38DB',
      badgeBorder: '2px solid #0F38DB',
      badgeFont: "'Press Start 2P', monospace",
      badgeShadow: '2px 2px 0 #0F38DB',
      titleColor: '#F0F0F0',
      excerptColor: '#999',
      metaColor: '#555',
      accentColor: '#0F38DB',
      dividerColor: '#0F38DB',
      tagline: 'DESIGN STYLE GUIDE',
      decoration: 'pixel',
    },
  },
  {
    slug: '/blog/glassmorphism-design',
    external: true,
    title: 'Glassmorphism Design: The Definitive Guide',
    excerpt: 'Frosted glass, soft blurs, translucency - the aesthetic dominating SaaS dashboards and fintech apps. How to use it without breaking accessibility.',
    category: 'Design Style',
    date: 'Apr 25, 2026',
    readTime: '10 min read',
    theme: {
      bg: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      border: '1px solid rgba(255,255,255,0.18)',
      shadow: '0 8px 32px rgba(31,38,135,0.37)',
      radius: '16px',
      badgeBg: 'rgba(255,255,255,0.1)',
      badgeColor: 'rgba(255,255,255,0.9)',
      badgeBorder: '1px solid rgba(255,255,255,0.3)',
      badgeFont: "'DM Sans', sans-serif",
      badgeShadow: 'none',
      titleColor: '#ffffff',
      excerptColor: 'rgba(255,255,255,0.65)',
      metaColor: 'rgba(255,255,255,0.4)',
      accentColor: '#a8c8ff',
      dividerColor: 'rgba(255,255,255,0.15)',
      tagline: 'Design Style',
      decoration: 'glass',
    },
  },
  {
    slug: '/blog/brutalism-web-design',
    external: true,
    title: 'Brutalism Web Design: Why the Anti-Design Movement is Winning',
    excerpt: "Raw grids, harsh typography, zero decoration. Brutalism rejects polish and wins attention. Here's how to use it without alienating your audience.",
    category: 'Design Style',
    date: 'Coming Soon',
    readTime: '9 min read',
    theme: {
      bg: '#FFFF00',
      border: '4px solid #000000',
      shadow: '6px 6px 0 #000000',
      radius: '0',
      badgeBg: '#000000',
      badgeColor: '#FFFF00',
      badgeBorder: '2px solid #000000',
      badgeFont: "'Arial Black', sans-serif",
      badgeShadow: 'none',
      titleColor: '#000000',
      excerptColor: '#111111',
      metaColor: '#333333',
      accentColor: '#000000',
      dividerColor: '#000000',
      tagline: 'BRUTALISM',
      decoration: 'brutalist',
    },
  },
  {
    slug: '/blog/retro-vintage-design',
    external: true,
    title: 'Retro Vintage Design: How Brands Use Nostalgia to Build Trust',
    excerpt: 'Distressed textures, muted palettes, analog imperfection. Vintage aesthetics signal warmth and authenticity. The complete brand guide.',
    category: 'Design Style',
    date: 'Coming Soon',
    readTime: '11 min read',
    theme: {
      bg: '#2C1810',
      border: '3px solid #C8A96E',
      shadow: '4px 4px 0 #8B6914',
      radius: '4px',
      badgeBg: '#C8A96E',
      badgeColor: '#2C1810',
      badgeBorder: '2px solid #C8A96E',
      badgeFont: "'Georgia', serif",
      badgeShadow: 'none',
      titleColor: '#F5E6C8',
      excerptColor: '#C8A96E',
      metaColor: '#8B6914',
      accentColor: '#C8A96E',
      dividerColor: '#8B6914',
      tagline: 'Retro Vintage',
      decoration: 'vintage',
    },
  },
];

const PixelCorners = ({ color }) => (
  <>
    <span style={{ position: 'absolute', top: 0, left: 0, width: 8, height: 8, background: color, pointerEvents: 'none' }} />
    <span style={{ position: 'absolute', top: 0, right: 0, width: 8, height: 8, background: color, pointerEvents: 'none' }} />
    <span style={{ position: 'absolute', bottom: 0, left: 0, width: 8, height: 8, background: color, pointerEvents: 'none' }} />
    <span style={{ position: 'absolute', bottom: 0, right: 0, width: 8, height: 8, background: color, pointerEvents: 'none' }} />
  </>
);

const BlogCard = ({ post }) => {
  const t = post.theme;
  const isExternal = post.external;
  const isComingSoon = post.date === 'Coming Soon';

  const cardContent = (
    <div
      style={{
        background: t.bg,
        border: t.border,
        boxShadow: t.shadow,
        borderRadius: t.radius,
        padding: '28px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        height: '100%',
        transition: 'transform 0.18s ease, box-shadow 0.18s ease',
        cursor: isComingSoon ? 'default' : 'pointer',
        overflow: 'hidden',
        ...(t.decoration === 'glass'
          ? {
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }
          : {}),
      }}
      className="blog-card-inner"
    >
      {t.decoration === 'pixel' && <PixelCorners color={t.accentColor} />}

      {t.decoration === 'glass' && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(130deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 55%, transparent 80%)',
            pointerEvents: 'none',
            borderRadius: t.radius,
          }}
        />
      )}

      {t.decoration === 'brutalist' && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 48,
            height: 48,
            background: '#000',
            clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
            pointerEvents: 'none',
          }}
        />
      )}

      {t.decoration === 'vintage' && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.04\'/%3E%3C/svg%3E")',
            opacity: 0.15,
            pointerEvents: 'none',
            borderRadius: t.radius,
          }}
        />
      )}

      <span
        style={{
          display: 'inline-block',
          alignSelf: 'flex-start',
          fontFamily: t.badgeFont,
          fontSize: t.decoration === 'pixel' ? '8px' : '11px',
          fontWeight: 600,
          color: t.badgeColor,
          background: t.badgeBg,
          border: t.badgeBorder,
          padding: '5px 10px',
          boxShadow: t.badgeShadow,
          letterSpacing: t.decoration === 'pixel' ? '0.05em' : '0.08em',
          textTransform: 'uppercase',
          borderRadius: t.radius === '0' ? '0' : '4px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {t.tagline}
      </span>

      <h2
        style={{
          fontFamily: t.decoration === 'vintage' ? "'Georgia', serif" : "'DM Sans', 'Inter', sans-serif",
          fontWeight: 700,
          fontSize: 'clamp(17px, 2.5vw, 21px)',
          color: t.titleColor,
          lineHeight: 1.3,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {post.title}
      </h2>

      <div
        style={{
          height: t.decoration === 'pixel' ? '4px' : '1px',
          background:
            t.decoration === 'pixel'
              ? `repeating-linear-gradient(90deg, ${t.dividerColor} 0px, ${t.dividerColor} 4px, transparent 4px, transparent 8px)`
              : t.dividerColor,
          borderRadius: 0,
          position: 'relative',
          zIndex: 1,
        }}
      />

      <p
        style={{
          fontFamily: "'DM Sans', 'Inter', sans-serif",
          fontSize: '14px',
          color: t.excerptColor,
          lineHeight: 1.65,
          flexGrow: 1,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {post.excerpt}
      </p>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          flexWrap: 'wrap',
          fontFamily: t.decoration === 'pixel' ? "'Press Start 2P', monospace" : "'DM Sans', sans-serif",
          fontSize: t.decoration === 'pixel' ? '8px' : '12px',
          color: t.metaColor,
          position: 'relative',
          zIndex: 1,
        }}
      >
        <span>{post.date}</span>
        <span style={{ width: 4, height: 4, background: t.accentColor, display: 'inline-block', flexShrink: 0 }} />
        <span>{post.readTime}</span>
        <span style={{ width: 4, height: 4, background: t.accentColor, display: 'inline-block', flexShrink: 0 }} />
        <span style={{ color: t.accentColor, fontWeight: 600 }}>{post.category}</span>
      </div>

      {!isComingSoon && (
        <div
          style={{
            display: 'inline-flex',
            alignSelf: 'flex-start',
            fontFamily: t.decoration === 'pixel' ? "'Press Start 2P', monospace" : "'DM Sans', sans-serif",
            fontSize: t.decoration === 'pixel' ? '8px' : '13px',
            fontWeight: 700,
            color: t.badgeColor !== 'transparent' ? t.badgeColor : t.accentColor,
            background: t.badgeBg && t.badgeBg !== 'transparent' ? t.badgeBg : 'transparent',
            border: t.badgeBorder,
            padding: '8px 14px',
            boxShadow: t.badgeShadow,
            letterSpacing: t.decoration === 'pixel' ? '0.04em' : '0.02em',
            borderRadius: t.radius === '0' ? '0' : '6px',
            position: 'relative',
            zIndex: 1,
            cursor: 'pointer',
            ...(t.decoration === 'glass'
              ? {
                  background: 'linear-gradient(110deg, #89ddff 0%, #a691ff 100%)',
                  color: '#12203d',
                  border: '1px solid rgba(255,255,255,0.35)',
                  padding: '10px 18px',
                  borderRadius: '10px',
                  boxShadow: '0 6px 18px rgba(93,120,255,0.3)',
                  fontSize: '15px',
                  fontWeight: 800,
                }
              : {}),
          }}
        >
          Read Guide ->
        </div>
      )}

      {isComingSoon && (
        <div
          style={{
            fontFamily: t.decoration === 'pixel' ? "'Press Start 2P', monospace" : "'DM Sans', sans-serif",
            fontSize: t.decoration === 'pixel' ? '7px' : '11px',
            color: t.metaColor,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            position: 'relative',
            zIndex: 1,
          }}
        >
          Coming Soon
        </div>
      )}
    </div>
  );

  if (isComingSoon) return <div style={{ height: '100%' }}>{cardContent}</div>;

  if (isExternal) {
    return (
      <a href={post.slug} style={{ display: 'block', height: '100%', textDecoration: 'none' }}>
        {cardContent}
      </a>
    );
  }

  return (
    <Link to={post.slug} style={{ display: 'block', height: '100%', textDecoration: 'none' }}>
      {cardContent}
    </Link>
  );
};

const navLinks = [
  { label: 'Home', href: 'https://hidezign.com' },
  { label: 'Work', href: 'https://hidezign.com/work' },
  { label: 'Services', href: 'https://hidezign.com/services' },
  { label: 'About Us', href: 'https://hidezign.com/about-us' },
  { label: 'Blog', href: 'https://hidezign.com/blog' },
];

const BlogIndex = () => {
  const publishedCount = blogPosts.filter((p) => p.date !== 'Coming Soon').length;
  const comingSoonCount = blogPosts.filter((p) => p.date === 'Coming Soon').length;

  return (
    <>
      <Helmet>
        <title>Blog | H! Dezign - Design, Web & Digital Insights</title>
        <meta name="description" content="Design guides, web trends, and digital growth insights from H! Dezign - a creative agency in Indore, India." />
        <link rel="canonical" href="https://hidezign.com/blog" />
        <meta property="og:title" content="Blog | H! Dezign - Design, Web & Digital Insights" />
        <meta property="og:url" content="https://hidezign.com/blog" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hidezign.com' },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://hidezign.com/blog' },
            ],
          })}
        </script>
      </Helmet>

      <div
        className="min-h-screen text-sp-bg1"
        style={{
          background: 'linear-gradient(135deg, #0f1b33 0%, #152a4c 45%, #0f3460 100%)',
          color: '#f5f8ff',
        }}
      >
        <div style={{ paddingTop: '26px' }}>
          <div
            style={{
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '18px',
              boxShadow: '0 8px 32px rgba(31,38,135,0.28)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              padding: '12px 14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              flexWrap: 'wrap',
            }}
          >
            <nav
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                flexWrap: 'wrap',
              }}
              aria-label="Blog page navigation"
            >
              {navLinks.map((item) => (
                <a key={item.label} href={item.href} className="blog-nav-pill" style={{ textDecoration: 'none' }}>
                  {item.label}
                </a>
              ))}
            </nav>

            <a href="https://hidezign.com/contact-us" className="audit-btn">
              Get Free Audit ->
            </a>
          </div>
        </div>

        <div className="py-14 md:py-20 border-b border-sp-bg1/10" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-sp-primary-s1" style={{ color: '#a8c8ff' }}>
              H! Dezign / Design Intelligence
            </span>
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-sp-bg1 leading-tight" style={{ color: '#ffffff' }}>
              Design Intelligence
            </h1>
            <p className="text-sp-bg1/60 text-lg max-w-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>
              Weekly insights on design styles, web trends, and digital growth - for founders and creators who take design seriously.
            </p>
            <div className="flex items-center gap-3 mt-2 flex-wrap">
              <span className="text-sm text-sp-bg1/40" style={{ color: 'rgba(255,255,255,0.55)' }}>
                {publishedCount} published
              </span>
              <span className="w-1 h-1 rounded-full bg-sp-bg1/30" style={{ background: 'rgba(255,255,255,0.35)' }} />
              <span className="text-sm text-sp-bg1/40" style={{ color: 'rgba(255,255,255,0.55)' }}>
                {comingSoonCount} coming soon
              </span>
            </div>
          </div>
        </div>

        <div className="py-14 md:py-20">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
              gap: '28px',
              alignItems: 'stretch',
            }}
          >
            {blogPosts.map((post) => (
              <div key={post.slug} style={{ display: 'flex', flexDirection: 'column' }} className="blog-card-hover">
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>

        <div
          className="py-10 border-t border-sp-bg1/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{ borderColor: 'rgba(255,255,255,0.12)' }}
        >
          <p className="text-sp-bg1/50 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
            More guides dropping every week - bookmark this page.
          </p>
          <a href="https://hidezign.com/contact-us" className="text-sp-primary-s1 text-sm font-semibold hover:underline" style={{ color: '#a8c8ff' }}>
            Suggest a topic ->
          </a>
        </div>
      </div>

      <style>{`
        .blog-card-hover:hover .blog-card-inner {
          transform: translate(-2px, -2px);
        }

        .blog-nav-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 40px;
          padding: 0 14px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.28);
          color: rgba(255,255,255,0.92);
          background: rgba(255,255,255,0.08);
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.2s ease;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .blog-nav-pill:hover {
          border-color: rgba(168,200,255,0.75);
          color: #ffffff;
          box-shadow: 0 0 16px rgba(132,193,255,0.35);
          transform: translateY(-1px);
        }

        .audit-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          padding: 0 24px;
          border-radius: 18px;
          text-decoration: none;
          color: #20385a;
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          font-weight: 800;
          border: 1px solid rgba(255,255,255,0.32);
          background: linear-gradient(110deg, #79d5ff 0%, #8fa0ff 100%);
          box-shadow: 0 8px 24px rgba(73,128,231,0.35);
          transition: all 0.25s ease;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        .audit-btn:hover {
          color: #142848;
          box-shadow: 0 10px 28px rgba(73,128,231,0.45), 0 0 18px rgba(123,214,255,0.65);
          transform: translateY(-1px);
        }

        @media (max-width: 640px) {
          .audit-btn {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default BlogIndex;
