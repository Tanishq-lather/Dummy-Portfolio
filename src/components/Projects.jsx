import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0}} transition={{duration: 0.8, ease: "easeOut"}} viewport={{ once: true, amount: 0.1 }} className="h-460 md:h-680 py-12 pr-12">
        <h1 className='font-bold text-3xl md:text-5xl pl-8 md:pl-28 pr-2 md:pr-0 bg-gradient-to-r from-[#EA8D8D] to-[#A890FE] bg-clip-text text-transparent italic'>Projects</h1>
        <div className="mt-8 gap-6">

            {/* Project 1 */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0}} transition={{duration: 0.8, ease: "easeOut"}} viewport={{ once: true, amount: 0.2 }} className="">
                <h2 className='font-bold text-xl md:text-3xl pl-8 md:pl-28 pr-2 md:pr-0 pt-10 bg-gradient-to-r from-[#EA8D8D] to-[#A890FE] bg-clip-text text-transparent'>Project 1 :</h2>
                <h2 className='pl-8 md:pl-28 pr-2 md:pr-0 font-semibold text-2xl text-white mt-4'>Youtube channel - Riyah Sharma</h2>
                <div className="w-full md:w-3/4 mt-6 pl-8 md:pl-28 pr-2 md:pr-0">
                    <img src="./assets/C - Project_1.jpg" alt="Project 1" className='rounded-xl'/>
                </div>
                <p className='pl-8 md:pl-28 pr-2 md:pr-0 text-white mt-6 font-medium text-lg md:text-xl'>Creating 150+ Storytekking videos with over total 250k total views.</p>
                <a href="#" target="_blank" rel="noopener noreferrer" className='pl-8 md:pl-28 pr-2 md:pr-0'>
                  <button className='text-[#09101a] bg-[#EA8D8D] font-semibold py-2 px-4 rounded-md mt-6 cursor-pointer hover:bg-[#A890FE] shadow-xl'>View Project</button>
                </a>
            </motion.div>

            {/* Project 2 */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0}} transition={{duration: 0.8, ease: "easeOut"}} viewport={{ once: true, amount: 0.2 }} className="">
                <h2 className='font-bold text-xl md:text-3xl pl-8 md:pl-28 pr-2 md:pr-0 pt-10 bg-gradient-to-r from-[#EA8D8D] to-[#A890FE] bg-clip-text text-transparent'>Project 2 :</h2>
                <h2 className='pl-8 md:pl-28 pr-2 md:pr-0 font-semibold text-2xl text-white mt-4'>Brand Collaboration – GlowUp Skincare</h2>
                <div className="w-full md:w-3/4 mt-6 pl-8 md:pl-28 pr-2 md:pr-0">
                    <img src="./assets/C - Project_2.jpg" alt="Project 2" className='rounded-xl'/>
                </div>
                <p className='pl-8 md:pl-28 pr-2 md:pr-0 text-white mt-6 font-medium text-lg md:text-xl'>Partnered with GlowUp Skincare to create a mini-campaign that reached 10k+ views.</p>
                <a href="#" target="_blank" rel="noopener noreferrer" className='pl-8 md:pl-28 pr-2 md:pr-0'>
                  <button className='text-[#09101a] bg-[#EA8D8D] font-semibold py-2 px-4 rounded-md mt-6 cursor-pointer hover:bg-[#A890FE] shadow-xl'>View Project</button>
                </a>
            </motion.div>

            {/* Project 3 */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0}} transition={{duration: 0.8, ease: "easeOut"}} viewport={{ once: true, amount: 0.2 }} className="">
                <h2 className='font-bold text-xl md:text-3xl pl-8 md:pl-28 pr-2 md:pr-0 pt-10 bg-gradient-to-r from-[#EA8D8D] to-[#A890FE] bg-clip-text text-transparent'>Project 3 :</h2>
                <h2 className='pl-8 md:pl-28 pr-2 md:pr-0 font-semibold text-2xl text-white mt-4'>Instagram Reels Campaign</h2>
                <div className="w-full md:w-3/4 mt-6 pl-8 md:pl-28 pr-2 md:pr-0">
                    <img src="./assets/C - Project_3.jpg" alt="Project 3" className='rounded-xl'/>
                </div>
                <p className='pl-8 md:pl-28 pr-2 md:pr-0 text-white mt-6 font-medium text-lg md:text-xl'>Produced a series of 20 reels for a fashion startup, helping them gain 2k followers in a month.</p>
                <a href="#" target="_blank" rel="noopener noreferrer" className='pl-8 md:pl-28 pr-2 md:pr-0'>
                  <button className='text-[#09101a] bg-[#EA8D8D] font-semibold py-2 px-4 rounded-md mt-6 cursor-pointer hover:bg-[#A890FE] shadow-xl'>View Project</button>
                </a>
            </motion.div>
 
        
        </div>
      </motion.div>

      <hr className='w-full md:w-[90%] mx-auto border-[#A890FE]' />

    </>
  )
}

export default Projects
