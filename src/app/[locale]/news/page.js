import News from "@/components/news/News"
import { useTranslations } from "next-intl";


export default function NewsPage() {
    const trans = useTranslations('NewsPage');
    return <News trans={trans('headerText')}/>
}