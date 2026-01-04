import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='my-6 flex justify-center items-center'>
        <img src={assets.hero} alt="" className='w-full' />
    </div>
  )
}

export default Hero