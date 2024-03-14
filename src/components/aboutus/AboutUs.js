
import styles from "./AboutUs.module.css"


export default function AboutUs(){
    return <section className={styles.aboutus_section}>
        <div className={styles.titleblock}>
            <h4 className={styles.titleh4}>WHAT WE DO</h4>
            <h2 className={styles.titleh2}>WE CREATE VISUAL SHOW, INTERACTIVE INSTALLATIONS AND MOTION DESIGN.</h2>
        </div>
        <div className={styles.con}>
            <div></div>
            <div className={styles.textblock}>
                <p className={styles.text}>Our work is a synergy of creation, design, engineering and marketing. We are the experts in creation of <span className={styles.underlind}>unique visual images</span>. Interactive installations, light show, video presentations and state-of-the-art promotional products.<br/><br/>The team of the best specialists — producers, art-directors, engineers and marketers — will realize your project, using <span className={styles.underlind}>the freshest ideas and modern technologies</span>.</p>
                <a className={styles.bttn} href="#services">
                    Our services
                </a>
            </div>
        </div>
    </section>
}