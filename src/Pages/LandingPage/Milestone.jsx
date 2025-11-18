import MaxWidthWrapper from "../../Components/MaxWidthWrapper"
import { motion } from "framer-motion"

const Milestone = () => {

    const items = [
        {
            title: "‎ \n‎ \n"
        },
        {
            title: "Transform your vision into an outstanding digital experience.",
        },
        {
            title: "Increase your probability of success by mitigating technical risks early.",
        },
        {
            title: "Save time by accessing an experienced team committed to your success.",
        },
        {
            title: "Find a safe space to reach the best outcome through collaborative decision-making.",
        },
    ];


    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.08
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 16 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    const lineVariants = {
        hidden: { scaleY: 0 },
        visible: { scaleY: 1, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div className="min-h-screen py-20 md:py-40 text-sp-bg1 flex flex-col gap-20 md:gap-28">
            <div className="text-3xl md:text-5xl flex flex-col gap-3 font-medium tracking-wide">
                <h1>Milestone-based.</h1>
                <h1>Result-oriented</h1>
                <h1>approach</h1>
            </div>

            <div className="flex md:justify-end ">
                <section className="w-full md:w-3/5 flex items-start justify-center">
                    <div className="max-w-4xl w-full grid grid-cols-4 gap-6 items-start">
                        {/* Left column */}
                        <div className="col-span-4">
                            <h3 className="w-2/3 md:w-1/2 text-sp-bg1/70 text-base lg:text-sm font-normal">
                                Strike the optimal balance between investment and impact. Working with us, you will:
                            </h3>
                        </div>

                        {/* Right timeline column */}
                        <div className="mx-1/2 col-span-4 lg:col-span-3 ml-14 lg:ml-28 relative">

                            <motion.div
                                className="absolute -left-7 top-8 bottom-20 lg:bottom-8"
                                variants={lineVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.15 }}
                                style={{ originY: 0 }}
                                aria-hidden="true"
                            >
                                <div className="w-px bg-gray-300 h-full mx-auto" />
                            </motion.div>

                            <motion.div
                                className="space-y-12"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                {items.map((it, idx) => (
                                    <motion.article
                                        key={it.id ?? idx}
                                        variants={itemVariants}
                                        className="relative flex items-start"
                                        aria-labelledby={`timeline-title-${idx}`}
                                    >
                                        <div className="absolute -left-10 top-5 w-fit flex items-start justify-center">
                                            <div
                                                className="w-6 h-6 rounded-full border border-gray-400 bg-white flex items-center justify-center"
                                                aria-hidden="true"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-gray-700" />
                                            </div>
                                        </div>

                                        <div className="ml-4">
                                            <h4 id={`timeline-title-${idx}`} className="sr-only">
                                                {`Step ${idx + 1}`}
                                            </h4>
                                            <p className="text-gray-800 text-lg leading-8 font-light">
                                                {it.title}
                                            </p>
                                        </div>
                                    </motion.article>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Milestone