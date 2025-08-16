import { useRef } from "react";
import { Home } from "./layout/Home";
import { About } from "./layout/About";
import { Project } from "./layout/Project";
import { Skill } from "./layout/Skill";
import { Contact } from "./layout/Contact";
import Navbar from "./layout/Nav";
import { Footer } from "./layout/Footer";

interface Nav{
  section :  "about" | "project" |"skill" | "contact"
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
      <Navbar handlerSection = {handlerSection}/>
      <Home />
      <div ref={about}><About /></div>
      <div ref={project}><Project /></div>
      <div ref={skill}><Skill /></div>
      <div ref={contact}><Contact /></div>
      <Footer />
    </>
  )
}

export default App
