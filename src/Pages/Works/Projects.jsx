import { useLocation } from 'react-router-dom';
import Button from '../../Components/Button';
import { LuArrowRight } from 'react-icons/lu';
import { Routers } from '../../Routes/Routers';

const Projects = () => {

    const Project = [
        {
            title: "Project One",
            description: "Description for project one.",
            imageUrl: "https://images.unsplash.com/photo-1553181001-f9cf6c45afca?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            subtitle: "Subtitle for project one."
        },
        {
            title: "Project One",
            description: "Description for project one.",
            imageUrl: "https://images.unsplash.com/photo-1602015103066-f45732e2aa84?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            subtitle: "Subtitle for project one."
        },
        {
            title: "Project One",
            description: "Description for project one.",
            imageUrl: "https://images.unsplash.com/photo-1553181001-f9cf6c45afca?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            subtitle: "Subtitle for project one."
        },
        {
            title: "Project One",
            description: "Description for project one.",
            imageUrl: "https://images.unsplash.com/photo-1602015103066-f45732e2aa84?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            subtitle: "Subtitle for project one."
        },
    ]

    const path = useLocation();

    return (
        <>
            <div className="w-full flex flex-col gap-y-10 md:gap-y-5 items-start">
                {Project.map((project, i) => {
                    const isEven = i % 2 === 0;
                    return (
                        <div
                            key={i}
                            className={`w-full flex justify-center ${isEven ? "md:justify-end" : "md:justify-start md:-mt-36"} `}
                        >
                            <div
                                className={`w-full md:w-2/5 aspect-square relative transition-transform`}
                            >

                                <div className="w-full aspect-square overflow-hidden">
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                <div className="flex flex-col gap-1 py-3 bg-transparent">
                                    <div className="flex items-center">
                                        <h3 className="text-xl font-semibold text-slate-900">
                                            {project.title}
                                        </h3>

                                        <div className="flex-1 border-t border-sp-bg1 mx-4" />

                                        <div className="text-sm text-sp-bg1/80 whitespace-nowrap">
                                            Case Study
                                        </div>
                                    </div>

                                    <p className="text-base text-sp-bg1">
                                        {project.subtitle}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className='py-20 md:py-40 flex flex-col items-center justify-center gap-y-20 md:gap-y-40'>
                <div className='w-full flex items-center justify-center'>
                    {path.pathname === "/" ? (
                        <Button title="view more projects" route={Routers.WORK} icon={<LuArrowRight />} className={"flex gap-2 rounded-full items-center capitalize border-2 border-sp-primary-s1 px-6 py-2 text-sp-primary-s1"} />
                    ) : (
                        <Button title="view more projects" icon={<LuArrowRight />} className={"flex gap-2 rounded-full items-center capitalize border-2 border-sp-primary-s1 px-6 py-2 text-sp-primary-s1"} />
                    )}
                </div>

                {path.pathname === "/" && (
                    <h1 className='w-full md:w-2/3 text-center mx-auto text-2xl lg:text-5xl font-medium bg-text-gradient bg-clip-text text-transparent'>We partner with ambitious brands to create digital experiences that feel true and drive momentum.</h1>
                )}
            </div>
        </>
    )
}

export default Projects