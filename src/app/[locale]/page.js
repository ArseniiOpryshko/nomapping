import AboutUs from "@/components/main_page/aboutus/AboutUs";
import Clients from "@/components/main_page/clients/Clients";
import Contacts from "@/components/main_page/contacts/Contacts";
import Glitch from "@/components/main_page/glitch/Glitch";
import MainSection from "@/components/main_page/main/Main";
import News from "@/components/main_page/news/News";
import Projects from "@/components/main_page/projects/Projects";
import Services from "@/components/main_page/services/Services";
import { useTranslations } from "next-intl";
import {unstable_setRequestLocale} from 'next-intl/server';

export default function Home({params: {locale}}) {
  unstable_setRequestLocale(locale);

  const trans = useTranslations('IndexPage');
  return <main>
    <MainSection trans={trans}/>
    <Clients/>
    <AboutUs trans={[
      trans('header1'), trans('header2'), 
      trans('textPart1'), trans('textUnder1'),
      trans('textPart2'),trans('textPart3'),
      trans('textUnder2'), trans('button')
    ]}/>
    <Services trans={trans}/>
    <Glitch/>
    <Projects trans={[
      trans('headerProjects'), trans('projectBttn1'), 
      trans('projectBttn2')
    ]}/>
    <News trans={trans('newsBttn')}/>
    <Contacts trans={[
      trans('headerContact'), trans('manager'), 
      trans('location'), trans('adress'),
      trans('office'),trans('socials')
    ]}/>
  </main>
}
