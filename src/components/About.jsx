import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0}} transition={{duration: 0.8, ease: "easeOut"}} viewport={{ once: true, amount: 0.2 }} className="h-120 md:h-110 py-12 pr-12">
        <h1 className='font-bold text-3xl md:text-5xl pl-8 md:pl-28 pr-2 md:pr-0 bg-gradient-to-r from-[#EA8D8D] to-[#A890FE] bg-clip-text text-transparent italic'>About Me</h1>
        <p className='text-white pl-8 md:pl-28 pr-2 md:pr-0 pt-10 font-semibold text-xl'>I'm a passionate about creating stories that inspire people to take action in their lives. Over the last 2 years, I've worked with personal brands and startups to build their audience through storytelling videos.</p>
        <h3 className='pl-8 md:pl-28 pr-2 md:pr-0 pt-10 font-semibold text-2xl bg-gradient-to-r from-[#EA8D8D] to-[#A890FE] bg-clip-text text-transparent'>Skill List</h3>
        <ul className='text-white pl-8 md:pl-28 pr-2 md:pr-0 pt-4 font-medium text-xl'>
          <li className='list-disc'>Storytelling 🎬</li>
          <li className='list-disc'>Video Editing ✂️</li>
          <li className='list-disc'>Social Media Growth 📈</li>
        </ul>
      </motion.div>
      
        <hr className='w-full md:w-[90%] mx-auto border-[#A890FE]' />
    </>
  )
}

export default About
