'use client'
import VideoDetail from "@/components/video_detail/VideoDetail";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Project({params}) {
    const { project_id } = params
    const [project, setProject] = useState();

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const video = await axios.get(`https://api.vimeo.com/videos/${project_id}`, {
                    headers: {
                        Authorization: 'Bearer 356b932c2a2e22b86926fa64a675540d'
                    }
                });
                console.log("cs",video.data )

                setProject(video.data);
            }
            catch (error) {
                if (error.response && error.response.status === 404) {
                    console.log('Not found');
                }
            }
        }
        fetchData();
    }, []);
    return <VideoDetail project={project}/>
}