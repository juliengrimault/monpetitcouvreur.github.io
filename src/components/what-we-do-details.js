import * as React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"

const WhatWeDoDetails = ({ title, details, image }) => {
  return (
    <div className='container bg-gray-100 text-black rounded-lg pt-10 pb-5 px-5 gap-5 flex flex-col md:flex-row md:gap-8 md:px-8 md:align-bottom'>
        <div className='flex flex-col gap-3'>
            <h2 className='text-3xl font-bold'>{title}</h2>
            <p className='text-lg text-gray-700'>{details}</p>
        </div>
        <img className='rounded-lg md:max-w-60' src={image}/>
    </div>
  )
}

export default WhatWeDoDetails