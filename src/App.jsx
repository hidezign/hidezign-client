import React from 'react'
import RouterPage from './Routes/RouterPage'
import { ReactLenis, useLenis } from 'lenis/react'

const App = () => {

  const lenis = useLenis((lenis) => {
    // called every scroll
    // console.log(lenis)
  })

  return (
    <>
      <ReactLenis root />
      <div className='font-gilroy bg-[#F0F0F0]'>
        <RouterPage />
      </div>
    </>
  )
}

export default App