'use client'
import { usePathname } from "next/navigation";
import styles from "./News.module.css"

export default function News({trans}){
    const router = usePathname();

    return <section className={styles.news_section}>
        <a className={styles.bttn} href={`${router}/news`}>
            {trans}
        </a>
    </section>
}