'use client'
import { useEffect } from "react"
import styles from "./NewsDetail.module.css"

export default function NewsDetail({item}){
    useEffect(()=>{
        console.log(item)
    }, [])

    return <section className={styles.newsdetail_section}>
        <div className={styles.container}>
            <h2 className={styles.name}>
                {item?.title[0]}
            </h2>
            <div className={styles.content} 
                dangerouslySetInnerHTML={{ __html: item ? item['content:encoded']:'' }}>
            </div>
        </div>
    </section>
}