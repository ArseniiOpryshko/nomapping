export default function robots(){
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/"
            }
        ],
        sitemap: "https://nomapping.com/sitemap.xml"
    }
}