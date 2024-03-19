'use client'

import { useState } from "react"
import styles from "./Header.module.css"
import Menu from "@/components/menu/Menu";
import { useRouter } from "next/navigation";
import Image from "next/image";

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
                <Image width={50} height={50} src="/logo.png" alt="logo"/>
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
                    <Image width={20} height={20} src="/icons/facebook.png" alt="facebook"/>
                </a>
                <a href="#">
                    <Image width={20} height={20} src="/icons/vimeo.png" alt="vimeo"/>
                </a>
                <a href="#">
                    <Image width={20} height={20} src="/icons/youtube.png" alt="youtube"/>
                </a>
                <a href="#">
                    <Image width={20} height={20} src="/icons/linked.png" alt="linked"/>
                </a>
                <a href="#">
                    <Image width={20} height={20} src="/icons/x.png" alt="x"/>
                </a>
            </nav>
            <div onClick={handleClick} className={!isActive ? styles.navbar : styles.navbar_active}></div>
        </header>
        
        {isActive ? <Menu isActive={isActive} handleClick={handleClick}/> : null} 
        {children}
    </>
}