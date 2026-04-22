import { useState } from "react";
import { Helmet } from "react-helmet-async";
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

      {/* HERO */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 py-24 bg-[#F0F0F0]">
        <span className="inline-block text-sp-primary-s1 text-sm font-medium tracking-widest uppercase mb-6 border border-sp-primary-s1 px-4 py-1 rounded-full">
          Service
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-sp-bg1 max-w-5xl mx-auto leading-tight mb-6">
          Web Design Agency<br />
          <span className="text-sp-primary-s1">in Indore, India</span>
        </h1>
        <p className="text-lg md:text-xl text-sp-bg1/70 max-w-2xl mx-auto mb-10">
          We build fast, modern, SEO-ready websites that convert visitors into clients — with guaranteed 95+ PageSpeed scores.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            title="Get Free Website Audit"
            route="/contact-us"
            className="bg-sp-bg1 text-sp-white-s1 px-8 py-4 text-base font-medium rounded-full hover:bg-sp-primary-s1 transition-all duration-300"
          />
          <Button
            title="See Our Work →"
            route="/work"
            className="border border-sp-bg1 text-sp-bg1 px-8 py-4 text-base font-medium rounded-full hover:bg-sp-bg1 hover:text-sp-white-s1 transition-all duration-300"
          />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {["50+ Projects Delivered", "99/100 PageSpeed", "India's Fastest Agency", "4.9★ Client Rating"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sp-primary-s1"></span>
              <span className="text-sm text-sp-bg1/60 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="py-24 px-6 bg-sp-bg1">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-sp-white-s1 mb-4">
              What We Build
            </h2>
            <p className="text-sp-text-s1 text-lg max-w-xl mx-auto">
              Every project is custom-built to match your brand and convert visitors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                number: "01",
                title: "Custom React Websites",
                desc: "Fast, scalable, SEO-optimized — built from scratch to match your brand perfectly. No templates, no compromise.",
              },
              {
                number: "02",
                title: "Landing Pages",
                desc: "High-converting pages for campaigns, product launches, and lead generation. Designed to get results.",
              },
              {
                number: "03",
                title: "Web Applications",
                desc: "Complex dashboards, portals, and SaaS interfaces. We make powerful tools feel simple.",
              },
            ].map((card) => (
              <div
                key={card.number}
                className="border border-sp-white-s1/10 rounded-2xl p-8 hover:border-sp-primary-s1/50 transition-all duration-300 hover:bg-sp-white-s1/5 text-center"
              >
                <span className="text-sp-primary-s1 text-4xl font-bold block mb-4">{card.number}</span>
                <h3 className="text-sp-white-s1 text-xl font-semibold mb-3">{card.title}</h3>
                <p className="text-sp-text-s1 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-24 px-6 bg-[#F0F0F0]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-sp-bg1 mb-4">
            How We Work
          </h2>
          <p className="text-sp-bg1/60 text-lg mb-16 max-w-xl mx-auto">
            A clear 4-step process — from first call to live website.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Discovery Call", time: "1–2 days", desc: "We learn your goals, audience, and vision." },
              { step: "2", title: "Design & Strategy", time: "3–5 days", desc: "Wireframes, design system, and visual direction." },
              { step: "3", title: "Development", time: "7–14 days", desc: "Built in React, pixel-perfect, fully responsive." },
              { step: "4", title: "Launch & SEO", time: "2–3 days", desc: "Deploy, test, submit to Google, go live." },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-sp-bg1 text-sp-white-s1 flex items-center justify-center text-2xl font-bold mb-4 border-4 border-sp-primary-s1">
                  {item.step}
                </div>
                <h3 className="text-sp-bg1 font-semibold text-lg mb-1">{item.title}</h3>
                <span className="text-sp-primary-s1 text-xs font-medium mb-2">{item.time}</span>
                <p className="text-sp-bg1/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="py-16 px-6 bg-sp-bg1/5 border-t border-b border-sp-bg1/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sp-bg1/40 text-sm uppercase tracking-widest mb-8 font-medium">Technologies We Use</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB", "Vercel", "Cloudinary", "Framer Motion"].map((tech) => (
              <span
                key={tech}
                className="px-5 py-2 border border-sp-bg1/20 rounded-full text-sp-bg1 text-sm font-medium hover:border-sp-primary-s1 hover:text-sp-primary-s1 transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-[#F0F0F0]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-sp-bg1 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-sp-bg1/60 text-lg">
              Everything you need to know about web design with H! Dezign.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-sp-bg1/10 rounded-2xl overflow-hidden">
                <button
                  className="w-full text-left px-6 py-5 font-semibold text-base flex justify-between items-center gap-4 hover:bg-sp-bg1/5 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{faq.q}</span>
                  <span className="text-sp-primary-s1 text-xl flex-shrink-0">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm text-sp-bg1/70 leading-relaxed border-t border-sp-bg1/10 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 px-6 bg-sp-bg1 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-sp-white-s1 mb-4">
            Ready to build something<br />
            <span className="text-sp-primary-s1">extraordinary?</span>
          </h2>
          <p className="text-sp-text-s1 text-lg mb-10 max-w-xl mx-auto">
            Join 50+ businesses we've helped go from zero to outstanding. Get your free website audit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              title="Get Free Audit →"
              route="/contact-us"
              className="bg-sp-primary-s1 text-sp-white-s1 px-10 py-4 text-base font-medium rounded-full hover:bg-sp-primary-s1/80 transition-all duration-300"
            />
            <Button
              title="View Our Work"
              route="/work"
              className="border border-sp-white-s1/30 text-sp-white-s1 px-10 py-4 text-base font-medium rounded-full hover:border-sp-white-s1 transition-all duration-300"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default WebDesign;
