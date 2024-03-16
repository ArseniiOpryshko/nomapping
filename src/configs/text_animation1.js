'use client'
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from 'framer-motion'
import { SplitText } from "./SplitText";

export default function TextAnimation1({text, delay}){
    let [visible, setVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setVisible(true);
        }, delay); 
        return () => clearTimeout(timeout); 
    }, []);

    return <AnimatePresence>
    {visible && (
        <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
        <SplitText
            initial={{ y: '100%' }}
            animate="visible"
            variants={{
                visible: i => ({
                    y: 0,
                    transition: {
                    delay: i * 0.1
                    }
                })
            }}
        >
            {text}
        </SplitText>
        </motion.span>
    )}
    </AnimatePresence>
}