import React from 'react'
import RouterPage from './Routes/RouterPage'
import { ReactLenis, useLenis } from 'lenis/react'
import { Toaster } from 'sonner'
import { useLocation } from 'react-router-dom';


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
    </>
  )
}

export default App