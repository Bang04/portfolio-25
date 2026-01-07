import { useRef } from "react";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Project } from "./components/sections/Project";
import { Skill } from "./components/sections/Skill";
import { Contact } from "./components/sections/Contact";
import Navbar from "./components/layout/Nav";
import { Footer } from "./components/layout/Footer";

interface Nav {
  section: "about" | "project" | "skill" | "contact"
}

const App = () => {

  const about = useRef<HTMLDivElement>(null);
  const project = useRef<HTMLDivElement>(null);
  const skill = useRef<HTMLDivElement>(null);
  const contact = useRef<HTMLDivElement>(null);

  const handlerSection = (section: Nav["section"]) => {
    switch (section) {
      case "about":
        about.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "project":
        project.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "skill":
        skill.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contact.current?.scrollIntoView({ behavior: "smooth" });
        break;
    }
  }

  return (
    <>
      <header>
        <Navbar handlerSection={handlerSection} />
      </header>
      <main>
        <section className="w-full max-w-screen-lg mx-auto px-4"><Home /></section>
        <section ref={about} className="w-full max-w-screen-lg mx-auto px-4"><About /></section>
        <section ref={project} className="w-full max-w-screen-lg mx-auto px-4"><Project /></section>
        <section ref={skill} className="w-full max-w-screen-lg mx-auto px-4"><Skill /></section>
        <section ref={contact} className="w-full max-w-screen-lg mx-auto px-4"><Contact /></section>
      </main>
      <Footer />
    </>
  )
}

export default App
