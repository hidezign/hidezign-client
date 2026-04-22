import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";

const faqs = [
  {
    q: "How much does a website cost in India?",
    a: "A professional custom website in India typically costs between ₹30,000 and ₹3,00,000 depending on complexity. A landing page starts around ₹15,000–₹40,000, while a full custom React web application can range from ₹80,000 to ₹3,00,000+.",
  },
  {
    q: "How long does it take to build a website?",
    a: "A standard business website takes 2–4 weeks from discovery to launch. Landing pages can be delivered in 5–7 days. Complex web applications with custom dashboards typically take 4–8 weeks.",
  },
  {
    q: "Do you build websites in Indore?",
    a: "Yes! H! Dezign is based in Indore, Madhya Pradesh. We work with local businesses across Indore as well as clients across India and internationally.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Absolutely. We offer complete website redesigns — we audit your existing site, identify what's hurting your performance and conversions, and rebuild it from scratch with modern design and SEO best practices.",
  },
  {
    q: "Do you use WordPress or custom code?",
    a: "We primarily build with React and Next.js for maximum performance, scalability, and SEO. We avoid WordPress for new projects as custom-coded sites are faster, more secure, and easier to maintain long-term.",
  },
  {
    q: "Will my website be SEO-optimized?",
    a: "Yes. Every website we build includes on-page SEO, schema markup, semantic HTML, fast load times (99/100 PageSpeed target), meta tags, canonical URLs, and sitemap — all out of the box.",
  },
  {
    q: "Do you provide website maintenance?",
    a: "Yes. We offer ongoing maintenance packages covering security updates, content changes, performance monitoring, and feature additions. Ask us about our monthly retainer plans.",
  },
  {
    q: "Can you make my website faster (improve PageSpeed)?",
    a: "Yes — PageSpeed optimization is one of our specialties. We've achieved 99/100 scores on Google PageSpeed Insights through image optimization, code splitting, lazy loading, and proper caching strategies.",
  },
];

const WebDesign = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [email, setEmail] = useState("");

  return (
    <>
      <Helmet>
        <title>Web Design Agency in Indore India | H! Dezign</title>
        <meta
          name="description"
          content="H! Dezign is a top web design agency in Indore, India building fast, modern, SEO-optimized websites for startups and businesses."
        />
        <link rel="canonical" href="https://hidezign.com/services/web-design" />
        <meta property="og:title" content="Web Design Agency in Indore India | H! Dezign" />
        <meta
          property="og:description"
          content="H! Dezign is a top web design agency in Indore, India building fast, modern, SEO-optimized websites for startups and businesses."
        />
        <meta property="og:url" content="https://hidezign.com/services/web-design" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://hidezign.com" },
              { "@type": "ListItem", position: 2, name: "Services", item: "https://hidezign.com/services" },
              { "@type": "ListItem", position: 3, name: "Web Design", item: "https://hidezign.com/services/web-design" },
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Web Design",
            provider: {
              "@type": "LocalBusiness",
              name: "H! Dezign",
              url: "https://hidezign.com",
              "@id": "https://hidezign.com",
            },
            areaServed: { "@type": "Country", name: "India" },
            serviceType: "Web Design",
            description:
              "Custom React websites, landing pages, and web applications built for speed, SEO, and conversions.",
            url: "https://hidezign.com/services/web-design",
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(({ q, a }) => ({
              "@type": "Question",
              name: q,
              acceptedAnswer: { "@type": "Answer", text: a },
            })),
          })}
        </script>
      </Helmet>

      <div className="text-sp-bg1 min-h-screen">
        {/* SECTION 1 — HERO */}
        <section className="py-16 md:py-24 lg:py-32">
          <div className="flex flex-col gap-6 max-w-3xl">
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
              Web Design Agency<br />
              <span className="text-sp-primary-s1">in Indore, India</span>
            </h1>
            <p className="text-lg md:text-xl text-sp-bg2/70 max-w-xl">
              We build fast, modern, SEO-ready websites that convert visitors into clients.
            </p>
            <div className="flex flex-wrap gap-4">
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
          <h2 className="font-bold text-3xl md:text-4xl mb-10">What We Build</h2>
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
                className="bg-white rounded-2xl p-8 flex flex-col gap-4 border border-sp-bg1/5 hover:border-sp-primary-s1/30 transition-colors"
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
          <h2 className="font-bold text-3xl md:text-4xl mb-10">Our Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery Call", time: "1–2 days", desc: "We learn your goals, audience, and project requirements." },
              { step: "02", title: "Design & Strategy", time: "3–5 days", desc: "Wireframes, visual direction, and content strategy locked in." },
              { step: "03", title: "Development", time: "7–14 days", desc: "Clean React code, responsive design, performance tuning." },
              { step: "04", title: "Launch & SEO", time: "2–3 days", desc: "Go live with schema markup, sitemap, and PageSpeed above 95." },
            ].map((s) => (
              <div key={s.step} className="flex flex-col gap-3">
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
          <h2 className="font-bold text-3xl md:text-4xl mb-8">Technologies We Use</h2>
          <div className="flex flex-wrap gap-3">
            {["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB", "Vercel", "Cloudinary"].map((tech) => (
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
          <h2 className="font-bold text-3xl md:text-4xl mb-10">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-3 max-w-3xl">
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
