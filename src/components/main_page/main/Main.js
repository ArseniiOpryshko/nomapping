
import styles from "./Main.module.css"
import TextAnimation1 from "@/configs/text_animation1";

export default function Main(){
    return <section className={styles.main_section} id="home">
        <div className={styles.video_block}>
            <video className={styles.video} autoPlay loop muted playsInline preload="auto">
                <source src="back_vid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
        <div className={styles.content}>
            <div className={styles.centralflex}>
                <h1>
                    <TextAnimation1 text="STUDIO OF MOTION DESIGN AND INTERACTIVE MEDIA" delay={400}/>
                </h1>
                <span className={styles.initspan}>
                    <TextAnimation1 text="NoMapping Studio" delay={800}/>
                </span>
            </div>
        </div>
    </section>
}