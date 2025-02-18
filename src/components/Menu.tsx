import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const menuItems = ['Portfolio', 'About', 'Services', 'Contact']

export const Menu = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const MenuItems = () => (
    <ul className={`flex ${isMobile ? 'flex-col gap-8 text-2xl font-medium' : 'gap-8'}`}>
      {menuItems.map((item) => (
        <motion.li
          key={item}
          whileHover={{ scale: 1.1 }}
          className={isMobile ? 'text-center py-4 border-b border-primary/10' : ''}
        >
          <a 
            href={`#${item.toLowerCase()}`} 
            className="text-text hover:text-primary transition-colors"
            onClick={() => isMobile && setIsOpen(false)}
          >
            {item}
          </a>
        </motion.li>
      ))}
    </ul>
  )

  return (
    <nav className="relative bg-inherit">
      {isMobile ? (
        <>
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="p-3 text-text hover:text-primary transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed inset-x-0 top-[72px] min-h-[300px] bg-background shadow-xl border-t border-primary/10 p-8"
              >
                <MenuItems />
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        <MenuItems />
      )}
    </nav>
  )
}