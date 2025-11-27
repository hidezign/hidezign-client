import { Link, useLocation } from "react-router-dom";
import Button from "../../Components/Button";
import { LuArrowRight } from "react-icons/lu";
import { Routers } from "../../Routes/Routers";
import React from "react";
import { getProjects } from "../../Api/admin.api";
import { toast } from "sonner";
import Loader from "../../Components/Loader";

const Projects = () => {
    const path = useLocation();

    const [loading, setLoading] = React.useState(false);
    const [visibleCount, setVisibleCount] = React.useState(0);
    const [fullProjects, setFullProjects] = React.useState([]);
    const [displayProjects, setDisplayProjects] = React.useState([]);

    // initial visible counts
    const initialCount = path.pathname === "/" ? 4 : 6;
    const loadMoreStep = 4; // how many more to reveal on each click

    React.useEffect(() => {
        // reset visible count when route changes (optional)
        setVisibleCount(initialCount);
    }, [path.pathname]); // if you navigate between "/", "/projects" etc

    React.useEffect(() => {
        getAllProjects();
    }, []);

    React.useEffect(() => {
        setDisplayProjects(fullProjects.slice(0, visibleCount));
    }, [fullProjects, visibleCount]);

    const getAllProjects = async () => {
        try {
            setLoading(true);
            const response = await getProjects();

            if (response?.success) {
                const projects = response.projects || [];

                // Always filter only active projects first
                const activeProjects = projects.filter(
                    (p) => p.isActive === true
                );

                let finalProjects = [];

                if (path.pathname === "/") {
                    // For home: active + showHome projects
                    finalProjects = activeProjects.filter(
                        (p) => p.isShowHome === true
                    );
                } else {
                    // For other pages: only active projects
                    finalProjects = activeProjects;
                }

                setFullProjects(finalProjects);

                const initial = Math.min(finalProjects.length, initialCount);
                setVisibleCount(initial);
                setDisplayProjects(finalProjects.slice(0, initial));

            } else {
                toast.error(response?.message || "Failed to fetch projects", {
                    duration: 4000,
                });
            }
        } catch (error) {
            toast.error("Something went wrong", {
                description: error?.message,
                duration: 4000,
            });
        } finally {
            setLoading(false);
        }
    };


    const handleLoadMore = () => {
        // Increase visible count by step but not beyond total
        setVisibleCount((prev) =>
            Math.min(fullProjects.length, prev + loadMoreStep)
        );
    };

    const hasMore = displayProjects.length < fullProjects.length;

    return (
        <>
            {loading && <Loader />}
            <div className="w-full flex flex-col gap-y-10 md:gap-y-5 items-start">
                {displayProjects?.map((project, i) => {
                    const isEven = i % 2 === 0;
                    return (
                        <div
                            key={i}
                            className={`w-full flex justify-center ${isEven
                                ? "md:justify-end"
                                : "md:justify-start md:-mt-36"
                                } `}
                        >
                            <div
                                className={`w-full md:w-2/5 aspect-square relative transition-transform`}
                            >
                                <div className="w-full aspect-square overflow-hidden">
                                    <img
                                        src={project?.image.url}
                                        alt={project?.title}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                <div className="flex flex-col gap-1 py-3 bg-transparent">
                                    <div className="flex items-center">
                                        <h3 className="text-xl font-semibold text-slate-900">
                                            {project?.title}
                                        </h3>

                                        <div className="flex-1 border-t border-sp-bg1 mx-4" />

                                        {project?.file && (
                                            <Link
                                                to={project?.file?.url}
                                                target="_blank"
                                                className="ml-4 text-sm text-sp-primary-s1 underline underline-offset-2"
                                            >
                                                Case Study
                                            </Link>
                                        )}
                                        {project?.liveUrl && (
                                            <Link
                                                to={project?.liveUrl}
                                                target="_blank"
                                                className="ml-4 text-sm text-sp-primary-s1 underline underline-offset-2"
                                            >
                                                Live Demo
                                            </Link>
                                        )}
                                    </div>

                                    <p className="text-base text-sp-bg1">
                                        {project?.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="py-20 md:py-40 flex flex-col items-center justify-center gap-y-20 md:gap-y-40">
                <div className="w-full flex items-center justify-center">
                    {path.pathname === "/" ? (
                        <Button
                            title="view more projects"
                            route={Routers.WORK}
                            icon={<LuArrowRight />}
                            className={
                                "flex gap-2 rounded-full items-center capitalize border-2 border-sp-primary-s1 px-6 py-2 text-sp-primary-s1 hover:bg-sp-primary-s1 hover:text-sp-white-s1 transition-all duration-300"
                            }
                        />
                    ) : (
                            <Button
                                title={
                                    hasMore
                                        ? "view more projects"
                                        : "no more projects"
                                }
                                onClick={handleLoadMore} // <-- load more on click
                                disabled={!hasMore}
                                icon={<LuArrowRight />}
                                className={
                                    "flex gap-2 rounded-full items-center capitalize border-2 border-sp-primary-s1 px-6 py-2 text-sp-primary-s1 hover:bg-sp-primary-s1 hover:text-sp-white-s1 transition-all duration-300"
                                }
                            />
                    )}
                </div>

                {path.pathname === "/" && (
                    <h1 className="w-full md:w-2/3 text-center mx-auto text-2xl lg:text-5xl font-medium bg-text-gradient bg-clip-text text-transparent">
                        We partner with ambitious brands to create digital
                        experiences that feel true and drive momentum.
                    </h1>
                )}
            </div>
        </>
    );
};

export default Projects;
