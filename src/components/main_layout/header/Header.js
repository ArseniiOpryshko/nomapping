'use client'

import { useState } from "react"
import styles from "./Header.module.css"
import Menu from "@/components/menu/Menu";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Header({children, trans}){
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
                        {trans.headerText}
                    </span>
                </div>
            </div>
            <nav className={styles.socials}> 
                <a href="https://www.facebook.com/NoMapping" target="_blank">
                    <Image width={20} height={20} src="/icons/facebook.png" alt="facebook"/>
                </a>
                <a href="https://vimeo.com/nomapping" target="_blank">
                    <Image width={20} height={20} src="/icons/vimeo.png" alt="vimeo"/>
                </a>
                <a href="https://www.youtube.com/c/Nomapping" target="_blank">
                    <Image width={20} height={20} src="/icons/youtube.png" alt="youtube"/>
                </a>
                <a href="https://www.linkedin.com/company/nomapping/about/" target="_blank">
                    <Image width={20} height={20} src="/icons/linked.png" alt="linked"/>
                </a>
                <a href="https://twitter.com/NoMapping" target="_blank">
                    <Image width={20} height={20} src="/icons/x.png" alt="x"/>
                </a>
            </nav>
            <div onClick={handleClick} className={!isActive ? styles.navbar : styles.navbar_active}></div>
        </header>
        
        {isActive ? <Menu trans={trans.translates} isActive={isActive} handleClick={handleClick}/> : null} 
        {children}
    </>
}