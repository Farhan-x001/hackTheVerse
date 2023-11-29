import React from "react";
import { PrizeCard } from "./PrizeCard";
import { PrizeCard1 } from "./PrizeCard1";
import { PrizeCardWithTextOnly } from "./PrizeCardWithTextOnly";
import { motion } from "framer-motion";

export const Prizes = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  return (
    <div>
      <h1 className="text-center text-glow text-5xl md:text-6xl font-semibold text-white pb-14" id ="prizes">
        Win exciting prizes!
      </h1>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={container}
        viewport={{ once: true, amount: 0.4 }}
        className="flex flex-col gap-6 my-12 items-center"
      >
        <PrizeCard
          bgColor={"bg-[#ffffff]"}
          heading={"Winner #1"}
          amount={"150000"}
          img={"/images/trophy-gold.png"}
        />
        <PrizeCard
          bgColor={"bg-[#ffffff]"}
          heading={"Winner #2"}
          amount={"100000"}
          img={"/images/trophy-silver.png"}
        />
        <PrizeCard
          bgColor={"bg-[#ffffff]"}
          heading={"Winner #3"}
          amount={"50000"}
          img={"/images/trophy-bronze.png"}
        />
              <PrizeCard1
          bgColor={"bg-[#ffffff]"}
          heading={"Goodies For Top 10 Teams"}
          img={"/images/trophy-bronze.png"}
        /> 
        
    
              </motion.div>
        
    </div>
  );
};
