import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Credentials from "@/components/Credentials";
import Labs from "@/components/Labs";
import Projects from "@/components/Projects";
import Writeups from "@/components/Writeups";
import Skills from "@/components/Skills";
import CurrentFocus from "@/components/CurrentFocus";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <div className="border-t border-[#1f1f1f]" aria-hidden="true" />
        <About />
        <div className="border-t border-[#1f1f1f]" aria-hidden="true" />
        <Credentials />
        <div className="border-t border-[#1f1f1f]" aria-hidden="true" />
        <Labs />
        <div className="border-t border-[#1f1f1f]" aria-hidden="true" />
        <Projects />
        <div className="border-t border-[#1f1f1f]" aria-hidden="true" />
        <Writeups />
        <div className="border-t border-[#1f1f1f]" aria-hidden="true" />
        <Skills />
        <div className="border-t border-[#1f1f1f]" aria-hidden="true" />
        <CurrentFocus />
        <div className="border-t border-[#1f1f1f]" aria-hidden="true" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
