'use client'

import { useEffect, useRef, useState } from "react";
import styles from "./Videos.module.css"
import Video from "./video/Video"
import axios from "axios";
import Image from "next/image";
  

export default function Videos(){
    const [projects, setProjects] = useState([]);
    const containerRef = useRef(null);
    const [paging, setPaging] = useState([]);


    const fetchData = async (url) => {
        const resp = await axios.get(url, {
          headers: {
            Authorization: 'Bearer 356b932c2a2e22b86926fa64a675540d'
          }
        });

        console.log(resp)
        if (projects.length > 0) {
            setProjects(prevProjects => [...prevProjects, ...resp.data.data]);
        } else {
            setProjects(resp.data.data);
        }
        setPaging(resp.data.paging);
    }
   
    useEffect(()=>{
        fetchData('https://api.vimeo.com/users/nomapping/videos?per_page=6');
    }, []);

    useEffect(()=>{
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                if(paging.next){
                    fetchData("https://api.vimeo.com" + paging.next);
                }
            }
        }, { threshold: 0.5 }); 
      
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }
    
        return () => observer.disconnect();  
    }, [paging]);
    
    return <section className={styles.projects_section}>
            <Image width={613} height={372} className={styles.light2} src="/lights/projecstlight4.png" alt="project"/>
            <Image width={1338} height={1352} className={styles.light} src="/lights/projecstlight.png" alt="project"/>
            <h2 className={styles.projh}>PROJECTS</h2>
            <div className={styles.projects}>
                {projects.map((item, i) => (
                    <Video key={i} project={item} index={i} />
                ))}
                {!projects[0] || paging.next ?  
                    <div ref={containerRef} className={styles.loader}>
                        <div className={styles.inner_one} ></div>
                        <div className={styles.inner_two} ></div>
                        <div className={styles.inner_three} ></div>
                    </div>
                : null}
            </div>
    </section>
}