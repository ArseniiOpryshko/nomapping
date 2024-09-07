
import styles from "./Main.module.css"
import TextAnimation1 from "@/configs/text_animation1";

export default function Main({trans}){
    return <section className={styles.main_section} id="home">
        <div className={styles.video_block}>
            <video className={styles.video} autoPlay loop muted playsInline preload="auto">
                <source src="back_vid.mp4" type="video/mp4" />
                {trans('dontSupport')}
            </video>
        </div>
        <div className={styles.content}>
            <div className={styles.centralflex}>
                <h1 className={styles.hidden}>{trans('title')}</h1>
                <h2>
                    <TextAnimation1 text={trans('title')} delay={400}/>
                </h2>
            </div>
        </div>
    </section>
}