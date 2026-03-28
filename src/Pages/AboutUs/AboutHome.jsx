import React from "react";
import Button from "../../Components/Button";
import { Routers } from "../../Routes/Routers";
import TiltedImageStackResponsive from "./TiltedImageStack";

const AboutHome = () => {
    return (
        <div className="lg:min-h-screen">
            <div className="pt-28 lg:pt-48 pb-10 border-b-2 border-sp-bg1 flex flex-col items-center gap-5">
                <h1 className="w-full text-center text-2xl lg:text-5xl font-semibold leading-tight">
                    WE ARE THE TEAM OF AVENGERS <br /> AVAILABLE FOR YOUR HELP
                </h1>
                <Button title={'Wanted to talk ?'} className="bg-sp-bg1 text-sp-white-s1 rounded-full px-6 py-2" route={Routers.CONTACTUS} />
            </div>

            <div className="mt-10">
                <TiltedImageStackResponsive />
            </div>
        </div>
    );
};

export default AboutHome;
