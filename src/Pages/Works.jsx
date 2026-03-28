import { useEffect } from 'react';
import Projects from './Works/Projects';


const Works = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='min-h-screen text-sp-bg1'>
            <div className='flex flex-col gap-4 py-10 md:py-14 lg:py-20'>
                <h1 className='font-semibold text-4xl lg:text-5xl'>We take ideas <br /> from zero to one</h1>
                <p className='w-full lg:w-1/3 text-sm'>All the products we deliver are the brilliant result of a unique mix: Their founders' ideas and inspiration with our team's expertise and creativity.</p>
            </div>

            <Projects />
        </div>
    )
}

export default Works