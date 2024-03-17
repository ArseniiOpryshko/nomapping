'use client'
import { useRef } from "react"
import styles from "./AboutUs.module.css"
import { motion, useInView } from 'framer-motion'
import TextAnimation2 from "@/configs/text_animation2";


export default function AboutUs(){
    const ref = useRef(null);
    const isInView = useInView(ref, {amount: 0.3, once: true});

    const reftitle2 = useRef(null);
    const isInView2 = useInView(reftitle2, {amount: 0.3, once: true});

    const reftitle3 = useRef(null);
    const isInView3 = useInView(reftitle3, {amount: 0.3, once: true});

    return <section className={styles.aboutus_section} id="aboutus">
        <div className={styles.titleblock}>
            <h4 className={styles.titleh4} ref={reftitle2}>
                <TextAnimation2 isInView={isInView2} text="WHAT WE DO"/>
            </h4>
            <h2 className={styles.titleh2} ref={reftitle3}>
                <TextAnimation2 isInView={isInView3} text="WE CREATE VISUAL SHOW, INTERACTIVE INSTALLATIONS AND MOTION DESIGN."/>
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
                    Our work is a synergy of creation, design, engineering and marketing. We are the experts in creation of <span className={styles.underlind}>unique visual images</span>. Interactive installations, light show, video presentations and state-of-the-art promotional products.<br/><br/>The team of the best specialists — producers, art-directors, engineers and marketers — will realize your project, using <span className={styles.underlind}>the freshest ideas and modern technologies</span>.
                <a className={styles.bttn} href="#services">
                    Our services    
                </a>
                </motion.p>
                
            </div>
        </div>
    </section>
}