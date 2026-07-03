import BackgroundCanvas from "@/components/BackgroundCanvas";
import Mascot from "@/components/Mascot";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Languages from "@/components/Languages";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function PortfolioPage() {
  return (
    <>
      <BackgroundCanvas />

      <Mascot />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Certifications />
        <Languages />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
