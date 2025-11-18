import HeroSection from './HeroSection'
import Services from './Services'
import Milestone from './Milestone'
import Projects from '../Works/Projects'
import { useEffect } from 'react'
import Works from '../Works'

const Home = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <HeroSection />
      <Works />
      <Services />
      <Milestone />
    </>
  )
}

export default Home