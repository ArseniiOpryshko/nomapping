'use client'
import { useEffect, useState } from "react"
import styles from "./NewsDetail.module.css"
import axios from "axios";
import { parseXmlToJson } from "@/configs/parseXmlToJson";
import Image from "next/image";

export default function NewsDetail({name}){
    const [item, setItem] = useState(null);

    useEffect(()=>{
        const getData = async () => { 
            const resp = await axios.get('https://corsproxy.io/?https://medium.com/feed/@arsephantom');
            const jsonData = await parseXmlToJson(resp.data);
            const decodedName = decodeURI(name);
            const item = jsonData.rss.channel[0].item.find(obj => obj.title[0] === decodedName)

            setItem(item);     
        };
        getData();      
    }, []);

    return <section className={styles.newsdetail_section}>
        <Image width={720} height={1344} className={styles.light1} src="/lights/certainnewslight1.png" alt="newslight2"/>
        <Image width={528} height={560} className={styles.light2} src="/lights/certainnewslight2.png" alt="newslight2"/>

        {item ? <div className={styles.container}>
                <h2 className={styles.name}>
                    {item?.title[0]}
                </h2>
                <div className={styles.content} 
                    dangerouslySetInnerHTML={{ __html: item ? item['content:encoded']:'' }}>
                </div>
            </div> 
            : item !== undefined ? 
            <div className={styles.loader}>
                <div className={styles.inner_one}></div>
                <div className={styles.inner_two}></div>
                <div className={styles.inner_three}></div>
            </div> : <h2 className={styles.notf}>Not found</h2>
        }
    </section>
}