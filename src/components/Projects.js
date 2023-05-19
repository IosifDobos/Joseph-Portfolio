import React from 'react'
import { motion } from 'framer-motion'
import 'animate.css';
// data
import projects from '../data/projects'

export const Projects = () => {

    return (
        <section className='projects' id='projects'>
            <h1>PROJECTS</h1>
            <h5 className="title text-center m-heading text-secondary">PROJECTS</h5>
            <div className='subtitle'>Check out some of my work!</div>
            <div className='relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
                <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 ">
                    {projects && projects?.map((project, index) => (
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                            key={index}
                            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 h-screen"
                        >
                            <motion.img
                                initial={{ y: -300, opacity: 0 }}
                                transition={{ duration: 1.2 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className='project-img'
                                src={project.imageUrl} alt={project.imageUrl}
                            />
                            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                                <h4 className='text-4xl font-semibold text-center'>
                                    <span className='underline decoration-[#F7AB0A]/50'>Case study {index + 1} of {projects.length}:</span>
                                    {' '}{project.title}
                                </h4>
                                {/* <p className='text-center'>{project.shortDesc}</p> */}
                                <p className='text-center md:text-left'>{project.description}</p>
                                <p className='text-center'><i className='fa fa-tag'> </i> {project.tools}</p>
                                <div className="link-btn text-center">
                                    <a href={project.demoUrl} className="btn-md" target="_blank" rel="noopener noreferrer">Live Demo</a>
                                    <a href={project.githubUrl} className="btn-md btn-space" target="_blank" rel="noopener noreferrer">GitHub</a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className='w-full absolute top[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
            </div >
        </section>
    )
}