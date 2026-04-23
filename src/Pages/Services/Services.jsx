import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import MaxWidthWrapper from '../../Components/MaxWidthWrapper';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'UI/UX Designing',
      description: 'Creating intuitive and beautiful user interfaces that solve real problems. We design experiences that users love.',
      icon: '🎨',
      color: 'from-orange-500 to-yellow-400',
    },
    {
      id: 2,
      title: 'Branding & Design System',
      description: 'Building cohesive brand identities and scalable design systems that work across all platforms.',
      icon: '✨',
      color: 'from-green-400 to-cyan-500',
    },
    {
      id: 3,
      title: 'AI & Automation',
      description: 'Integrating AI-powered features and automating workflows to boost productivity and efficiency.',
      icon: '🤖',
      color: 'from-slate-600 to-slate-700',
    },
    {
      id: 4,
      title: 'Development',
      description: 'Full-stack development using modern technologies. From concept to deployment, we build it right.',
      icon: '💻',
      color: 'from-blue-500 to-cyan-400',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <>
      <Helmet>
        <title>Services | H! Dezign — Design, Web & Development</title>
        <meta name="description" content="UI/UX Design, Branding, AI & Automation, Web Development — full-service creative solutions from H! Dezign." />
        <link rel="canonical" href="https://hidezign.com/services" />
      </Helmet>

      <div className="min-h-screen bg-sp-primary-s1 text-sp-bg1">
        <MaxWidthWrapper>
          {/* Header */}
          <div className="py-20 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-sp-bg1/60">
                Our Expertise
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-sp-bg1 mt-4 leading-tight">
                In what way we can help you
              </h1>
              <p className="text-lg text-sp-bg1/70 mt-6">
                We combine design thinking, technical expertise, and strategic innovation to transform your vision into reality.
              </p>
            </motion.div>
          </div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-32"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${service.color} p-0.5 rounded-2xl`}>
                  <div className="bg-sp-primary-s1 rounded-2xl p-8 h-full flex flex-col gap-6 hover:shadow-2xl transition-shadow duration-300">
                    <div className="text-5xl">{service.icon}</div>
                    <div>
                      <h3 className="text-2xl font-semibold text-sp-bg1 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-sp-bg1/70 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <div className="mt-auto">
                      <button className="text-sp-bg1/80 hover:text-sp-bg1 font-medium transition-colors flex items-center gap-2 group/btn">
                        Learn more
                        <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="py-20 md:py-32 text-center border-t border-sp-bg1/10"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-sp-bg1 mb-6">
              Ready to get started?
            </h2>
            <p className="text-lg text-sp-bg1/70 mb-8 max-w-xl mx-auto">
              Let's talk about your project and find the perfect solution.
            </p>
            <Link
              to="/contact-us"
              className="inline-block bg-sp-bg1 text-sp-primary-s1 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-shadow"
            >
              Contact Us
            </Link>
          </motion.div>
        </MaxWidthWrapper>
      </div>
    </>
  );
};

export default Services;
