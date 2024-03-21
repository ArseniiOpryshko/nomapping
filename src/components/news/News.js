'use client'
import { useEffect, useState } from "react"
import styles from "./News.module.css"
import axios from "axios"
import CertainNews from "./certainNews/CertainNews";
import { parseXmlToJson } from "@/configs/parseXmlToJson";
import { extractImageSrcFromHTML } from "@/configs/extractImageSrcFromHTML";
import Image from "next/image";

export default function News(){
    const [items, setItems] = useState([]);

    useEffect(()=>{
        const fetchData2 = async () =>{
            // const response = await axios.get(`https://dev.to/api/articles?username=phaha`);
            // const response = await axios.get(`https://v1.nocodeapi.com/phantommmuuu/medium/OmJjogykCTJlESZB`);
            
            const resp = await axios.get('https://corsproxy.io/?https://medium.com/feed/@arsephantom')
    
            const jsonData = await parseXmlToJson(resp.data);
            setItems(jsonData.rss.channel[0].item);
        }
    
        fetchData2()
    }, [])

    return <section className={styles.news_section}>
        <Image width={734} height={875} className={styles.light1} src="/lights/newslight1.png" alt="newslight1"/>
        <Image width={528} height={560} className={styles.light2} src="/lights/newslight2.png" alt="newslight2"/>
        <h2 className={styles.title}>
            Our Latest news
        </h2>
        {!items[0] ?  
            <div className={styles.loader}>
                <div className={styles.inner_one} ></div>
                <div className={styles.inner_two} ></div>
                <div className={styles.inner_three} ></div>
            </div>
        : 
        <div className={styles.container}>
                <div className={styles.top}>
                    <a className={styles.big_block} href={'/news/'+items[0]?.title[0]}>
                        <img className={styles.img} src={items[0] ? extractImageSrcFromHTML(items[0]['content:encoded']): ''}/>
                        <div className={styles.overlay}>
                            <h3 className={styles.name}>
                                {items[0]?.title[0]}
                            </h3>
                            <h4 className={styles.date}>
                                {items[0]?.pubDate[0].split(' ').slice(0, 4).join(' ')}
                            </h4>
                        </div>
                    </a>
                    <div className={styles.right_block}>
                        <a className={styles.small_block} href={'/news/'+items[1]?.title[0]}>
                            <img className={styles.img} src={items[1] ?extractImageSrcFromHTML(items[1]['content:encoded']): ''}/>
                            <div className={styles.overlay}>
                                <h3 className={styles.name}>
                                    {items[1]?.title[0]}
                                </h3>
                                <h4 className={styles.date}>
                                    {items[1]?.pubDate[0].split(' ').slice(0, 4).join(' ')}
                                </h4>
                            </div>
                        </a>
                        <a className={styles.small_block} href={'/news/'+items[2]?.title[0]}>
                            <img className={styles.img} src={items[2] ?extractImageSrcFromHTML(items[2]['content:encoded']): ''}/>
                            <div className={styles.overlay}>
                                <h3 className={styles.name}>
                                    {items[2]?.title[0]} 
                                </h3>
                                <h4 className={styles.date}>
                                    {items[2]?.pubDate[0].split(' ').slice(0, 4).join(' ')}
                                </h4>
                            </div>
                        </a>
                    </div>
                </div>
                <div className={styles.grid4}>
                    {items.slice(3).map((item, i) => (
                        <CertainNews key={i} item={item} />
                    ))}
                </div>
            </div>     
        }   
    </section>
    
}