import NewsDetail from "@/components/news_detail/NewsDetail"


export async function generateMetadata({params}){
    const decodedName = decodeURI(params.news_name);
    
    return {
        title: decodedName,
        description: "Check details about "+decodedName+" by Nomapping",  
    }
}


export default async function NewsDetailPage({params}){
    return <NewsDetail name={params.news_name}/>
}