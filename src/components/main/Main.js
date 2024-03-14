
import styles from "./Main.module.css"

export default function Main(){
    return <section className={styles.main_section}>
        <div className={styles.video_block}>
            <video className={styles.video} autoPlay loop muted playsInline preload="auto">
                <source src="back_vid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
        <div className={styles.content}>
            <div className={styles.centralflex}>
                <h1>
                    STUDIO OF MOTION DESIGN AND INTERACTIVE MEDIA
                </h1>
                <span>NoMapping Studio</span>
            </div>
        </div>
    </section>
}