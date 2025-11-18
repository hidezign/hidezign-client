const Services = () => {

    const services = [
        {
            image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070',
            title: 'UI/UX Designing',
        },
        {
            image: 'https://images.unsplash.com/photo-1416339134316-0e91dc9ded92?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1674',
            title: 'Branding & Design System'
        },
        {
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2015',
            title: 'AI & Automation'
        },
        {
            image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1064',
            title: 'Development'
        },

    ]
    return (
        <div className='flex flex-col items-center justify-center gap-5 pt-40 py-20 border-b border-t border-sp-bg1 '>
            <h2 className="text-center text-2xl md:text-5xl font-medium bg-text-gradient bg-clip-text text-transparent tracking-wide">
                In what way we can help you
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-10 mt-10'>
                {services.map((service, index) => (
                    <div key={index} className='flex flex-col items-center md:items-start justify-center gap-4'>
                        <img src={service.image} alt={service.title} className='aspect-square object-cover rounded-xl' />
                        <h3 className='text-2xl md:text-2xl font-medium text-center md:text-left text-sp-bg1'>{service.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services