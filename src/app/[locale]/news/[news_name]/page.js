import NewsDetail from "@/components/news_detail/NewsDetail"
import { parseXmlToJson } from "@/configs/parseXmlToJson";
import axios from "axios";


export async function generateMetadata({params}){
    const decodedName = decodeURI(params.news_name);
    
    return {
        title: decodedName,
        description: "Check details about "+decodedName+" by Nomapping", 
        alternates:{
            canonical: `/news/${decodedName}`,
            languages: {
                "en": `/en/news/${decodedName}`,
                "uk-UA": `/ua/news/${decodedName}`
            }
        } 
    }
}

export default async function NewsDetailPage({params}){
    return <NewsDetail name={params.news_name}/>
}