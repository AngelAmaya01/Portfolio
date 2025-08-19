import { Navigation } from "./components/Navigation";
import { ParticleBackground } from "./components/ParticleBackground";
import { CustomCursor } from "./components/CustomCursor";
import { ScrollToTop } from "./components/ScrollToTop";
import { LanguageToggle, LanguageProvider } from "./components/LanguageToggle";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skill";
import { Contact } from "./components/Contact";

function App() {
  return (
    <LanguageProvider>
      <div className="bg-white dark:bg-gray-900 min-h-screen relative transition-colors duration-300">
        <ParticleBackground />
        <CustomCursor />
        <Navigation />
        
        <main>
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>

        <ScrollToTop />
        <LanguageToggle />
      </div>
    </LanguageProvider>
  );
}

export default App;