import Videos from "@/components/videos/Videos"
import { getTranslations } from "next-intl/server";

export async function generateMetadata({params: {locale}}) {
    const t = await getTranslations({locale, namespace: 'Metadata'});

    return {
        title: t('projects_h'),
        description: t('projects_desc'),
        alternates:{
            canonical: `/projects`,
            languages: {
                "en": "/en/projects",
                "uk-UA": "/ua/projects"
            }
        }
    };
}

export default async function Projects() {
    const trans = await getTranslations('ProjectsPage');

    return <Videos trans={trans('headerText')}/>
}