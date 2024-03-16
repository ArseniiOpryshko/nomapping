import AboutUs from "@/components/aboutus/AboutUs";
import Clients from "@/components/clients/Clients";
import Contacts from "@/components/contacts/Contacts";
import Glitch from "@/components/glitch/Glitch";
import MainSection from "@/components/main/Main";
import Projects from "@/components/projects/Projects";
import Services from "@/components/services/Services";

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
