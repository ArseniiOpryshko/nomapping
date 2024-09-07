
import Header from "./header/Header";
import { getTranslations } from "next-intl/server";

export default async function MainLayout({children, locale}){
    const trans = await getTranslations({locale, namespace: 'MenuPage'});
    return <>
        <Header trans={{headerText: trans('headerText'), translates: [
            trans('home'), trans('clients'), 
            trans('aboutUs'), trans('service'),
            trans('projects'),trans('news'),
            trans('contacts')
        ]}}>
            {children}
        </Header>
                
    </>   
}