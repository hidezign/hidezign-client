import HeroSection from './HeroSection'
import Services from './Services'
import Milestone from './Milestone'
import Projects from '../Works/Projects'
import { useEffect } from 'react'
import Works from '../Works'
import { Helmet } from 'react-helmet-async'

const Home = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <main id="main-content" role="main" aria-label="Main content">
      <Helmet>
        <title>H! Dezign — Creative Web Design &amp; Branding Agency | Indore</title>
        <meta name="description" content="H! Dezign is a creative web design and branding agency in Indore, India. We build fast, modern, SEO-optimized websites and digital experiences for ambitious brands." />
        <link rel="canonical" href="https://hidezign.com/" />
        <meta property="og:title" content="H! Dezign — Creative Web Design &amp; Branding Agency | Indore" />
        <meta property="og:description" content="H! Dezign is a creative web design and branding agency in Indore, India. We build fast, modern, SEO-optimized websites and digital experiences for ambitious brands." />
        <meta property="og:url" content="https://hidezign.com/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://hidezign.com"}]
        })}</script>
      </Helmet>
      <HeroSection />
      <Works />
      <Services />
      <Milestone />
    </main>
  )
}

export default Home
