import { useRouter } from "next/navigation";
import styles from "../Videos.module.css"
import Image from "next/image";


export default function Video({project}){
    const router = useRouter();

    const redirect = () => {
        const digitsArray = project?.uri.match(/\d+/g);
        const digits = digitsArray ? digitsArray.join("") : "";
        console.log(digits)
        router.push('/projects/'+digits);
    };

    return <div className={styles.project} onClick={redirect}>
        <Image width={480} height={270} className={styles.image} src={project?.pictures?.base_link} alt="project"/>
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