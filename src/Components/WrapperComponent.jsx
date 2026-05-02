import Navbar from './Landing/Navbar'
import MaxWidthWrapper from './MaxWidthWrapper'
import Footer from './Landing/Footer'
import ExitIntentPopup from './ExitIntentPopup'
import NewsletterBar from './NewsletterBar'

const WrapperComponent = ({ children }) => {
    return (
        <div className='text-sp-white-s1'>
            <Navbar />
            <MaxWidthWrapper>
                {children}
            </MaxWidthWrapper>
            <Footer />
            <ExitIntentPopup />
            <NewsletterBar />
        </div>
    )
}

export default WrapperComponent