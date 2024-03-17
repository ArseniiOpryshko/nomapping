import styles from "./VideoDetail.module.css"


export default function VideoDetail({project}){

    return <section className={styles.videodetail_section}>
        <img className={styles.light1} src="/lights/detail1.png" alt="project"></img>
        <img className={styles.light2} src="/lights/detail2.png" alt="project"></img>
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
            <h2 className={styles.about}>ABOUT PROJECT</h2>
            <p className={styles.description}>{project?.description?.split(/https?:\/\/\S+/)[0]}</p>
            <a className={styles.bttn} href="/#contacts">Order a project</a>
        </div>
    </section>

}