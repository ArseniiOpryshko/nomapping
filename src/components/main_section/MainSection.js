import styles from "./MainSection.module.css"

export default function MainSection(){
    return <section className={styles.main}>
        <video width="100%" height="auto" autoPlay loop muted playsInline preload="auto">
            <source src="back_vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className={styles.centralflex}>
            <h1>
                STUDIO OF MOTION DESIGN AND INTERACTIVE MEDIA
            </h1>
            <span>NoMapping Studio</span>
        </div>
    </section>
}