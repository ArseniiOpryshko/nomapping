import styles from "./Projects.module.css"


export default function Projects(){
    return <section className={styles.projects_section}>
        <h4 className={styles.title}>What have we done</h4>
        <div className={styles.pallete}>
            <div className={styles.project}>
                <img className={styles.img} src="proj.png" alt="project"/>
                <p className={styles.name}>FORD’S WINTER FESTIVAL</p>
            </div>
            <div className={styles.project}>
                <img className={styles.img} src="proj.png" alt="project"/>
                <p className={styles.name}>FORD’S WINTER FESTIVAL</p>
            </div>
            <div className={styles.project}>
                <img className={styles.img} src="proj.png" alt="project"/>
                <p className={styles.name}>FORD’S WINTER FESTIVAL</p>
            </div>
            <div className={styles.project}>
                <img className={styles.img} src="proj.png" alt="project"/>
                <p className={styles.name}>FORD’S WINTER FESTIVAL</p>
            </div>
        </div>
    </section>
}