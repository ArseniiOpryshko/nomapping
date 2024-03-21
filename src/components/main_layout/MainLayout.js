
import { useTranslations } from "next-intl";
import Header from "./header/Header";

export default function MainLayout({children}){
    const trans = useTranslations('MenuPage');
    return <>
        <Header trans={{headerText: trans('headerText'), translates: [
            trans('home'), trans('clients'), 
            trans('aboutUs'), trans('service'),
            trans('projects'),trans('contacts')
        ]}}>
            {children}
        </Header>
                
    </>   
}