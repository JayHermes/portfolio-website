'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const socialLinks = [
  { name: 'GitHub', icon: '💻', url: 'https://github.com' },
  { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com' },
  { name: 'Twitter', icon: '🐦', url: 'https://twitter.com' },
  { name: 'Email', icon: '✉️', url: 'mailto:your.email@example.com' },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 bg-gray-900">
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
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
              <p className="text-gray-300 leading-relaxed">
                Feel free to reach out if you're looking for a Developer Relations professional, have a question, or just want to connect.
              </p>
            </div>
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-primary-500 transition-colors group"
                >
                  <span className="text-2xl">{link.icon}</span>
                  <span className="text-gray-300 group-hover:text-primary-400 transition-colors">
                    {link.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
                placeholder="Joseph Joe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
                placeholder="samjoejnr@gmail.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-primary-500/50 transition-shadow"
            >
              {submitted ? 'Message Sent! ✓' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

