import styles from "./News.module.css"

export default function News(){
    return <section className={styles.news_section}>
        <a className={styles.bttn} href="/news">
            Check out our news
        </a>
    </section>
}