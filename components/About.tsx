'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            About Me
          </h2>
          <div className="w-24 h-0.5 bg-white mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-white/80 leading-relaxed">
              I'm a Developer Relations professional dedicated to building thriving
              developer communities and creating impactful content. With expertise in community
              growth, advocacy, and marketing, I connect developers with the tools and knowledge they need to succeed.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              My journey in Developer Relations started with a passion for connecting people
              and technology, and it has evolved into a career focused on empowering developer and non-developer
              communities through strategic content, meaningful events, and authentic advocacy.
              I enjoy building bridges between developers and the technologies that inspire them.
              I also breakdown these technologies for non-developers to understand and learn about them.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              When I'm not coding, I create contents, host events, and build communities.
              Whether it's organizing developer/non-developer meetups, crafting educational resources, or
              building connections within the tech ecosystem, I'm always working to strengthen
              the bonds that make our communities thrive.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: 'Years of Experience', value: '3+' },
              { label: 'Communities Built', value: '45+' },
              { label: 'Events Hosted', value: '50+' },
              { label: 'Ecosystems', value: '5+' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all"
              >
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

