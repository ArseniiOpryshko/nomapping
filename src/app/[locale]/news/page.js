import News from "@/components/news/News"
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";


export async function generateMetadata({params: {locale}}) {
    unstable_setRequestLocale(locale);
    const t = await getTranslations({locale, namespace: 'Metadata'});

    return {
        title: t('news_h'),
        description: t('news_desc'),
    };
}


export default async function NewsPage({params: {locale}}) {
    unstable_setRequestLocale(locale);
    const trans = await getTranslations('NewsPage');
    return <News trans={trans('headerText')}/>
}