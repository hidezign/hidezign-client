import { useEffect, useRef, useState } from 'react';
import brandsPrev from '../../assets/brandsPrev.png'
import { InView } from "react-intersection-observer";
import ScrollDown from '../../Components/ScrollDown';
import HiDezign from '../../assets/HiDezign.svg'
import Button from '../../Components/Button';
import { Routers } from '../../Routes/Routers';

const HeroSection = () => {

    const videoRef = useRef(null);

    const [showVideoControls, setShowVideoControls] = useState(true);

    const handleVideoClickEvent = () => {
        if (videoRef.current.paused) {
            setShowVideoControls(false);
            videoRef.current.play();
        } else {
            setShowVideoControls(true);
            videoRef.current.pause();
        }
    };

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    return (
        <div className='min-h-screen border-b border-sp-bg1 '>

            <div className='relative w-full py-10'>
                {/* <div className='absolute'> */}
                <img src={HiDezign} alt="" />
                {/* </div> */}
                <div className='absolute w-full -bottom-10 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-5 md:gap-10'>
                    <h1 className='w-full text-center capitalize text-sp-bg1 font-semibold text-2xl md:text-5xl'>We Design It. We Build It. <br /> We Make It Work.</h1>
                    <div className='flex gap-10 items-center justify-center'>
                        <Button title="See our impact" route={Routers.WORK} className={"bg-sp-primary-s1 px-14 py-2 rounded-full text-sp-white-s1 capitalize font-medium border-2 border-transparent hover:bg-transparent hover:text-sp-primary-s1 hover:border-2 hover:border-sp-primary-s1 transition-all duration-300"} />
                        <Button title="Work with us" route={Routers.CONTACTUS} className={"hidden md:block bg-transparent border-2 border-sp-bg1 px-14 py-2 rounded-full text-sp-bg1 capitalize font-medium hover:bg-sp-bg1 hover:text-sp-white-s1 transition-all duration-300"} />
                    </div>
                </div>
            </div>

            <InView
                threshold={isMobile ? 0.9 : 0.7}
                rootMargin={isMobile ? "0px 0px -10% 0px" : "0px"}
                onChange={(inView) => {
                    if (inView) {
                        videoRef.current.play();
                        setShowVideoControls(false);
                    } else {
                        videoRef.current.pause();
                        setShowVideoControls(true);
                    }
                }}
            >
                {({ ref }) => (
                    <div
                        ref={ref}
                        className="relative w-full h-[70vh] md:h-full md:aspect-video bg-black overflow-hidden mt-20 md:mt-0"
                    >
                        <video
                            ref={videoRef}
                            // src={Video}
                            src={'https://res.cloudinary.com/ds8buve4c/video/upload/v1763748147/YT_INTRO_axlp9a.mp4'}
                            className="w-full h-full object-cover"
                            loop
                            playsInline
                            onClick={handleVideoClickEvent}
                        />

                        {showVideoControls && (
                            <div className="absolute inset-0 w-full h-full  bg-sp-bg1/30 video-controls py-20 md:py-40" onClick={handleVideoClickEvent}>
                                <div className='flex gap-5 items-center justify-center uppercase'>
                                    <span className='scale-50 md:scale-75'>
                                        <ScrollDown />
                                    </span>
                                    <p className='text-sm'>Scroll to start</p>
                                </div>
                            </div>
                        )}

                    </div>
                )}
            </InView>

            <div className='flex flex-col items-center justify-center gap-10 py-20 md:py-40 md:px-20'>
                {/* <h1 className='text-3xl text-sp-bg1'>Solved problems for</h1>
                <img src={brandsPrev} alt="Brands Preview" className='md:w-1/3' /> */}
                <h1 className='text-xl md:text-4xl font-medium text-center bg-text-gradient bg-clip-text text-transparent tracking-wide'>
                    From brand identity to UI/UX to full-stack development - we create digital experiences that look world-class and perform even better.
                </h1>
            </div>

        </div>
    )
}

export default HeroSection