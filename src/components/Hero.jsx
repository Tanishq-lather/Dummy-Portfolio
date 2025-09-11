import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <>
      <div className="w-full h-100 pt-14 flex flex-row justify-between">
        {/* Hero Section */}
        <div className="w-3/4">
            <motion.h1 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0}} transition={{duration: 0.8, ease: "easeOut"}} viewport={{ once: true, amount: 0.2}} className='font-bold text-3xl md:text-5xl pl-8 md:pl-28 pr-2 md:pr-0 bg-gradient-to-r from-[#EA8D8D] to-[#A890FE] bg-clip-text text-transparent italic'>Hi, I'm Riyah!</motion.h1>
            <div className="flex flex-col mt-14 gap-6">
                <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{duration: 0.6, ease: "easeOut"}} viewport={{ once: true }} style={{ originX: 0 }} className="w-[82%] h-10 md:h-14 flex justify-start items-center pl-4 rounded-r-lg font-bold text-xl bg-gradient-to-r from-[#EA8D8D] to-[#A890FE] text-[#09101a]">Content Creator</motion.div>
                <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{duration: 0.6, ease: "easeOut"}} viewport={{ once: true }} style={{ originX: 0 }} className="w-[82%] h-10 md:h-14 flex justify-start items-center pl-4 rounded-r-lg font-bold text-xl bg-gradient-to-r from-[#EA8D8D] to-[#A890FE] text-[#09101a]">Storyteller</motion.div>
                <a>
                  <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{duration: 0.6, ease: "easeOut"}} viewport={{ once: true }} style={{ originX: 0 }} className="w-[82%] h-10 md:h-14 flex justify-start items-center pl-4 rounded-r-lg font-bold text-xl bg-gradient-to-r from-[#EA8D8D] to-[#A890FE] text-[#09101a] hover:underline cursor-pointer">Visit YT</motion.div>
                </a>
            </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0}} transition={{duration: 0.8, ease: "easeOut"}} viewport={{ once: true, amount: 0.2}} className="flex w-1/2 justify-end mr-4 md:mr-30">
          <div className="h-40 w-40 md:h-74 md:w-74 rounded-full border-8 md:border-14 border-[#A890FE] overflow-hidden">
            <img src="/assets/Riyah-client.png" alt="Hero Image" />
          </div>
        </motion.div>
        
      </div>

      <hr className='w-full md:w-[90%] mx-auto border-[#A890FE]' />
    </>
  )
}

export default Hero
