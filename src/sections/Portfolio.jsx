import React from 'react';
import project1 from '../assets/projects/project1.jpg'
import project2 from '../assets/projects/project2.jpg'
import project3 from '../assets/projects/project3.jpg'
import project4 from '../assets/projects/project4.jpg'
import project5 from '../assets/projects/project5.jpg'
import project6 from '../assets/projects/project6.jpg'
import project7 from '../assets/projects/project7.jpg'
import project8 from '../assets/projects/project8.jpg'

import {motion} from 'framer-motion'
import { slideUpVariants , zoomInVariants } from './animation';

const Portfolio = () => {
    return (
        <div id='projects' className='w-full'>
            <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideUpVariants}
            className='lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]'

            >
                <motion.h3
                variants={slideUpVariants}
                className='text-yellow-300 text-2xl uppercase'
                >
                    portfolio
                </motion.h3>
                <motion.h2
                variants={slideUpVariants}
                className='uppercase text-white text-5xl font-bold text-center'
                >Our Best Projects</motion.h2>
                <motion.div
                variants={zoomInVariants}
                className='w-[120px] h-[6px] bg-yellow-300'
                >
                </motion.div>
                <motion.div
                initial='hidden'
                whileInView='visible'
                variants={zoomInVariants}
                className='w-full m-auto grid lg:grid-cols-4 grid-cols-1 cursor-pointer'
                >
                    <img src={project1} alt="" className='h-[250px] w-full'/>
                    <img src={project2} alt="" className='h-[250px] w-full'/>
                    <img src={project3} alt="" className='h-[250px] w-full'/>
                    <img src={project4} alt="" className='h-[250px] w-full'/>
                    <img src={project5} alt="" className='h-[250px] w-full'/>
                    <img src={project6} alt="" className='h-[250px] w-full'/>
                    <img src={project7} alt="" className='h-[250px] w-full'/>
                    <img src={project8} alt="" className='h-[250px] w-full'/>
                </motion.div>

            </motion.div>
            
        </div>
    );
};

export default Portfolio;