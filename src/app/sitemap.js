import { parseXmlToJson } from "@/configs/parseXmlToJson";
import axios from "axios";

const domen = 'https://phah.pp.ua';

export default async function sitemap(){
    const resp1 = await axios.get('https://api.vimeo.com/users/nomapping/videos', {
        headers: {
          Authorization: 'Bearer 356b932c2a2e22b86926fa64a675540d'
        }
    });

    const projects = resp1.data.data.map(project => {
        const uri = project.uri;  
        const digitsArray = uri.match(/\d+/g);        
        const digits = digitsArray ? digitsArray.join("") : "";

        return {
            url: `${domen}/projects/${digits}`,
            alternates: {
                languages: {
                  en: `${domen}/en/projects/${digits}`,
                  ua: `${domen}/ua/projects/${digits}`,
                },
            }
        };
    });

    const resp2 = await axios.get('https://medium.com/feed/@arsephantom')
    const jsonData = await parseXmlToJson(resp2.data);
    
    const news = jsonData.rss.channel[0].item.map(project => {
        
        return {
            url: `${domen}/projects/${encodeURIComponent(project?.title[0])}`,
            alternates: {
                languages: {
                  en: `${domen}/en/projects/${encodeURIComponent(project?.title[0])}`,
                  ua: `${domen}/ua/projects/${encodeURIComponent(project?.title[0])}`,
                },
            }
        };
    });
    
    return [
        {
            url: `${domen}`,
            alternates: {
              languages: {
                en: `${domen}/en`,
                ua: `${domen}/ua`,
              },
            }
        },
        {
            url: `${domen}/projects`,
            alternates: {
              languages: {
                en: `${domen}/en/projects`,
                ua: `${domen}/ua/projects`,
              },
            }
        },
        {
            url: `${domen}/news`,
            alternates: {
              languages: {
                en: `${domen}/en/news`,
                ua: `${domen}/ua/news`,
              },
            }
        },
        ...projects,
        ...news
        
    ]
}