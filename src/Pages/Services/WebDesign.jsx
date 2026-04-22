import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";

const faqs = [
  {
    q: "How much does a website cost in India?",
    a: "A professional custom website starts from ₹50,000 (~$600) for a 5-page site and goes up to ₹5,00,000+ for complex web applications. We offer transparent pricing based on your requirements — contact us for a free quote.",
  },
  {
    q: "How long does it take to build a website?",
    a: "A standard 5–8 page website takes 2–3 weeks from discovery to launch. Landing pages can be done in 5–7 days. Complex web apps take 6–12 weeks. We always give you a clear timeline before starting.",
  },
  {
    q: "Do you build websites in Indore?",
    a: "Yes — H! Dezign is based in Indore, Madhya Pradesh. We work with local businesses across Indore, as well as clients across India, USA, UK, and Australia remotely.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Absolutely. We analyze your current site, identify what's hurting your performance and conversions, and redesign it from scratch with a focus on speed, SEO, and user experience.",
  },
  {
    q: "Do you use WordPress or custom code?",
    a: "We build in React/Next.js — not WordPress. This gives you faster load times (99/100 PageSpeed), better SEO, and full control over your design. No plugins, no bloat, no security vulnerabilities.",
  },
  {
    q: "Will my website be SEO-optimized?",
    a: "Every website we build comes with technical SEO built in — proper schemas, sitemap, robots.txt, meta tags, image optimization, and Core Web Vitals compliance. We guarantee 95+ PageSpeed scores.",
  },
  {
    q: "Do you provide website maintenance?",
    a: "Yes. We offer monthly maintenance plans that cover updates, security patches, content changes, and performance monitoring. Contact us for pricing.",
  },
  {
    q: "Can you make my existing website faster?",
    a: "Yes — we specialize in performance optimization. We analyze your site with PageSpeed Insights and implement fixes: image compression, code splitting, lazy loading, CDN setup, and more.",
  },
];

