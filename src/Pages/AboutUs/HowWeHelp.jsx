const HowWeHelp = () => {
    const SERVICES = [
        {
            title: "UI/UX Designing",
        },
        {
            title: "Branding & Design System",
        },
        {
            title: "AI & Automation",
        },
        {
            title: "Web & App Development",
        },
    ];

    return (
        <div className="lg:min-h-screen py-10 lg:py-20 flex flex-col gap-20">
            <h1 className="text-center text-3xl lg:text-5xl font-semibold leading-tight tracking-wide">
                How We Help <br />
                Brands ?
            </h1>

            <div className="w-full">
                {SERVICES.map((service, index) => (
                    <div
                        key={index}
                        className="
    relative w-full border-t-2 last:border-b-2 border-sp-bg1 
    py-5 lg:py-10 flex items-center justify-between 
    group overflow-hidden transition-all duration-300
    before:content-[''] before:absolute before:left-0 before:right-0 before:top-1/2 before:h-0 before:bg-sp-bg1 
    before:transition-all before:duration-500 before:ease-in-out before:origin-top
    after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-1/2 after:h-0 after:bg-sp-bg1 
    after:transition-all after:duration-500 after:ease-in-out after:origin-bottom
    hover:before:h-1/2 hover:after:h-1/2
  "
                    >
                        {/* Number */}
                        <h1
                            className="
      text-xl lg:text-8xl font-semibold bg-text-gradient bg-clip-text text-transparent
      relative z-10 transition-colors duration-500 group-hover:text-sp-white-s1
    "
                        >
                            0{index + 1}
                        </h1>

                        {/* Title */}
                        <h2
                            className="
      w-28 lg:w-1/5 text-xl lg:text-4xl text-end font-medium 
      relative z-10 transition-colors duration-500 group-hover:text-sp-white-s1
    "
                        >
                            {service.title}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowWeHelp;
