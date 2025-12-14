'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-primary-600/20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-primary-200 to-primary-400 bg-clip-text text-transparent">
              Hi, I'm{'Joseph Joe '}
            </span>
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Joseph Joe
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Developer Relations, Community Growth and Advocacy, Marketing and Contents
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            I connect developers with technology through strategic content, community building, and advocacy.
            Passionate about empowering developer communities and creating meaningful engagement.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-primary-500/50 transition-shadow"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-primary-500 text-primary-400 rounded-lg font-semibold hover:bg-primary-500/10 transition-colors"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          onClick={scrollToNext}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-primary-400 transition-colors"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}

