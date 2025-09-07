import React from "react";
import { productData } from "../data/productData";
import NewArrivalsCard from "./newArrivalsCard";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

const NewArrivalsSection = () => {
  const newArrivals = productData.filter((product) => product.isNewArrival);

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

  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ type: "tween", duration: 0.8 }}
        className="h-full w-ful pt-24  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-[10px] lg:gap-5 px-[12px] md:px-[6px] lg:px-0 bg-red-00 "
      >
        {newArrivals.map((item) => (
          <NewArrivalsCard key={item.id} item={item} />
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default NewArrivalsSection;
