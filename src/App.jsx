import React from 'react'
import RouterPage from './Routes/RouterPage'
import { ReactLenis, useLenis } from 'lenis/react'
import { Toaster } from 'sonner'
import { useLocation } from 'react-router-dom';

const ScrollHandler = () => {
  const lenis = useLenis();
  const location = useLocation();
  React.useEffect(() => {
    if (!lenis) return;
    lenis.scrollTo(0, { duration: 0.8 });
  }, [location, lenis]);
  React.useEffect(() => {
    if (!lenis) return;
    const unsubscribe = lenis.on("scroll", (e) => {});
    return () => unsubscribe?.();
  }, [lenis]);
  return null;
};

const App = () => {
  return (
    <>
      <ReactLenis root>
        <div className='font-gilroy bg-[#F0F0F0]'>
          <RouterPage />
          <ScrollHandler />
        </div>
      </ReactLenis>
      <Toaster />
      <a href="https://wa.me/919285114937?text=Hi%20H!%20Dezign%2C%20I%20am%20interested%20in%20your%20services!" target="_blank" rel="noopener noreferrer" style={{position:'fixed',bottom:'24px',right:'24px',zIndex:9999,backgroundColor:'#25D366',borderRadius:'50%',width:'56px',height:'56px',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 4px 12px rgba(0,0,0,0.3)',cursor:'pointer',textDecoration:'none'}}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width="32" height="32" />
      </a>
    </>
  )
}

export default App