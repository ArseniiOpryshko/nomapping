'use client'

import { useState } from "react"
import styles from "./Header.module.css"
import Menu from "@/components/menu/Menu";
import { useRouter } from "next/navigation";

export default function Header({children}){
    const [isActive, setIsActive] = useState(false);
    const router = useRouter();

    const handleClick = () =>{
        setIsActive(prev=>!prev)
    }

    const redirectToHome = () => {
        if (isActive) {
            setIsActive(prev=>!prev)
        }
        router.push('/');
    };
    return <>
        <header className={styles.header}>
            <div onClick={redirectToHome} className={styles.title}>
                <img src="/logo.png"/>
                <div className={styles.innerblock}>
                    <span className={styles.top}>
                        NOMAPPING
                    </span>
                    <span className={styles.bottom}>
                        Creative Design Studio
                    </span>
                </div>
            </div>
            <nav className={styles.socials}> 
                <a href="#">
                    <img src="/icons/facebook.png"/>
                </a>
                <a href="#">
                    <img src="/icons/vimeo.png"/>
                </a>
                <a href="#">
                    <img src="/icons/youtube.png"/>
                </a>
                <a href="#">
                    <img src="/icons/linked.png"/>
                </a>
                <a href="#">
                    <img src="/icons/x.png"/>
                </a>
            </nav>
            <div onClick={handleClick} className={!isActive ? styles.navbar : styles.navbar_active}></div>
        </header>
        
        {isActive ? <Menu isActive={isActive} handleClick={handleClick}/> : null} 
        {children}
    </>
}