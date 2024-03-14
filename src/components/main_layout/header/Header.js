import styles from "./Header.module.css"

export default function Header(){
    return <header className={styles.header}>
        <div className={styles.title}>
            <img src="logo.png"/>
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
                <img src="icons/facebook.png"/>
            </a>
            <a href="#">
                <img src="icons/vimeo.png"/>
            </a>
            <a href="#">
                <img src="icons/youtube.png"/>
            </a>
            <a href="#">
                <img src="icons/linked.png"/>
            </a>
            <a href="#">
                <img src="icons/x.png"/>
            </a>
        </nav>
        <div className={styles.navbar}>
            <img src="navbar.png"/>
        </div>
    </header>
}