import { useEffect } from "react";
import AboutHome from "./AboutUs/AboutHome";
import HowWeHelp from "./AboutUs/HowWeHelp";

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
            <AboutHome />
            <HowWeHelp />
        </div>
    );
};

export default AboutUs;
