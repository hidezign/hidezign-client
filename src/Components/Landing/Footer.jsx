import { FaBehance, FaDribbble, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MainContent } from '../../Content/MainContent'
import MaxWidthWrapper from '../MaxWidthWrapper';
import { FaXTwitter } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { Routers } from '../../Routes/Routers';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const LinksSet1 = [
        { name: "Home", link: "/" },
        { name: "Work", link: "/work" },
        // { name: "Case Studies", link: "/case-studies" },
        // { name: "Blogs", link: "/blogs" },
    ];
    const LinksSet2 = [
        { name: "About us", link: "/about-us" },
        { name: "Contact us", link: "/contact-us" },
    ];

    const [hoverStates, setHoverStates] = useState({
        home: false,
        work: false,
        aboutUs: false,
        contactUs: false,
        blogs: false,
        caseStudies: false,
    });

    const toggleHoverState = (key, state) => {
        setHoverStates((prev) => ({ ...prev, [key]: state }));
    };

    const socialLinks = [
        {
            name: 'Dribbble', url: MainContent.DribbbleLink, icon: <FaDribbble />
        },
        {
            name: 'Twitter', url: MainContent.TwitterLink, icon: <FaXTwitter />
        },
        {
            name: 'Instagram', url: MainContent.InstagramLink, icon: <FaInstagram />
        },
        {
            name: 'LinkedIn', url: MainContent.LinkedInLink, icon: <FaLinkedinIn />
        },
        {
            name: 'Behance', url: MainContent.BehanceLink, icon: <FaBehance />
        },
    ];

    const path = useLocation().pathname;

    const words = "We have the perfect combination of mindset, skills, processes, and pricing structure. Together, we'll transform your ideas into the best-in-class digital experience."


    return (
        <>
            {path !== Routers.CONTACTUS &&
                <div className='md:h-screen bg-sp-primary-s1 py-20 md:py-40'>
                    <MaxWidthWrapper className='h-full'>
                        <div className='w-full h-full flex flex-col md:flex-row items-center justify-between gap-20'>
                            <div className='w-full md:w-1/2 h-full flex'>
                                <h3 className='text-2xl md:text-4xl font-regular'>We have the perfect combination of mindset, skills, processes, and pricing structure. Together, we'll transform your ideas into the best-in-class digital experience.</h3>
                                {/* <TextGenerateEffect words={words} className={'text-2xl md:text-4xl font-regular text-sp-white-s1'} duration={0.5} /> */}
                            </div>
                            <div className='w-full md:w-1/2 h-full flex items-start md:items-end md:justify-end'>
                                <h3 className='text-3xl md:text-5xl tracking-wider font-medium'>Let's talk <br />about your vision.</h3>
                            </div>
                        </div>
                    </MaxWidthWrapper>
                </div>
            }

            <footer className="text-sp-bg1 py-6 flex flex-col">
                <MaxWidthWrapper>
                    {path !== Routers.CONTACTUS && (
                        <div className='flex flex-col items-start mt-20 mb-5 md:mt-28 md:mb-10'>
                            <h1 className='text-4xl md:text-6xl font-medium text-sp-bg1'>Sounds Like a Fit?</h1>
                            <h1 className='text-4xl md:text-6xl font-medium text-sp-bg1'>Let's Connect!</h1>
                        </div>
                    )}

                    <div className='w-full py-14 my-5 flex flex-col md:flex-row items-start justify-start gap-10 md:gap-44 border-t border-b border-sp-bg1 h-fit'>
                        <div className='h-full flex flex-col items-start justify-between gap-6 md:gap-10'>
                            <a href={`mailto:${MainContent.Email}`} className="flex gap-2 items-center justify-start group w-fit text-sp-bg1">
                                <h2 className="text-2xl md:text-3xl font-medium relative after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">{MainContent.Email}</h2>
                            </a>

                            <div className='flex gap-2 '>
                                {socialLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-lg md:text-xl text-sp-bg1 p-3 rounded-full border border-sp-bg1 hover:bg-sp-bg1 hover:text-sp-primary-s1 transition-all duration-300 flex items-center justify-center"
                                    >
                                        {link.icon}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className='flex gap-20 md:gap-44'>
                            <div className='flex flex-col gap-2'>
                                {LinksSet1?.map((item, index) => {
                                    return (
                                        <>
                                            <motion.div
                                                key={index}
                                                className="w-fit whitespace-nowrap flex flex-col"
                                                onMouseEnter={() =>
                                                    toggleHoverState(item.name, true)
                                                }
                                                onMouseLeave={() =>
                                                    toggleHoverState(item.name, false)
                                                }
                                            >
                                                <Link to={item.link} className={`text-sp-bg1 text-lg cursor-pointer`}>
                                                    {item.name.replace(/([A-Z])/g, " $1").trim()}
                                                </Link>
                                                <div
                                                    className={`border-t-2 border-sp-bg1 rounded-xl transition-all duration-300 ${hoverStates[item.name] ? "w-full" : "w-0"
                                                        }`}
                                                ></div>
                                            </motion.div>
                                        </>

                                    )
                                })}
                            </div>
                            <div className='flex flex-col gap-2'>
                                {LinksSet2?.map((item, index) => {
                                    return (
                                        <>
                                            <motion.div
                                                key={index}
                                                className="w-fit whitespace-nowrap flex flex-col"
                                                onMouseEnter={() =>
                                                    toggleHoverState(item.name, true)
                                                }
                                                onMouseLeave={() =>
                                                    toggleHoverState(item.name, false)
                                                }
                                            >
                                                <Link to={item.link} className={`text-sp-bg1 text-lg cursor-pointer`}>
                                                    {item.name.replace(/([A-Z])/g, " $1").trim()}
                                                </Link>
                                                <div
                                                    className={`border-t-2 border-sp-bg1 rounded-xl transition-all duration-300 ${hoverStates[item.name] ? "w-full" : "w-0"
                                                        }`}
                                                ></div>
                                            </motion.div>
                                        </>

                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <p className="text-xs text-gray text-center">
                        © {currentYear} <Link to="/" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}>{MainContent.AppName}</Link>. All rights reserved
                    </p>
                </MaxWidthWrapper>
            </footer>
        </>
    )
}

export default Footer