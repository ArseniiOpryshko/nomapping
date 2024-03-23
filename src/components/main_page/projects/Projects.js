'use client'
import { useEffect, useState } from "react";
import styles from "./Projects.module.css"
import Project from "./project/Project"
import axios from "axios";
import Image from "next/image";
import { usePathname } from "next/navigation";
// import { useRouter } from 'next/router';

export default function Projects({trans}){
    const [projects, setProjects] = useState([]);
    const router = usePathname();

    useEffect(()=>{
        const fetchData = async () =>{
          const resp = await axios.get('https://api.vimeo.com/users/nomapping/videos?per_page=4', {
              headers: {
                  Authorization: 'Bearer 356b932c2a2e22b86926fa64a675540d'
              }
          });
          setProjects(resp.data.data);         
        } 
        fetchData();
    }, []);

    return <section className={styles.projects_section} id="projects">
        <Image width={1384} height={1121} className={styles.light2} alt="light_project" src="/lights/projectlight.png"/>

        <h4 className={styles.title}>{trans[0]}</h4>
        <div className={styles.pallete}>
            {projects[0] ? projects.map((item, i) => (
                <Project key={i} project={item} index={i} />
            )):
                <div className={styles.loader}>
                    <div className={styles.inner_one} ></div>
                    <div className={styles.inner_two} ></div>
                    <div className={styles.inner_three} ></div>
                </div>
            }
        </div>
        <div className={styles.btnns}>
            <a className={styles.btn} href={`${router}/projects`}>{trans[1]}</a>
            <a className={styles.btn} href="#contacts">{trans[2]}</a>
        </div>
    </section>
}