'use client'
import { motion } from "framer-motion"
import styles from "../Projects.module.css"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation";


export default function Project({project, index}){
    const router = useRouter();
    const pathName = usePathname();

    const redirect = () => {
        const digitsArray = project?.uri.match(/\d+/g);
        const digits = digitsArray ? digitsArray.join("") : "";
        router.push(pathName+'/projects/'+digits);
    };

    return <motion.div onClick={redirect} className={styles.project}
        initial={{
            opacity: 0,
            x: index % 2 === 0 ? 50 : -50
        }}
        whileInView={{
            opacity: 1,
            x: 0, 
            transition: {
            duration: 1 
            }
        }}
        viewport={{ once: true }}>
        <Image width={600} height={337} className={styles.img} src={project?.pictures?.base_link} alt="project"/>
        <p className={styles.name}>{project?.name}</p>
    </motion.div>
            
}