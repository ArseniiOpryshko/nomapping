import Videos from "@/components/videos/Videos"
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

export async function generateMetadata({params: {locale}}) {
    unstable_setRequestLocale(locale);
    const t = await getTranslations({locale, namespace: 'Metadata'});

    return {
        title: t('projects_h'),
        description: t('projects_desc'),
    };
}

export default async function Projects({params: {locale}}) {
    unstable_setRequestLocale(locale);
    const trans = await getTranslations('ProjectsPage');

    return <Videos trans={trans('headerText')}/>
}