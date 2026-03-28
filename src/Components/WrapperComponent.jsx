import Navbar from './Landing/Navbar'
import MaxWidthWrapper from './MaxWidthWrapper'
import Footer from './Landing/Footer'

const WrapperComponent = ({ children }) => {
    return (
        <div className='text-sp-white-s1'>
            <Navbar />
            <MaxWidthWrapper>
                {children}
            </MaxWidthWrapper>
            <Footer />
        </div>
    )
}

export default WrapperComponent