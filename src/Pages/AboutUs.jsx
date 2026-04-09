import { useEffect } from "react";
import AboutHome from "./AboutUs/AboutHome";
import HowWeHelp from "./AboutUs/HowWeHelp";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <div className="min-h-screen text-sp-bg1 flex flex-col gap-5 lg:pb-28">
            <Helmet>
                <title>About H! Dezign | Creative Agency Indore</title>
                <meta
                    name="description"
                    content="Learn about H! Dezign, a creative agency in Indore helping ambitious brands with design, branding, and digital experiences."
                />
                <link rel="canonical" href="https://hidezign.com/about-us" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "AboutPage",
                        name: "About H! Dezign",
                        url: "https://hidezign.com/about-us",
                        description:
                            "About page for H! Dezign, a creative web design and branding agency.",
                        isPartOf: {
                            "@type": "WebSite",
                            name: "H! Dezign",
                            url: "https://hidezign.com/",
                        },
                    })}
                </script>
            </Helmet>
            <AboutHome />
            <HowWeHelp />
        </div>
    );
};

export default AboutUs;
