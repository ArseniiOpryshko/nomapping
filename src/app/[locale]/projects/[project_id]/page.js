import VideoDetail from "@/components/video_detail/VideoDetail";
import axios from "axios";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";


const cache = {};

const getData = async (project_id) => {
    if (cache[project_id]) {
        return cache[project_id];
    } else {
        
    try {
        const video = await axios.get(`https://api.vimeo.com/videos/${project_id}`, {
            headers: {
                Authorization: 'Bearer 356b932c2a2e22b86926fa64a675540d'
            }
        });
        cache[project_id] = video.data;
        return video.data;
    } catch (error) {
        notFound();
    }
    }
};


export async function generateMetadata({params: {locale}, params: {project_id}}){
    unstable_setRequestLocale(locale);
    const video = await getData(project_id);
    
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

export async function generateStaticParams() {
    const resp = await axios.get('https://api.vimeo.com/users/nomapping/videos', {
        headers: {
          Authorization: 'Bearer 356b932c2a2e22b86926fa64a675540d'
        }
    });

    const ar = resp.data.data.map(project => {
        const uri = project.uri;  
        const digitsArray = uri.match(/\d+/g);        
        const digits = digitsArray ? digitsArray.join("") : "";
        return {
            project_id: digits
        }
    })
    return ar;
}

export default async function Project({params: {locale}, params: {project_id}}) {
    unstable_setRequestLocale(locale);
    const trans = await getTranslations('ProjectPage');
    const video = await getData(project_id);

    return <VideoDetail trans={[trans('about'), trans('order')]} project={video}/>
}