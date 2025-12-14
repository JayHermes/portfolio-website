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
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-primary-500 transition-all hover:shadow-lg hover:shadow-primary-500/20 group"
            >
              <div className="h-48 bg-gradient-to-br from-primary-900/50 to-primary-600/50 flex items-center justify-center text-6xl">
                {project.image}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors"
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg font-semibold hover:border-primary-500 hover:text-primary-400 transition-colors"
                  >
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