const WebDesign = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [email, setEmail] = useState("");

  return (
    <>
      <Helmet>
        <title>Web Design Agency in Indore India | H! Dezign</title>
        <meta name="description" content="H! Dezign is a top web design agency in Indore, India. We build fast React websites with 99/100 PageSpeed, full SEO, and guaranteed results." />
        <link rel="canonical" href="https://hidezign.com/services/web-design" />
        <meta property="og:title" content="Web Design Agency in Indore India | H! Dezign" />
        <meta property="og:description" content="Custom React websites with 99/100 PageSpeed, built for Indian and international businesses by H! Dezign, Indore." />
        <meta property="og:url" content="https://hidezign.com/services/web-design" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Web Design",
          "provider": {
            "@type": "LocalBusiness",
            "name": "H! Dezign",
            "url": "https://hidezign.com"
          },
          "description": "Custom React website design and development for businesses in Indore, India and worldwide.",
          "areaServed": ["Indore", "India", "Worldwide"],
          "serviceType": "Web Design & Development",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "INR",
            "price": "50000",
            "description": "Starting from ₹50,000 for a custom website"
          }
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://hidezign.com"},
            {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://hidezign.com/services"},
            {"@type": "ListItem", "position": 3, "name": "Web Design", "item": "https://hidezign.com/services/web-design"}
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map(({ q, a }) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
        })}</script>
      </Helmet>

      <div className="text-sp-bg1 min-h-screen">
        {/* SECTION 1 — HERO */}
        <section className="py-16 md:py-24 lg:py-32">
          <div className="flex flex-col gap-6 items-center text-center max-w-3xl mx-auto">
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
              Web Design Agency<br />
              <span className="text-sp-primary-s1">in Indore, India</span>
            </h1>
            <p className="text-lg md:text-xl text-sp-bg2/70 max-w-xl">
              We build fast, modern, SEO-ready websites that convert visitors into clients.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                title="Get Free Audit"
                route="/contact-us"
                className="bg-sp-primary-s1 text-white font-semibold px-8 py-3 rounded-full hover:bg-sp-primary-s1/90 transition-colors"
              />
              <Button
                title="See Our Work"
                route="/work"
                className="border-2 border-sp-bg1 text-sp-bg1 font-semibold px-8 py-3 rounded-full hover:bg-sp-bg1 hover:text-white transition-colors"
              />
            </div>
            <p className="text-sm text-sp-bg2/50 font-medium tracking-wide">
              50+ Projects Delivered &nbsp;•&nbsp; 99/100 PageSpeed &nbsp;•&nbsp; India's Fastest Agency
            </p>
          </div>
        </section>

        {/* SECTION 2 — WHAT WE BUILD */}
        <section className="py-16 border-t border-sp-bg1/10">
          <h2 className="font-bold text-3xl md:text-4xl mb-10 text-center">What We Build</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Custom React Websites",
                desc: "Fast, scalable, SEO-optimized websites built with React — no templates, no bloat.",
                num: "01",
              },
              {
                title: "Landing Pages",
                desc: "High-converting pages designed for campaigns, product launches, and lead generation.",
                num: "02",
              },
              {
                title: "Web Applications",
                desc: "Complex dashboards, portals, and SaaS products with clean UX and solid architecture.",
                num: "03",
              },
            ].map((card) => (
              <div
                key={card.num}
                className="bg-white rounded-2xl p-8 flex flex-col gap-4 items-center text-center border border-sp-bg1/5 hover:border-sp-primary-s1/30 transition-colors"
              >
                <span className="text-sp-primary-s1 font-bold text-sm">{card.num}</span>
                <h3 className="font-semibold text-xl">{card.title}</h3>
                <p className="text-sp-bg2/60 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3 — OUR PROCESS */}
        <section className="py-16 border-t border-sp-bg1/10">
          <h2 className="font-bold text-3xl md:text-4xl mb-10 text-center">Our Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery Call", time: "1–2 days", desc: "We learn your goals, audience, and project requirements." },
              { step: "02", title: "Design & Strategy", time: "3–5 days", desc: "Wireframes, visual direction, and content strategy locked in." },
              { step: "03", title: "Development", time: "7–14 days", desc: "Clean React code, responsive design, performance tuning." },
              { step: "04", title: "Launch & SEO", time: "2–3 days", desc: "Go live with schema markup, sitemap, and PageSpeed above 95." },
            ].map((s) => (
              <div key={s.step} className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-sp-primary-s1 text-white flex items-center justify-center font-bold text-sm">
                  {s.step}
                </div>
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <span className="text-xs text-sp-primary-s1 font-medium">{s.time}</span>
                <p className="text-sp-bg2/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4 — TECHNOLOGIES */}
        <section className="py-16 border-t border-sp-bg1/10">
          <h2 className="font-bold text-3xl md:text-4xl mb-8 text-center">Technologies We Use</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB", "Vercel", "Cloudinary", "Framer Motion"].map((tech) => (
              <span
                key={tech}
                className="px-5 py-2 border border-sp-bg1/20 rounded-full text-sm font-medium hover:border-sp-primary-s1 hover:text-sp-primary-s1 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* SECTION 5 — FAQ */}
        <section className="py-16 border-t border-sp-bg1/10">
          <h2 className="font-bold text-3xl md:text-4xl mb-10 text-center">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-3 max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-sp-bg1/10 rounded-2xl overflow-hidden"
              >
                <button
                  className="w-full text-left px-6 py-5 font-semibold text-base flex justify-between items-center gap-4 hover:bg-sp-bg1/5 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{faq.q}</span>
                  <span className="text-sp-primary-s1 text-xl flex-shrink-0">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm text-sp-bg2/70 leading-relaxed border-t border-sp-bg1/10 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6 — CTA BANNER */}
        <section className="py-16 border-t border-sp-bg1/10">
          <div className="bg-sp-bg1 rounded-3xl px-8 py-14 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-3xl md:text-4xl text-white">
                Ready to build something<br />extraordinary?
              </h2>
              <p className="text-sp-text-s1 text-sm">Let's talk about your project. No commitment, no spam.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 text-white placeholder:text-white/40 border border-white/20 rounded-full px-5 py-3 text-sm outline-none focus:border-sp-primary-s1 transition-colors w-full sm:w-64"
              />
              <Link
                to="/contact-us"
                className="bg-sp-primary-s1 text-white font-semibold px-8 py-3 rounded-full text-sm hover:bg-sp-primary-s1/90 transition-colors text-center whitespace-nowrap"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WebDesign;
