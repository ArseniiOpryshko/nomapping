import { motion, useAnimation } from "framer-motion";
import styles from "./Menu.module.css"
import { useEffect, useTransition } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Menu({trans, isActive, handleClick}){

    const controls = useAnimation();
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    useEffect(() => {
        if (isActive) {
          controls.start({ opacity: 1, y: 0, transition: { staggerChildren: 0.1 } });
        }
      }, [isActive, controls]);

    const languageHandler = (e) =>{
        const locale = e.target.value;
        startTransition(()=>{
            router.replace(`/${locale}`)
        })
    }

    return <motion.section className={styles.menu_section}
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50}}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.content}>
            <Image width={843} height={624} className={styles.light1} alt="light1" src="/lights/menu1.png"/>
            <Image width={928} height={324} className={styles.light2} alt="light2" src="/lights/menu2.png"/>
            <Image width={594} height={507} className={styles.light3} alt="light3" src="/lights/menu3.png"/>


            <div className={styles.flex_column}>
                <div className={styles.languages}>
                    <button onClick={languageHandler} value={'ua'} className={styles.language}>УКР</button>
                    <button onClick={languageHandler} value={'en'} className={styles.language}>ENG</button>
                </div>
                <div className={styles.routes}>
                    <motion.a onClick={handleClick} className={styles.route} href="/#home" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>{trans[0]}</motion.a>
                    <motion.a onClick={handleClick} className={styles.route} href="/#clients" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>{trans[1]}</motion.a>
                    <motion.a onClick={handleClick} className={styles.route} href="/#aboutus" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>{trans[2]}</motion.a>
                    <motion.a onClick={handleClick} className={styles.route} href="/#services" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>{trans[3]}</motion.a>
                    <motion.a onClick={handleClick} className={styles.route} href="/#projects" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>{trans[4]}</motion.a>
                    <motion.a onClick={handleClick} className={styles.route} href="/#contacts" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>{trans[5]}</motion.a>
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