'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: '🛒',
    link: '#',
    github: '#',
  },
  {
    event: 'EigenTribe Launch and Onboarding Event',
    description: 'Organized and hosted a launch and onboarding event for EigenTribe, the community and vibe layer of Eigen. Also, the first in NIgeria!',
    features: ['Hands-on Workshop', 'Private access to join Eigen Community', 'Developer and Research support'],
    image: 'C:\Users\JOE\Downloads\Eigen onboarding event.jpg',
    link: 'https://x.com/Web3Sultan_/status/1957320323990163472?s=20',
    photos: 'https://photos.app.goo.gl/NvSk9j2GbRmTSA8A7',
  },
  {
    content: 'Seasons Introduction Video ',
    description: 'A brand explainer video into Seasons and how it works.',
    technologies: ['Video Editing', 'Video Production', 'Video Marketing', 'Video Analytics'],
    video: 'https://x.com/Web3Sultan_/status/1990652858803298724?s=20',
  },
  {
    title: 'Social Media Analytics',
    description: 'Analytics platform for tracking social media performance with detailed insights and reports.',
    technologies: ['Vue.js', 'Python', 'D3.js', 'REST APIs'],
    image: '📊',
    link: '#',
    github: '#',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Featured Projects
          </h2>
          <div className="w-24 h-0.5 bg-white mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const projectTitle = project.title || project.event || project.content || `Project ${index + 1}`
            const projectImage = project.image || '📁'
            
            return (
              <motion.div
                key={projectTitle}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 rounded-lg overflow-hidden border border-white/10 hover:border-white/30 transition-all hover:bg-white/10 group"
              >
                <div className="h-48 bg-white/5 flex items-center justify-center text-6xl border-b border-white/10">
                  {projectImage}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:underline transition-all">
                    {projectTitle}
                  </h3>
                  <p className="text-white/70 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  {(project.technologies || project.features) && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {(project.technologies || project.features || []).map((tech: string) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80 border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex gap-4 flex-wrap">
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-white text-black rounded-lg font-semibold border-2 border-white transition-all"
                      >
                        {project.video ? 'Watch Video' : 'Live Demo'}
                      </motion.a>
                    )}
                    {project.video && (
                      <motion.a
                        href={project.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-white text-black rounded-lg font-semibold border-2 border-white transition-all"
                      >
                        Watch Video
                      </motion.a>
                    )}
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, backgroundColor: '#000', color: '#fff' }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition-all"
                      >
                        GitHub
                      </motion.a>
                    )}
                    {project.photos && (
                      <motion.a
                        href={project.photos}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, backgroundColor: '#000', color: '#fff' }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition-all"
                      >
                        View Photos
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

