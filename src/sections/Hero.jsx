// import React from 'react';
// import heroimg from '../assets/heroimages/heroimage2.webp'
// import { motion } from 'framer-motion'
// import { slideUpVariants, zoomInVariants } from './animation';
// import { Link } from 'react-scroll';


// const Hero = () => {
//     return (
//         <div id='hero' className='bg-black w-full lg:h-[700px] h-fit m-auto pt-[60px] lg:pt-[0px] lg:px-[150px] px-[20px] flex justify-between items-center lg:flex-row flex-col lg:gap-5 gap-[50px] bg-cover bg-center opacity-60'
//             style={{ backgroundImage: `url(${heroimg})` }}>
//             <motion.div
//                 initial="hidden"
//                 whileInView="visible"
//                 variants={slideUpVariants}
//                 className='lg:w-[60%] w-full flex flex-col justify-center items-start lg:gap-8 gap-4'
//             >
//                 <motion.h1
//                     variants={slideUpVariants}
//                     className='text-yellow-300 text-2xl'
//                 >WE ARE BUILDERS
//                 </motion.h1>
//                 <motion.h1
//                     variants={slideUpVariants}
//                     className='text-gray-500 uppercase text-[50px] font-bold'
//                 >we will build your dream </motion.h1>
//                 <div className='w-[120px] h-[6px] bg-yellow-300'></div>
//                 <p className='text-black text-[20px]'>Whether you’re dreaming of a new structure or enhancing an existing space, Sumon Structures is here to make it happen. With unmatched expertise and dedication, we ensure a smooth building experience from start to finish.</p>

//                 <motion.div
//                     initial="hidden"
//                     whileInView="visible"
//                     variants={zoomInVariants}
//                     className='flex justify-normal items-center gap-5'
//                 >
//                     <motion.button
//                         variants={zoomInVariants}
//                         className='bg-yellow-300 hover:bg-white hover:text-black px-10 py-3 rounded-lg text-black font-bold'
//                     >
//                         READ MORE

//                     </motion.button>

//                     <Link to="contact">
//                         <motion.button
//                             variants={zoomInVariants}
//                             className='border-white hover:border-yellow-300 hover:text-yellow-300 border-2 px-10 py-3 rounded-lg text-white font-bold'>
//                             REACH US
//                         </motion.button>
//                     </Link>

//                 </motion.div>
//             </motion.div>
//             <div className='w-[40%] flex flex-col justify-end items-end'>
//                 <motion.img
//                     initial='hidden'
//                     whileInView='visible'
//                     variants={zoomInVariants}
//                     src={heroimg}
//                     alt='hero image'
//                     className='lg:h-[600px] h-[300px] lg:mb-[-100px]'
//                 />
//             </div>
//         </div>
//     );
// };

// export default Hero;

import React from 'react';
import heroImg from '../assets/heroimages/heroimage2.webp'; // renamed for clarity
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative w-full min-h-screen lg:min-h-[800px] flex items-center bg-black bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 py-20 lg:py-0 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        {/* Left content - Text + CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="lg:w-3/5 w-full flex flex-col items-start gap-6 lg:gap-10 text-left"
        >
          <motion.h3
            variants={slideUpVariants}
            className="text-yellow-400 text-xl md:text-2xl uppercase tracking-wider font-medium"
          >
            WE ARE BUILDERS
          </motion.h3>

          <motion.h1
            variants={slideUpVariants}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-tight drop-shadow-lg"
          >
            We Will Build<br className="hidden sm:block" /> Your Dream
          </motion.h1>

          <motion.div
            variants={zoomInVariants}
            className="w-32 h-1.5 bg-yellow-400 rounded-full my-2"
          />

          <motion.p
            variants={slideUpVariants}
            className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-2xl drop-shadow-md"
          >
            Whether you’re dreaming of a new structure or enhancing an existing space, Sumon Structures is here to make it happen. With unmatched expertise and dedication, we ensure a smooth building experience from start to finish.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            className="flex flex-col sm:flex-row gap-5 mt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-10 py-4 rounded-lg shadow-lg transition-all duration-300 uppercase tracking-wide"
            >
              READ MORE
            </motion.button>

            <Link to="contact" smooth={true} duration={800}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold px-10 py-4 rounded-lg transition-all duration-300 uppercase tracking-wide"
              >
                REACH US
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Optional right visual - subtle faded secondary image or shape (remove if not needed) */}
        {/* If you want to keep a floating image on large screens, uncomment and adjust */}
        {/* <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 0.7, x: 0 }}
          transition={{ duration: 1.2 }}
          className="hidden lg:block lg:w-2/5"
        >
          <img
            src={heroImg}
            alt="Construction site"
            className="rounded-xl shadow-2xl opacity-80 scale-110 -rotate-2"
          />
        </motion.div> */}
      </div>
    </div>
  );
};

export default Hero;