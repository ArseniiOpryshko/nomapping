import Image from "next/image"
import styles from "./VideoDetail.module.css"
import { useTranslations } from "next-intl";

export default function VideoDetail({project}){
    const trans = useTranslations('ProjectPage');

    return <section className={styles.videodetail_section}>
        <Image width={734} height={1004} className={styles.light1} src="/lights/detail1.png" alt="projectlight1"/>
        <Image width={2050} height={1684} className={styles.light2} src="/lights/detail2.png" alt="projectlight2"/>
        <div className={styles.wrapper}>
            <h1 className={styles.title}>{project ? project?.name: "Loading..."}</h1>
            {!project ? 
            <div className={styles.loader}>
                <div className={styles.inner_one} ></div>
                <div className={styles.inner_two} ></div>
                <div className={styles.inner_three} ></div>
            </div>
            : null}

            <div className={styles.video_block} 
                dangerouslySetInnerHTML={{ __html: project?.embed.html }}>
            </div>
            <h2 className={styles.about}>{trans('about')}</h2>
            <p className={styles.description}>{project?.description?.split(/https?:\/\/\S+/)[0]}</p>
            <a className={styles.bttn} href="/#contacts">{trans('order')}</a>
        </div>
    </section>

}