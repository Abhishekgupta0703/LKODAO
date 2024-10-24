import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";
import { FaHome } from "react-icons/fa";
import RecenProjects from "@/components/RecenProjects";
import { navItems } from "@/data";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid />
        <RecenProjects/>
        <Clients/>
        <Experience />
        <Footer/> 
      </div>
    </main>
  );
}
