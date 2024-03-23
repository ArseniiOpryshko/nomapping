import News from "@/components/news/News"
import { getTranslations } from "next-intl/server";


export async function generateMetadata({params: {locale}}) {
    const t = await getTranslations({locale, namespace: 'Metadata'});

    return {
        title: t('news_h'),
        description: t('news_desc'),
    };
}


export default async function NewsPage() {
    const trans = await getTranslations('NewsPage');
    return <News trans={trans('headerText')}/>
}