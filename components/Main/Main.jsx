/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { ApplyWithDevfolioBtn } from "../ApplyWithDevfolioBtn/ApplyWithDevfolioBtn";
// import Logo from "../../public/images/Fin-X-Thon.png";
// import Pogo from "../../public/images/new.svg";
import Logo from "../../public/images/logo.png";
import Pogo from "../../public/images/theVerse-b.png";
import DevfolioWhite from "../../public/images/devfolio-white.svg";
import MainImage from "../../public/images/main-img.png";
import { motion } from "framer-motion";
import { JoinDiscordBtn } from "../JoinDiscordBtn/JoinDiscordBtn";

export const Main = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
    
  };
  return (
    <>
    
      <motion.main
        initial="hidden"
        whileInView="show"
        variants={container}
        viewport={{ once: true, amount: 0.4}}
        className="text-white mt-0 pt-0  z-1 text-center "
        id="main-page"
      >             <motion.div
                    className=""
                    animate={{
                        opacity: [1, 0],
                        // visibility: ['block', 'hidden'],
                    }}
                    transition={{ duration: 1, delay: 0 }}
                />
                <motion.div
                    className=""
                    animate={{
                        opacity: [0, 1, 1],
                        scale: [150, 1, 1],
                        
                    }}
                    transition={{ duration: 1, delay: 0 }}
                >
                    <Image
                        src={Logo}
                        
            height={200}
            width={200}
                        className=""
                        alt={'Green Saber'}
                        style={{ alignSelf: 'center' }}

                    />
                    
                </motion.div>
                
    <Image
                        src={Pogo}
                        
            height={120}
            width={900}
                        className=""
                        alt={'Green Saber'}
                        style={{ alignSelf: 'center' }}

                    />
       
        <h1 className="text-center text-glow text-lg mb-4 md:text-2xl font-semibold">
            Break the financial pattern
        </h1>
        <h1 className="text-center text-glow text-lg mb-4 md:text-3xl font-semibold">
          DEC 16th- 17th, 2023 &#x2022; CODEOHOLICS
        </h1>
        <div className="flex flex-wrap justify-center my-6 gap-1">
         <a href="https://www.glbitm.org/"> <ApplyWithDevfolioBtn /></a>
          
          
        </div>
        
        <div className="flex flex-wrap justify-center my-6 gap-1">
         <a href="https://www.google.com/"> <JoinDiscordBtn /></a>
          
          
        </div>
        
      <div className="hidden-lg">
      
      </div>
      </motion.main>   
       </>
  );
};