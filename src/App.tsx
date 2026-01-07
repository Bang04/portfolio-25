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
      {/* Header */}
      <header className="w-full bg-white border-b sticky top-0 z-50">
        <div className="max-w-screen-lg mx-auto px-4 h-16 flex items-center">
          <Navbar handlerSection={handlerSection} />
        </div>
      </header>


      <main className="w-full">

        {/* Home */}
        <section className="w-full bg-white">
          <div className="max-w-screen-lg mx-auto px-4 py-24">
            <Home />
          </div>
        </section>

        {/* About */}
        <section  ref={about}  className="w-full bg-gray-50">
          <div className="max-w-screen-lg mx-auto px-4 py-24">
            <About />
          </div>
        </section>

        {/* Project */}
        <section  ref={project}  className="w-full bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-screen-lg mx-auto px-4 py-24">
            <Project />
          </div>
        </section>

        {/* Skill */}
        <section ref={skill} className="w-full bg-white">
          <div className="max-w-screen-lg mx-auto px-4 py-24">
            <Skill />
          </div>
        </section>

        {/* Contact */}
        <section ref={contact} className="w-full bg-gray-50">
          <div className="max-w-screen-lg mx-auto px-4 py-24">
            <Contact />
          </div>
        </section>
      </main>

      <footer className="w-full bg-gray-900 text-gray-200">
        <div className="max-w-screen-lg mx-auto px-4 py-16">
          <Footer />
        </div>
      </footer>
    </>
  )
}

export default App
