import React from 'react'
import { motion } from 'framer-motion';
import { BackgroundPattern } from './BackgroundPattern';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const socialLinks = [
  { 
    icon: <MdEmail className="w-5 h-5" />, 
    text: 'Email', 
    href: 'mailto:denys@email.com',
    ariaLabel: 'Send email'
  },
  { 
    icon: <FaLinkedinIn className="w-5 h-5" />, 
    text: 'LinkedIn', 
    href: 'https://linkedin.com/',
    ariaLabel: 'Visit LinkedIn profile'
  },
  { 
    icon: <FaGithub className="w-5 h-5" />, 
    text: 'GitHub', 
    href: 'https://github.com/',
    ariaLabel: 'Visit GitHub profile'
  },
  { 
    icon: <FaTwitter className="w-5 h-5" />, 
    text: 'Twitter', 
    href: 'https://twitter.com/',
    ariaLabel: 'Visit Twitter profile'
  }
];

const navigationLinks = {
  Company: ['About', 'Services', 'Portfolio'],
  Support: ['Contact', 'FAQ', 'Privacy Policy'],
  Contact: ['denys@email.com', '+1234567890', 'Location, Country']
};

export const Footer = () => {
  return (
    <footer className="relative pt-20 pb-10 bg-gradient-to-b from-background to-primary/5">
      <BackgroundPattern className="-rotate-1 opacity-30 overflow-hidden" />
      <div className="container mx-auto px-4 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-2xl font-bold mb-6 text-primary"
            >
              BuildByDenys
            </motion.h3>
            <p className="text-text-light mb-6 max-w-md">
              Crafting exceptional digital experiences through innovative web development 
              and creative solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.text}
                  href={link.href}
                  aria-label={link.ariaLabel}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-2 rounded-full bg-primary/5 text-primary hover:bg-primary/10 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          {Object.entries(navigationLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-lg font-semibold mb-6">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <motion.li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(' ', '-')}`}
                      className="text-text-light hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-text-light text-sm"
            >
              © {new Date().getFullYear()} BuildByDenys. All rights reserved.
            </motion.p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  className="text-sm text-text-light hover:text-primary transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};