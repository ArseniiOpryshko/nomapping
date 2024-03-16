'use client'
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { SplitText } from "./SplitText";

export default function TextAnimation2({text, isInView}){

    return <AnimatePresence>
    {
        <motion.span
            initial={{
                
                x: -150
            }}
            whileInView={{
                opacity: 1,
                x: 0, 
                transition: {
                    duration: 1 
                }
            }}
        >
        <SplitText
            initial={{ y: '100%' }}
            animate="visible"
            variants={{
                visible: isInView ? i => ({
                    y: 0,
                    transition: {
                    delay: i * 0.1
                    }
                }) : null
            }}
        >
            {text}
        </SplitText>
        </motion.span>
    }
    </AnimatePresence>
}