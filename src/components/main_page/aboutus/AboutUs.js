'use client'
import { useRef } from "react"
import styles from "./AboutUs.module.css"
import { motion, useInView } from 'framer-motion'
import TextAnimation2 from "@/configs/text_animation2";


export default function AboutUs({trans}){
    const ref = useRef(null);
    const isInView = useInView(ref, {amount: 0.3, once: true});

    const reftitle2 = useRef(null);
    const isInView2 = useInView(reftitle2, {amount: 0.3, once: true});

    const reftitle3 = useRef(null);
    const isInView3 = useInView(reftitle3, {amount: 0.3, once: true});

    return <section className={styles.aboutus_section} id="aboutus">
        <div className={styles.titleblock}>
            <h4 className={styles.titleh4} ref={reftitle2}>
                <TextAnimation2 isInView={isInView2} text={trans[0]}/>
            </h4>
            <h2 className={styles.titleh2} ref={reftitle3}>
                <TextAnimation2 isInView={isInView3} text={trans[1]}/>
            </h2>
        </div>
        <div className={styles.con}  ref={ref}>
            <div className={styles.invis}></div>
            <div className={styles.textblock}>
                <motion.p
                    className={styles.text}
                    animate={isInView ? { x: 0 } : {x: '-100vw'}} 
                    transition={{ type: 'linear', duration: 0.5 }}

                >
                    {trans[2]}<span className={styles.underlind}>{trans[3]}</span>{trans[4]}<br/><br/>{trans[5]}<span className={styles.underlind}>{trans[6]}</span>.
                <a className={styles.bttn} href="#services">
                    {trans[7]}   
                </a>
                </motion.p>
                
            </div>
        </div>
    </section>
}