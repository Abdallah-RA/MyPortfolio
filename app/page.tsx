import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjecs";
import { FloatingNav } from "@/components/ui/FloatingNavbar";


export default function Home() {
  return (
   <main className="relative bg-black-100 flex justify-center 
     items-center flex-col overflow-hidden
     mx-auto sm:px-10 px-5
     
     ">
      <section id = "Home">
    <div className="max-w-7xl w-full">
    <FloatingNav 
    navItems={[
      {name: "Home", link: "#Home"},
      {name: "About", link: "#about"},
      {name: "Projects", link: "#RecentProjects"},
      {name: "Contact", link: "#contact"},
    ]}
    />
    <Hero/>
    <Grid/>
    <RecentProjects/>
   <Approach/>
   <Footer/>
    </div>
    </section>


   </main>
  );
}
