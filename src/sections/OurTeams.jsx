import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import { clients } from '../export';

const OurTeams = () => {
  return (
    <div id="ourteams" className="w-full bg-gray-900 py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[85%] w-[92%] mx-auto flex flex-col items-center gap-8"
      >
        <motion.h3
          variants={slideUpVariants}
          className="text-yellow-300 text-2xl md:text-3xl uppercase tracking-wide"
        >
          Our Team
        </motion.h3>


        <motion.div
          variants={zoomInVariants}
          className="w-28 md:w-32 h-1 bg-yellow-300 rounded-full my-2"
        />

        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 md:gap-10 mt-10">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={zoomInVariants}
              className="relative flex flex-col items-center"
            >
              {/* Circular avatar - positioned on top with enough space */}
              <div className="relative z-10 mb-[-50px] md:mb-[-60px]">
                <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-yellow-300 shadow-xl shadow-yellow-300/30">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Card with increased top padding to accommodate the overlapping image */}
              <div className="bg-gray-800 border-2 border-gray-700 hover:border-yellow-300 transition-all duration-300 rounded-xl pt-20 pb-10 px-6 md:px-8 text-center w-full min-h-[260px] flex flex-col justify-between shadow-lg">
                <p className="text-gray-200 text-base md:text-lg italic leading-relaxed">
                  {client.about}
                </p>

                <div className="mt-6">
                  <h3 className="text-white text-xl md:text-2xl font-bold uppercase tracking-wide">
                    {client.name}
                  </h3>
                  <h4 className="text-yellow-300 text-base md:text-lg mt-1 font-medium">
                    {client.post}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default OurTeams;