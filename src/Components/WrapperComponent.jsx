import Navbar from './Landing/Navbar'
import MaxWidthWrapper from './MaxWidthWrapper'
import Footer from './Landing/Footer'
import LeadFunnelPopup from './LeadFunnelPopup'
import NewsletterBar from './NewsletterBar'

const WrapperComponent = ({ children }) => {
    return (
        <div className='text-sp-white-s1'>
            <Navbar />
            <MaxWidthWrapper>
                {children}
            </MaxWidthWrapper>
            <Footer />
            <LeadFunnelPopup />
            <NewsletterBar />
        </div>
    )
}

export default WrapperComponent