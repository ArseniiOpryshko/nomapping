import NewsDetail from "@/components/news_detail/NewsDetail"
import { parseXmlToJson } from "@/configs/parseXmlToJson";
import axios from "axios";
import { unstable_setRequestLocale } from "next-intl/server";


export async function generateMetadata({params}){
    unstable_setRequestLocale(params.locale);
    const decodedName = decodeURI(params.news_name);
    
    return {
        title: decodedName,
        description: "Check details about "+decodedName+" by Nomapping",  
    }
}

export async function generateStaticParams() {
    const resp2 = await axios.get('https://medium.com/feed/@arsephantom')
    const jsonData = await parseXmlToJson(resp2.data);
    
    const news = jsonData.rss.channel[0].item.map(project => {
        return {
            news_name: encodeURIComponent(project?.title[0])         
        };
    });

    return news;
}

export default async function NewsDetailPage({params}){
    unstable_setRequestLocale(params.locale);
    return <NewsDetail name={params.news_name}/>
}