import { parseXmlToJson } from "@/configs/parseXmlToJson";
import axios from "axios";

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
            url: `https://nomapping.com/projects/${digits}`,
            alternates: {
                languages: {
                  en: `https://nomapping.com/en/projects/${digits}`,
                  ua: `https://nomapping.com/ua/projects/${digits}`,
                },
            }
        };
    });

    const resp2 = await axios.get('https://medium.com/feed/@arsephantom')
    const jsonData = await parseXmlToJson(resp2.data);
    
    const news = jsonData.rss.channel[0].item.map(project => {
        
        return {
            url: `https://nomapping.com/projects/${encodeURIComponent(project?.title[0])}`,
            alternates: {
                languages: {
                  en: `https://nomapping.com/en/projects/${encodeURIComponent(project?.title[0])}`,
                  ua: `https://nomapping.com/ua/projects/${encodeURIComponent(project?.title[0])}`,
                },
            }
        };
    });
    
    return [
        {
            url: 'https://nomapping.com',
            alternates: {
              languages: {
                en: 'https://nomapping.com/en',
                ua: 'https://nomapping.com/ua',
              },
            }
        },
        {
            url: 'https://nomapping.com/projects',
            alternates: {
              languages: {
                en: 'https://nomapping.com/en/projects',
                ua: 'https://nomapping.com/ua/projects',
              },
            }
        },
        {
            url: 'https://nomapping.com/news',
            alternates: {
              languages: {
                en: 'https://nomapping.com/en/news',
                ua: 'https://nomapping.com/ua/news',
              },
            }
        },
        ...projects,
        ...news
        
    ]
}