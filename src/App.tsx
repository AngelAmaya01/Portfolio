import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skill";

function App() {
  return (
    <div className="bg-gray-900">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
