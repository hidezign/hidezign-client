import { Link } from 'react-router-dom';

const Services = () => {

    const services = [
        {
            image: 'https://res.cloudinary.com/ds8buve4c/image/upload/v1764710914/UIUX_oez5oe.png',
            title: 'UI/UX Designing',
            hash: 'ui-ux',
        },
        {
            image: 'https://res.cloudinary.com/ds8buve4c/image/upload/v1764710914/Branding_uwpn35.png',
            title: 'Branding & Design System',
            hash: 'branding',
        },
        {
            image: 'https://res.cloudinary.com/ds8buve4c/image/upload/v1764710914/AIAuto_dyrxs9.png',
            title: 'AI & Automation',
            hash: 'ai-automation',
        },
        {
            image: 'https://res.cloudinary.com/ds8buve4c/image/upload/v1764710914/Development_hbp2wm.png',
            title: 'Development',
            hash: 'development',
        },

    ]
    return (
        <div className='flex flex-col items-center justify-center gap-5 pt-40 py-20 border-b border-t border-sp-bg1 '>
            <h2 className="text-center text-2xl md:text-5xl font-medium bg-text-gradient bg-clip-text text-transparent tracking-wide">
                In what way we can help you
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-10 mt-10'>
                {services.map((service, index) => (
                    <Link
                        key={index}
                        to={`/services#${service.hash}`}
                        aria-label={`Learn more about ${service.title}`}
                        className='flex flex-col items-center justify-center gap-4 group cursor-pointer'
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            width={400}
                            height={400}
                            loading="lazy"
                            className='aspect-square corner-squircle object-cover rounded-2xl group-hover:scale-[1.03] transition-transform duration-500'
                        />
                        <h3 className='text-2xl md:text-2xl font-medium text-center text-sp-bg1 group-hover:text-sp-primary-s1 transition-colors'>{service.title}</h3>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Services
