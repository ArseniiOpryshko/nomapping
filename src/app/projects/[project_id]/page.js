import VideoDetail from "@/components/video_detail/VideoDetail";
import axios from "axios";


const cache = {};

const getData = async (project_id) => {
    if (cache[project_id]) {
        return cache[project_id];
    } else {
        const video = await axios.get(`https://api.vimeo.com/videos/${project_id}`, {
            headers: {
                Authorization: 'Bearer 356b932c2a2e22b86926fa64a675540d'
            }
        });
        cache[project_id] = video.data;
        return video.data;
    }
};


export async function generateMetadata({params}){
    const video = await getData(params.project_id);
    
    return {
        title: video.name,
        description: video.description?.split(/https?:\/\/\S+/)[0],
        openGraph:{
            images:[
                {
                    url: video.pictures.base_link
                }
            ]
        }
    }
}

export default async function Project({params}) {
    const video = await getData(params.project_id);

    return <VideoDetail project={video}/>
}