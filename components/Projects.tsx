'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

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
    image: '/eigen-onboarding-event.jpg',
    imageType: 'file',
    link: 'https://x.com/Web3Sultan_/status/1957320323990163472?s=20',
    photos: 'https://photos.app.goo.gl/NvSk9j2GbRmTSA8A7',
  },
  {
    content: 'Seasons Introduction Video ',
    description: 'A brand explainer video into Seasons and how it works.',
    technologies: ['Video Editing', 'Video Production', 'Video Marketing', 'Video Analytics'],
    image: '/seasons-video-cover.png',
    imageType: 'file',
    video: 'https://x.com/Web3Sultan_/status/1990652858803298724?s=20',
  },
  {
    event: 'CodeStory{Uyo}',
    description: 'First Story Buildathon In Nigeria powered by story Foundation with 450k+ naira in rewards.',
    features: ['Buildathon', 'Story Foundation', '450k+ Naira Rewards', 'First in Nigeria'],
    image: '/codestory-uyo.jpg',
    imageType: 'file',
    link: 'https://x.com/Web3Sultan_/status/1991084415267623299?s=20',
    photos: 'https://drive.google.com/drive/folders/163GClV-2e_yF9GYPL09ewRi-TXJGaP9D',
  },
  {
    event: 'Shardeum Mini PayFi Hackathon',
    description: 'First Shardeum Buildathon in Nigeria with rewards for developers who build functional Payfi dapps.',
    features: ['Hackathon', 'Shardeum', 'PayFi dApps', 'Developer Rewards', 'First in Nigeria'],
    image: '/shardeum-hackathon.jpg',
    imageType: 'file',
    link: 'https://x.com/Web3Sultan_/status/1962504452478288160?s=20',
    photos: 'https://photos.app.goo.gl/QSb122rnbK1nmrPq8',
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
            const isImageFile = project.imageType === 'file'
            const isVideo = (project as any).videoType === 'twitter'
            
            // Extract Twitter video ID from URL
            const getTwitterVideoId = (url: string) => {
              const match = url.match(/status\/(\d+)/)
              return match ? match[1] : null
            }
            
            return (
              <motion.div
                key={projectTitle}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 rounded-lg overflow-hidden border border-white/10 hover:border-white/30 transition-all hover:bg-white/10 group"
              >
                {isImageFile && project.video ? (
                  <div className="h-64 bg-black border-b border-white/10 relative overflow-hidden group/image">
                    <Image
                      src={projectImage}
                      alt={projectTitle}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      onError={(e) => {
                        console.error('Image failed to load:', projectImage)
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                    <a
                      href={project.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center group/play"
                    >
                      <div className="absolute inset-0 bg-black/40 group-hover/play:bg-black/50 transition-colors"></div>
                      <div className="relative z-10 text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover/play:bg-white/30 group-hover/play:scale-110 transition-all">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.5 8.5v7l6-3.5-6-3.5z"/>
                          </svg>
                        </div>
                        <p className="text-white text-sm font-semibold">Watch Video</p>
                        <p className="text-white/60 text-xs mt-1">Click to view on X</p>
                      </div>
                    </a>
                  </div>
                ) : isVideo && project.video ? (
                  <div className="h-64 bg-black border-b border-white/10 relative overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      <a
                        href={project.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full h-full flex items-center justify-center group"
                      >
                        <div className="relative w-full h-full bg-black/50 flex items-center justify-center">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5"></div>
                          <div className="relative z-10 text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.5 8.5v7l6-3.5-6-3.5z"/>
                              </svg>
                            </div>
                            <p className="text-white text-sm font-semibold">Watch Video</p>
                            <p className="text-white/60 text-xs mt-1">Click to view on X</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                ) : isImageFile ? (
                  <div className="h-64 bg-black border-b border-white/10 relative overflow-hidden">
                    <Image
                      src={projectImage}
                      alt={projectTitle}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      onError={(e) => {
                        console.error('Image failed to load:', projectImage)
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                    <div className="absolute inset-0 bg-white/5 flex items-center justify-center text-white/40 text-sm">
                      Image loading...
                    </div>
                  </div>
                ) : (
                  <div className="h-48 bg-white/5 flex items-center justify-center text-6xl border-b border-white/10">
                    {projectImage}
                  </div>
                )}
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
                    {project.link && !isVideo && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-white text-black rounded-lg font-semibold border-2 border-white transition-all"
                      >
                        View Post
                      </motion.a>
                    )}
                    {project.video && !isVideo && (
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
                    {isVideo && project.video && (
                      <motion.a
                        href={project.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, backgroundColor: '#000', color: '#fff' }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition-all"
                      >
                        Open on X
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

