import { useEffect } from 'react';
import Projects from './Works/Projects';
import { Helmet } from 'react-helmet-async';


const Works = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='min-h-screen text-sp-bg1'>
            <Helmet>
                <title>Our Work &amp; Portfolio | H! Dezign</title>
                <meta name="description" content="Explore H! Dezign portfolio projects across web design, branding, UI/UX, and development engagements." />
                <link rel="canonical" href="https://hidezign.com/work" />
                <meta property="og:title" content="Our Work &amp; Portfolio | H! Dezign" />
                <meta property="og:description" content="Explore H! Dezign portfolio projects across web design, branding, UI/UX, and development engagements." />
                <meta property="og:url" content="https://hidezign.com/work" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        {"@type":"ListItem","position":1,"name":"Home","item":"https://hidezign.com"},
                        {"@type":"ListItem","position":2,"name":"Work","item":"https://hidezign.com/work"}
                    ]
                })}</script>
            </Helmet>
            <div className='flex flex-col gap-4 py-10 md:py-14 lg:py-20'>
                <h1 className='font-semibold text-4xl lg:text-5xl'>We take ideas <br /> from zero to one</h1>
                <p className='w-full lg:w-1/3 text-sm'>All the products we deliver are the brilliant result of a unique mix: Their founders' ideas and inspiration with our team's expertise and creativity.</p>
            </div>

            <Projects />
        </div>
    )
}

export default Works
