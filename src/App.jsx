import React from 'react'
import RouterPage from './Routes/RouterPage'
import { ReactLenis, useLenis } from 'lenis/react'
import { Toaster } from 'sonner'
import { useLocation } from 'react-router-dom';
import CookieConsentBanner from './Components/CookieConsentBanner';

const GA_MEASUREMENT_ID = 'G-QFLGVSSW5C';

const ScrollHandler = () => {
  const lenis = useLenis(); // now this is inside ReactLenis
  const location = useLocation();

  // Scroll to top on every route change
  React.useEffect(() => {
    if (!lenis) return;
    lenis.scrollTo(0, { duration: 0.8 }); // or duration: 0 for instant
  }, [location, lenis]);

  // Optional: subscribe to scroll events
  React.useEffect(() => {
    if (!lenis) return;
    const unsubscribe = lenis.on("scroll", (e) => {
      // called every RAF scroll if you need it
      // console.log("scroll", e);
    });
    return () => unsubscribe?.();
  }, [lenis]);

  return null;
};

const AnalyticsTracker = () => {
  const location = useLocation();

  React.useEffect(() => {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
      return;
    }

    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: `${location.pathname}${location.search}`,
      page_title: document.title,
    });
  }, [location.pathname, location.search]);

  return null;
};

const App = () => {

  return (
    <>
      <a
        href="#main-content"
        style={{
          position: 'absolute',
          top: '-40px',
          left: 0,
          background: '#0F38DB',
          color: 'white',
          padding: '8px 16px',
          zIndex: 99999,
          textDecoration: 'none',
          fontSize: '14px',
          transition: 'top 0.2s'
        }}
        onFocus={(e) => e.target.style.top = '0'}
        onBlur={(e) => e.target.style.top = '-40px'}
      >
        Skip to main content
      </a>
      <ReactLenis root>
        <div className='font-gilroy bg-[#F0F0F0]'>
          <RouterPage />
          <ScrollHandler />
          <AnalyticsTracker />
          <CookieConsentBanner />
        </div>
      </ReactLenis>
      <Toaster />
    </>
  )
}

export default App
