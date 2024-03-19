'use client'
import { useEffect, useState } from "react";
import styles from "./Projects.module.css"
import Project from "./project/Project"
import axios from "axios";
import Image from "next/image";
const { parseString } = require('xml2js');


export default function Projects(){

    const [projects, setProjects] = useState([]);

    const [frame, setFrame] = useState({});

    function parseXmlToJson(xmlData) {
        return new Promise((resolve, reject) => {
          parseString(xmlData, (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          });
        });
      }

    useEffect(()=>{
        const fetchData = async () =>{
          const resp = await axios.get('https://api.vimeo.com/users/nomapping/videos?per_page=4', {
              headers: {
                  Authorization: 'Bearer 356b932c2a2e22b86926fa64a675540d'
              }
          });
        //   console.log(resp)
          setProjects(resp.data.data);
          
        } 
        fetchData();

        const fetchData2 = async () =>{
            // const response = await axios.get(`https://dev.to/api/articles?username=phaha`);

            // const response = await axios.get(`https://v1.nocodeapi.com/phantommmuuu/medium/OmJjogykCTJlESZB`);

            
            const resp = await axios.get('https://corsproxy.io/?https://medium.com/feed/@arsephantom')

            const jsonData = await parseXmlToJson(resp.data);
            setFrame(jsonData.rss.channel[0].item[0]['content:encoded']);
        }

        fetchData2()

    }, []);

    return <section className={styles.projects_section} id="projects">
        <Image width={1384} height={1121} className={styles.light2} alt="light_project" src="/lights/projectlight.png"/>

        <div className={styles.video_block} 
                dangerouslySetInnerHTML={{ __html: frame }}>
        </div>

        <h4 className={styles.title}>What have we done</h4>
        <div className={styles.pallete}>
            {projects.map((item, i) => (
                <Project key={i} project={item} index={i} />
            ))}
        </div>
        <div className={styles.btnns}>
            <a className={styles.btn} href="/projects">All projects</a>
            <a className={styles.btn} href="#contacts">Order new project</a>
        </div>
    </section>
}