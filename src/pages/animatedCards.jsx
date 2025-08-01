import React, { useState } from "react";
import { motion } from "framer-motion";

const StaggeredGrid = () => {
  // const [isVisible, setIsVisible] = useState(false);

  // Sample data for grid items
  const gridItems = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Item ${i + 1}`,
    color: `hsl(${(i * 30) % 360}, 70%, 60%)`,
  }));

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  // Item animation variants
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  const toggleAnimation = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Staggered Grid Animation
          </h1>
          {/* <button
            onClick={toggleAnimation}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {isVisible ? "Hide Grid" : "Show Grid"}
          </button> */}
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {gridItems.map((item) => (
            <motion.div
              key={item.id}
              className="relative h-32 rounded-xl shadow-lg cursor-pointer overflow-hidden"
              style={{ backgroundColor: item.color }}
              variants={itemVariants}
              // whileHover={{
              //   scale: 1.05,
              //   rotateZ: 2,
              //   transition: { type: "spring", stiffness: 300 },
              // }}
              // whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold mb-1">{item.id}</div>
                  <div className="text-sm opacity-90">{item.title}</div>
                </div>
              </div>

              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 p-6 bg-gray-800 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-3">
            Key Features:
          </h2>
          <ul className="text-gray-300 space-y-2">
            <li>
              • <strong>Staggered Children:</strong> Items animate in sequence
              with 0.1s delay between each
            </li>
            <li>
              • <strong>Spring Animation:</strong> Smooth, natural feeling
              motion with spring physics
            </li>
            <li>
              • <strong>Hover Effects:</strong> Interactive scaling and rotation
              on hover
            </li>
            <li>
              • <strong>Responsive Grid:</strong> Adapts from 1 to 4 columns
              based on screen size
            </li>
            <li>
              • <strong>Toggle Animation:</strong> Click the button to replay
              the stagger effect
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StaggeredGrid;
