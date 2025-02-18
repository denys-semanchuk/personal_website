import React from 'react'
import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-text-light mb-8">
            Have a question or want to work together?
          </p>
          
          <div className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-full bg-background/50 border border-primary/10 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <textarea
              placeholder="Your message"
              rows={3}
              className="px-4 py-2 rounded-2xl bg-background/50 border border-primary/10 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-primary to-primary-dark text-white py-2 px-6 rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
            >
              Send Message
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}