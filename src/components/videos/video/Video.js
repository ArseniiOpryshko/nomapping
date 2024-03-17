import styles from "../Videos.module.css"


export default function Video({project}){
    return <div className={styles.project}>
        <img className={styles.image} src={project?.pictures?.base_link} alt="project"></img>
        <div className={styles.info}>
            <div className={styles.rows}>
                <h3 className={styles.name}>
                    {project?.name}
                </h3>
                <p className={styles.description}>
                    {project?.description?.split(/https?:\/\/\S+/)[0]}
                </p>
            </div>
            
            <div className={styles.tags}>
                {project?.tags?.slice(0, 6).map((item, i) => (
                    <span key={i} className={styles.tag}>{item?.name}</span>
                ))}
            </div>         
        </div>
    </div>
}