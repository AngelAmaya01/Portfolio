import { Navigation } from "./components/Navigation";
import { ParticleBackground } from "./components/ParticleBackground";
import { CustomCursor } from "./components/CustomCursor";
import { ScrollToTop } from "./components/ScrollToTop";
import { LanguageToggle } from "./components/LanguageToggle";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skill";
import { Testimonials } from "./components/Testimonials";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="bg-gray-900 dark:bg-gray-900 min-h-screen relative">
      <ParticleBackground />
      <CustomCursor />
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
        <Projects />
        <Skills />
        <Testimonials />
        <Blog />
        <Contact />
      </main>

      <ScrollToTop />
      <LanguageToggle />
    </div>
  );
}

export default App;