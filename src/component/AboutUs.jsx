import React from 'react'
import { About } from '../data/data'

const AboutUs = () => {
  return (
    <div  className='mt-10 flex justify-center flex-col p-4 md:w-[900px] mx-auto'>
    {
  About.map((item, id) => (
    <div className="flex flex-col md:flex-row mb-8" key={id}>
  <div className={`md:${id % 2 === 0 ? 'order-1' : 'order-none'}`}>
    <img src={item.img} alt={`Thumbnail ${id}`} />
  </div>
  <div className={`md:${id % 2 !== 0 ? 'order-1' : 'order-none'} text-justify overflow-hidden md:ml-3 mt-4 md:mt-0`}>
    <p className='ml-2 mr-2 '>{item.des}</p>
  </div>
</div>

  ))
}


    
    </div>
  )
}

export default AboutUs