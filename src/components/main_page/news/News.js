'use client'
import { usePathname } from "next/navigation";
import styles from "./News.module.css"
import Link from "next/link";

export default function News({trans}){
    const router = usePathname();

    return <section className={styles.news_section}>
        <Link className={styles.bttn} href={`${router}/news`}>
            {trans}
        </Link>
    </section>
}