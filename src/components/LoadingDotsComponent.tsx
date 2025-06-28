import {motion} from "framer-motion"

export function LoadingDots() {
    return (
      <div className="flex justify-center items-center space-x-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-white rounded-full"
            animate={{
              y: [0, -6, 0], // Moves up, then back down
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatDelay: 0.2,
              delay: i * 0.2, // Each dot starts at a different time
            }}
          />
        ))}
      </div>
    );
  }