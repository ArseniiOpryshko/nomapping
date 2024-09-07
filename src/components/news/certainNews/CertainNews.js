
import { extractImageSrcFromHTML } from "@/configs/extractImageSrcFromHTML"
import styles from "../News.module.css"
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function CertainNews({item}){
    const router = usePathname();

    return <Link className={styles.bottom_block} href={`${router}/`+item?.title[0]}> 
        <img className={styles.img} src={extractImageSrcFromHTML(item['content:encoded'])}/>
        <div className={styles.overlay}>
            <h3 className={styles.name}>
                {item?.title[0]} 
            </h3>
            <h4 className={styles.date}>
                {item?.pubDate[0].split(' ').slice(0, 4).join(' ')}
            </h4>
        </div>
    </Link>
}