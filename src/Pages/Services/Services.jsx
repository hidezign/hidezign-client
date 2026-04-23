import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import MaxWidthWrapper from '../../Components/MaxWidthWrapper';
import { motion } from 'framer-motion';
import { Routers } from '../../Routes/Routers';

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const services = [
    {
      id: 'ui-ux',
      image: 'https://res.cloudinary.com/ds8buve4c/image/upload/v1764710914/UIUX_oez5oe.png',
      title: 'UI/UX Designing',
      tagline: 'Interfaces users actually enjoy using.',
      description:
        'We craft intuitive, research-driven digital experiences that balance beauty with usability — helping your product feel effortless from the very first click.',
      deliverables: [
        'User research & personas',
        'Wireframes & prototypes',
        'High-fidelity UI design',
        'Usability testing & iteration',
      ],
    },
    {
      id: 'branding',
      image: 'https://res.cloudinary.com/ds8buve4c/image/upload/v1764710914/Branding_uwpn35.png',
      title: 'Branding & Design System',
      tagline: 'Identities that scale with your ambition.',
      description:
        'From naming to visual identity and a fully documented design system — we build brand foundations that stay consistent across every screen, surface, and campaign.',
      deliverables: [
        'Logo & visual identity',
        'Brand guidelines',
        'Design tokens & component libraries',
        'Collateral & marketing assets',
      ],
    },
    {
      id: 'ai-automation',
      image: 'https://res.cloudinary.com/ds8buve4c/image/upload/v1764710914/AIAuto_dyrxs9.png',
      title: 'AI & Automation',
      tagline: 'Smarter workflows. Fewer manual hours.',
      description:
        'We embed AI and automation into your product and operations — from intelligent features and chat interfaces to internal workflow bots that remove the busywork.',
      deliverables: [
        'AI feature integration (LLMs, RAG, agents)',
        'Workflow & process automation',
        'Chatbots & internal assistants',
        'Data pipelines & integrations',
      ],
    },
    {
      id: 'development',
      image: 'https://res.cloudinary.com/ds8buve4c/image/upload/v1764710914/Development_hbp2wm.png',
      title: 'Development',
      tagline: 'Websites and products built to convert.',
      description:
        'Full-stack engineering using modern, battle-tested tooling. From marketing sites to complex SaaS platforms — we ship fast, scalable, and maintainable code.',
      deliverables: [
        'Web apps & SaaS platforms',
        'Marketing websites & landing pages',
        'API & backend development',
        'Performance & SEO optimisation',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Helmet>
        <title>Services | H! Dezign — UI/UX, Branding, AI & Development</title>
        <meta
          name="description"
          content="H! Dezign offers UI/UX design, branding & design systems, AI & automation, and full-stack development. A creative agency in Indore helping brands grow through design and technology."
        />
        <meta name="keywords" content="UI UX design agency, branding agency India, design system, AI automation agency, web development Indore, hidezign services" />
        <link rel="canonical" href="https://hidezign.com/services" />
        <meta property="og:title" content="Services | H! Dezign" />
        <meta
          property="og:description"
          content="UI/UX, Branding, AI & Automation, and Development — everything H! Dezign can help you build."
        />
        <meta property="og:url" content="https://hidezign.com/services" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hidezign.com' },
            { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://hidezign.com/services' },
          ],
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'H! Dezign Services',
          itemListElement: services.map((s, i) => ({
            '@type': 'Service',
            position: i + 1,
            name: s.title,
            description: s.description,
            provider: { '@type': 'Organization', name: 'H! Dezign', url: 'https://hidezign.com' },
          })),
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-sp-white-s1 text-sp-bg1">
        <MaxWidthWrapper>
          {/* Hero */}
          <section className="pt-20 md:pt-32 pb-12 md:pb-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-sp-primary-s1">
                Our Services
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium bg-text-gradient bg-clip-text text-transparent mt-4 leading-tight">
                In what way we can help you
              </h1>
              <p className="text-base md:text-lg text-sp-bg1/70 mt-6">
                We combine design thinking, engineering craft, and strategic innovation to turn your vision into products people love.
              </p>
            </motion.div>
          </section>

          {/* Service Cards Grid */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 pb-20"
            aria-label="Services overview"
          >
            {services.map((service) => (
              <motion.a
                key={service.id}
                variants={itemVariants}
                href={`#${service.id}`}
                className="flex flex-col items-center gap-4 group"
              >
                <div className="overflow-hidden rounded-2xl corner-squircle w-full aspect-square">
                  <img
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={400}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-center text-sp-bg1">
                  {service.title}
                </h3>
              </motion.a>
            ))}
          </motion.section>

          {/* Detailed Service Sections */}
          <div className="flex flex-col gap-20 md:gap-32 pb-24 md:pb-32">
            {services.map((service, idx) => (
              <motion.section
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center scroll-mt-24 ${
                  idx % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
                }`}
              >
                <div className="rounded-3xl overflow-hidden corner-squircle">
                  <img
                    src={service.image}
                    alt={`${service.title} — H! Dezign`}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="w-full h-full aspect-square object-cover"
                  />
                </div>
                <div className="flex flex-col gap-6">
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-sp-primary-s1">
                    0{idx + 1} — Service
                  </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-sp-bg1 leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-lg md:text-xl text-sp-bg1/80 font-medium">
                    {service.tagline}
                  </p>
                  <p className="text-base md:text-lg text-sp-bg1/70 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-sp-bg1/80">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-sp-primary-s1 shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={Routers.CONTACTUS}
                    className="inline-flex items-center gap-2 mt-4 text-sp-primary-s1 font-semibold hover:gap-3 transition-all w-fit"
                  >
                    Start a {service.title.split(' ')[0]} project
                    <span>→</span>
                  </Link>
                </div>
              </motion.section>
            ))}
          </div>

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="py-20 md:py-28 text-center border-t border-sp-bg1/10"
          >
            <h2 className="text-3xl md:text-5xl font-medium bg-text-gradient bg-clip-text text-transparent mb-6">
              Have a project in mind?
            </h2>
            <p className="text-base md:text-lg text-sp-bg1/70 mb-8 max-w-xl mx-auto">
              Let's talk about what you're building and how we can help you ship it.
            </p>
            <Link
              to={Routers.CONTACTUS}
              className="inline-block bg-sp-primary-s1 text-sp-white-s1 px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Get in touch
            </Link>
          </motion.section>
        </MaxWidthWrapper>
      </div>
    </>
  );
};

export default Services;
