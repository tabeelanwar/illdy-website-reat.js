import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import News from "./components/News";
import Tasks from "./components/Tasks";
import Team from "./components/Team";
import Contact from "./components/Contact";



export default function Home() {
  return (
    <>
    <Hero/>
    <About/>
    <Projects/>
    <Testimonials/>
    <Services/>
    <News/>
    <Tasks/>
    <Team/>
    <Contact/>
    </>
  );

}
