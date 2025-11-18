import { MainContent } from '../../Content/MainContent'
import Button from '../Button'
import { Link, useNavigate } from 'react-router-dom'
import MaxWidthWrapper from '../MaxWidthWrapper'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetTrigger,
} from "@/Components/ui/sheet"
import { TbMenu } from 'react-icons/tb'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Routers } from '../../Routes/Routers'
import { X } from 'lucide-react'

const Navbar = () => {

  const links = MainContent.NavLinks;

  const [hoverStates, setHoverStates] = useState({
    home: false,
    work: false,
    aboutUs: false,
  });

  const toggleHoverState = (key, state) => {
    setHoverStates((prev) => ({ ...prev, [key]: state }));
  };

  // const navigate = useNavigate();
  // const handleNavigate = () => {
  //   navigate('/contact-us');
  //   // console.log("clicked")
  // }
  return (
    <MaxWidthWrapper>
      <div className='flex items-center py-4 md:py-6 justify-between w-full'>
        {/* Logo */}
        <Link to={Routers.WEBSITE}>
          <div className='flex gap-5 justify-center items-center'>
            <img src={MainContent.AppLogo} alt="" className='h-12 md:h-10 sm:h-8 object-cover' />
          </div>
        </Link>

        {/* Navigation Links */}
        <div className='hidden md:flex gap-6 justify-center items-center'>
          {links?.map((item, index) => {
            return (
              <>
                {/* <Link
                  key={item.name}
                  to={item.link}
                  className={`text-sp-bg1 cursor-pointer ${window.location.pathname === item.link ? 'font-medium' : 'font-normal'}`}
                >
                  {item.name}
                </Link> */}
                <motion.div
                  key={index}
                  className="w-fit whitespace-nowrap flex flex-col"
                  onMouseEnter={() =>
                    toggleHoverState(item.name, true)
                  }
                  onMouseLeave={() =>
                    toggleHoverState(item.name, false)
                  }
                >
                  <Link to={item.link} className={`text-sp-bg1 cursor-pointer ${window.location.pathname === item.link ? 'font-medium' : 'font-normal'}`}>
                    {item.name.replace(/([A-Z])/g, " $1").trim()}
                  </Link>
                  <div
                    className={`border-t-2 border-sp-bg1 rounded-xl transition-all duration-300 ${hoverStates[item.name] ? "w-full" : "w-0"
                      }`}
                  ></div>
                </motion.div>
              </>

            )
          })}
          <Button title={'Contact Us'} className="bg-sp-primary-s1 rounded-full px-6 py-2" route={Routers.CONTACTUS} />
        </div>
        <div className='flex md:hidden'>
          <Sheet>
            <SheetTrigger className='p-2 rounded-full text-3xl text-sp-white-s1 bg-sp-bg1'>
              <TbMenu />
            </SheetTrigger>
            <SheetContent className='w-4/5 p-4'>
              <div className='flex justify-between items-center'>
                <h1 className='text-3xl font-medium'>Menu</h1>
                <SheetClose asChild>
                  <X className="text-3xl" />
                </SheetClose>
              </div>
              <div className='flex flex-col py-10'>
                {links?.map((item, index) => {
                  return (
                    <SheetClose key={index} asChild>
                      <Link
                        key={item.name}
                        to={item.link}
                        className={`p-4 text-xl border-t last:border-b border-sp-text-s1 text-sp-bg1 cursor-pointer ${window.location.pathname === item.link ? 'font-medium' : 'font-normal'}`}
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  )
                })}
                <SheetClose asChild>
                  <Link
                    to={Routers.CONTACTUS}
                    className={`p-4 text-xl border-t last:border-b border-sp-text-s1 text-sp-bg1 cursor-pointer`}
                  >
                    Contact Us
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default Navbar