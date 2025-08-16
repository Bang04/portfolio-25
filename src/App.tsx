import React,{ useRef } from "react";
import { Home } from "./layout/Home";
import { About } from "./layout/About";
import { Project } from "./layout/Project";
import { Skill } from "./layout/Skill";
import { Contact } from "./layout/Contact";
import  Navbar  from "./layout/Navbar";
import { Footer } from "./layout/Footer";

const App =() => {
  const about = useRef(null);
  const project = useRef(null);
  const skill = useRef(null);
  const contact = useRef(null);
  

  const sectionScroll = (ref:any)=> {
    console.log("sectionScroll 움직여!");
     ref.current?.scrollIntoView({ behavior: "smooth" });
  }


  return (
    <>
      <Navbar sectionAboutt={function (): void {
        throw new Error("Function not implemented.");
      } } sectionProject={function (): void {
        throw new Error("Function not implemented.");
      } } sectionSkill={function (): void {
        throw new Error("Function not implemented.");
      } } sectionContact={function (): void {
        throw new Error("Function not implemented.");
      } } />
      <Home />
      <About menuRef = {about}/>
      <Project menuRef = {project}/>
      <Skill menuRef = {skill}/>
      <Contact menuRef = {contact} />
      <Footer />
    </>
  )
}

export default App
