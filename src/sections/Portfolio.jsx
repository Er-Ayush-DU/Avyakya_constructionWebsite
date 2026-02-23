import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';

// Import your project images (adjust paths/filenames as needed)
import project1 from '../assets/projects/project1.jpeg';
import project2 from '../assets/projects/project2.jpeg';
import project3 from '../assets/projects/project3.jpeg';
import project4 from '../assets/projects/project4.jpeg';


// Sample project data – add real titles/descriptions later
const projects = [
    {
        id: 1,
        image: project1,
        title: "Cold Storage- Fatehpur, Uttar Pradesh",

    },
    {
        id: 2,
        image: project2,
        title: "Cold storage- Kaushambi, Uttar Pradesh",

    },
    {
        id: 3,
        image: project3,
        title: "Cold Storage- Khaga, Uttar Pradesh",

    },
    {
        id: 4,
        image: project4,
        title: "Cold Storage- Moga, Punjab",

    },
];

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div id="projects" className="w-full bg-gray-950 py-16 md:py-24">
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={slideUpVariants}
                className="lg:w-[85%] w-[92%] mx-auto flex flex-col items-center gap-8"
            >
                {/* Header */}
                <motion.h3
                    variants={slideUpVariants}
                    className="text-yellow-400 text-xl md:text-2xl uppercase tracking-widest"
                >
                    Portfolio
                </motion.h3>

                <motion.h2
                    variants={slideUpVariants}
                    className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center uppercase"
                >
                    Our Best Projects
                </motion.h2>

                <motion.div
                    variants={zoomInVariants}
                    className="w-24 md:w-32 h-1 bg-yellow-400 rounded-full my-4"
                />

                {/* Masonry Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={zoomInVariants}
                    className="w-full columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            whileHover={{ scale: 1.04, transition: { duration: 0.3 } }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative break-inside-avoid cursor-pointer rounded-xl overflow-hidden shadow-lg shadow-black/30"
                            onClick={() => setSelectedProject(project)}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                loading="lazy"
                                className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <h3 className="text-white text-xl md:text-2xl font-bold">{project.title}</h3>
                                <p className="text-gray-300 text-sm md:text-base mt-1">{project.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Simple Lightbox Modal */}
            {selectedProject && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedProject(null)}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="relative max-w-5xl w-full max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute -top-12 right-0 text-white text-4xl hover:text-yellow-400"
                            onClick={() => setSelectedProject(null)}
                        >
                            ×
                        </button>
                        <img
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            className="w-full h-auto max-h-[85vh] object-contain rounded-xl shadow-2xl"
                        />
                        <div className="text-white mt-4 text-center">
                            <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default Portfolio;