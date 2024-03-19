import VideoDetail from "@/components/video_detail/VideoDetail";
import axios from "axios";

export async function generateMetadata({params}){
    const video = await axios.get(`https://api.vimeo.com/videos/${params.project_id}`, {
        headers: {
            Authorization: 'Bearer 356b932c2a2e22b86926fa64a675540d'
        }
    });
    
    return {
        title: video.data.name,
        description: video.data.description?.split(/https?:\/\/\S+/)[0],
        openGraph:{
            images:[
                {
                    url: video.data.pictures.base_link
                }
            ]
        }
    }
}

export default async function Project({params}) {

    const video = await axios.get(`https://api.vimeo.com/videos/${params.project_id}`, {
        headers: {
            Authorization: 'Bearer 356b932c2a2e22b86926fa64a675540d'
        }
    });
    return <VideoDetail project={video.data}/>
}