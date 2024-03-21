import Videos from "@/components/videos/Videos"
import { useTranslations } from "next-intl";

export const metadata = {
    title: "Projects",
    description: "Explore the full list of our projects and works presented on our website. Discover our latest advances, experiments and work covering a wide range of topics and technologies",
}

export default function Projects() {
    const trans = useTranslations('ProjectsPage');

    return <Videos trans={trans('headerText')}/>
}