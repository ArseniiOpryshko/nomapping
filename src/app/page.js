import AboutUs from "@/components/main_page/aboutus/AboutUs";
import Clients from "@/components/main_page/clients/Clients";
import Contacts from "@/components/main_page/contacts/Contacts";
import Glitch from "@/components/main_page/glitch/Glitch";
import MainSection from "@/components/main_page/main/Main";
import Projects from "@/components/main_page/projects/Projects";
import Services from "@/components/main_page/services/Services";

export default function Home() {
  return <main>
    <MainSection/>
    <Clients/>
    <AboutUs/>
    <Services/>
    <Glitch/>
    <Projects/>
    <Contacts/>
  </main>
}
