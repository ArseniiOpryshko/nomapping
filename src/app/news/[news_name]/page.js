import NewsDetail from "@/components/news_detail/NewsDetail"
import { parseXmlToJson } from "@/configs/parseXmlToJson";
import axios from "axios";

let cachedData;

const getData = async (name) => {
    if (!cachedData) {
        const resp = await axios.get('https://medium.com/feed/@arsephantom');
        const jsonData = await parseXmlToJson(resp.data);
        const decodedName = decodeURI(name);
        const item = jsonData.rss.channel[0].item.find(obj => obj.title[0] === decodedName)

        console.log(decodedName, name);
        cachedData = item; 
        return item;
    }
    return null;
};

// export async function generateMetadata({params}){
//     const item = await getData(params.news_name);
    
//     return {
//         title: item?.title[0],
//         description: "Check latest news about us here",  
//     }
// }


export default async function NewsDetailPage({params}){
    const item = await getData(params.news_name);
    return <NewsDetail item={item}/>
}