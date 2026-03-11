import Navbar from "../components/NavBar"
import Hero from "../components/Hero"
import About from "../components/About"
import Education from "../components/Education"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Experience from "../components/Experience"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact /> 
    </>
  );
}
