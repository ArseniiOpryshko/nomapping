'use client'
import { useEffect, useState } from "react";
import styles from "./Projects.module.css"
import Project from "./project/Project"
import axios from "axios";
import Image from "next/image";

export default function Projects(){
    const [projects, setProjects] = useState([]);

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

        <h4 className={styles.title}>What have we done</h4>
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
            <a className={styles.btn} href="/projects">All projects</a>
            <a className={styles.btn} href="#contacts">Order new project</a>
        </div>
    </section>
}