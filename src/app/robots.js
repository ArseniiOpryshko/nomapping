import getDomain from "@/configs/baseDomain";

export default function robots(){
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/"
            }
        ],
        sitemap: `${getDomain()}/sitemap.xml`
    }
}