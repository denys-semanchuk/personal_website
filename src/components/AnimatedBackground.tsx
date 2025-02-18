import { motion } from 'framer-motion';

export const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute w-full h-full bg-grid-pattern opacity-[0.03]" />
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="floating-circle"
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: i * 2,
            ease: "easeInOut"
          }}
          style={{
            left: `${30 * i}%`,
            top: `${20 * i}%`,
          }}
        />
      ))}
    </div>
  );
};