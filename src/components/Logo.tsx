import { motion } from 'framer-motion';

export const Logo = () => {
  const letters = 'BuildByDenys'.split('');
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="relative"
    >
      <div className="flex items-center">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="mr-2"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold">
            B
          </div>
        </motion.div>

        <div className="flex">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              variants={item}
              className={`font-bold text-2xl ${
                index < 5 ? 'text-primary' : 'text-text'
              }`}
              whileHover={{
                scale: 1.2,
                color: 'var(--primary)',
                transition: { duration: 0.2 }
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-transparent"
      />
    </motion.div>
  );
};