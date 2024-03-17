import { motion, useAnimation, useInView } from "framer-motion";
import styles from "./Menu.module.css"
import { useEffect } from "react";

export default function Menu({isActive, handleClick}){
    const controls = useAnimation();
    useEffect(() => {
        if (isActive) {
          controls.start({ opacity: 1, y: 0, transition: { staggerChildren: 0.1 } });
        }
      }, [isActive, controls]);

    return <motion.section className={styles.menu_section}
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50}}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.content}>
            <img className={styles.light1} alt="light1" src="/lights/menu1.png"/>
            <img className={styles.light2} alt="light2" src="/lights/menu2.png"/>
            <img className={styles.light3} alt="light3" src="/lights/menu3.png"/>


            <div className={styles.flex_column}>
                <div className={styles.languages}>
                    <button className={styles.language}>УКР</button>
                    <button className={styles.language}>ENG</button>
                </div>
                <div className={styles.routes}>
                    <motion.a onClick={handleClick} className={styles.route} href="/#home" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>HOME</motion.a>
                    <motion.a onClick={handleClick} className={styles.route} href="/#clients" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>CLIENTS</motion.a>
                    <motion.a onClick={handleClick} className={styles.route} href="/#aboutus" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>ABOUT US</motion.a>
                    <motion.a onClick={handleClick} className={styles.route} href="/#services" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>SERVICE</motion.a>
                    <motion.a onClick={handleClick} className={styles.route} href="/#projects" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>PROJECTS</motion.a>
                    <motion.a onClick={handleClick} className={styles.route} href="/#contacts" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>CONTACTS</motion.a>
                </div>
                <nav className={styles.socials}>
                    <motion.a href="#" className={styles.socialLink} initial={{ opacity: 0}} animate={{ opacity: 0.5}} transition={{ delay: 0.8 }}> <img src="/icons/facebook.png" alt="Facebook" /></motion.a>
                    <motion.a href="#" className={styles.socialLink} initial={{ opacity: 0}} animate={{ opacity: 0.5}} transition={{ delay: 0.9 }}> <img src="/icons/vimeo.png" alt="Vimeo" /></motion.a>
                    <motion.a href="#" className={styles.socialLink} initial={{ opacity: 0}} animate={{ opacity: 0.5}} transition={{ delay: 1 }}> <img src="/icons/youtube.png" alt="YouTube" /></motion.a>
                    <motion.a href="#" className={styles.socialLink} initial={{ opacity: 0}} animate={{ opacity: 0.5}} transition={{ delay: 1.1 }}> <img src="/icons/linked.png" alt="LinkedIn" /></motion.a>
                    <motion.a href="#" className={styles.socialLink} initial={{ opacity: 0}} animate={{ opacity: 0.5}} transition={{ delay: 1.2 }}> <img src="/icons/x.png" alt="X" /></motion.a>
                </nav>
            </div>
        </div>
        
    </motion.section>
}