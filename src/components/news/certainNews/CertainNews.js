
import { extractImageSrcFromHTML } from "@/configs/extractImageSrcFromHTML"
import styles from "../News.module.css"

export default function CertainNews({item}){
    return <a className={styles.bottom_block} href={'/news/'+item?.title[0]}> 
        <img className={styles.img} src={extractImageSrcFromHTML(item['content:encoded'])}/>
        <div className={styles.overlay}>
            <h3 className={styles.name}>
                {item?.title[0]} 
            </h3>
            <h4 className={styles.date}>
                {item?.pubDate[0].split(' ').slice(0, 4).join(' ')}
            </h4>
        </div>
    </a>
}