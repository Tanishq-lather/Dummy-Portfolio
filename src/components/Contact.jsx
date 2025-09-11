import React from 'react'
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <> 
    <motion.h1 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0}} transition={{duration: 0.8, ease: "easeOut"}} viewport={{ once: true, amount: 0.2 }} className='font-bold text-3xl pl-8 md:pl-28 pr- md:pr-0  md:text-5xl bg-gradient-to-r from-[#EA8D8D] to-[#A890FE] bg-clip-text text-transparent italic'>Contact</motion.h1>
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0}} transition={{duration: 0.8, ease: "easeOut"}} viewport={{ once: true, amount: 0.2 }} className="flex justify-center">

    <div className="h-200 w-full md:w-1/2 p-4 md:p-8">
      <div className="mt-8 gap-6 bg-[#A890FE] rounded-xl p-8">
        <h2 className='font-bold text-xl md:text-3xl text-[#09101a]'>Get in Touch:</h2>
        <form className=''>
          <div className='mt-4'>
            <label className='block text-[#09101a] mb-2'>Name:</label>
            <input type="text" className='w-full md:w-3/4 p-2 rounded-md border-2 border-[#09101a]' />
          </div>
          <div className='mt-4'>
            <label className='block text-[#09101a] mb-2'>Email:</label>
            <input type="email" className='w-full md:w-3/4 p-2 rounded-md border-2 border-[#09101a]' />
          </div>
          <div className='mt-4'>
            <label className='block text-[#09101a] mb-2'>Message:</label>
            <textarea className='w-full md:w-3/4 p-2 rounded-md border-2 border-[#09101a]' rows="4"></textarea>
          </div>
          <button className='bg-[#09101a] text-[#A890FE] font-semibold py-2 px-4 rounded-md mt-6 cursor-pointer hover:bg-[#67589f] hover:text-[#09101a] shadow-xl'>Send Message</button>
        </form>
      <div className="h-16 mt-8">
        {/* Social media links  */}
        <div className="flex flex-row justify-between items-center px-8 py-4 border-y-2 border-y-[#09101a] rounded-md">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-x-twitter fa-2x"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-envelope fa-2x"></i>
          </a>
        </div>
      </div>
      </div>


    </div>

    </motion.div>
    </>
  )
}

export default Contact
