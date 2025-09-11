import { motion } from "framer-motion";
import css3 from "../assets/images/skill/css3_badge.png";
import html5 from "../assets/images/skill/html5_badge.png";
import react from "../assets/images/skill/react_badge.png";
import js from "../assets/images/skill/js_badge.svg";
import jquery from "../assets/images/skill/jquery_badge.svg";
import tailwind from "../assets/images/skill/tailwind_badge.png";
import ts from "../assets/images/skill/ts_badge.png";
import android from "../assets/images/skill/android_badge.svg";
import bootstrap from "../assets/images/skill/bootstrap_badge.svg";
import bulma from "../assets/images/skill/bulma_badge.svg";
import github from "../assets/images/skill/github_badge.svg";
import mysql from "../assets/images/skill/mysql_badge.svg";
import php from "../assets/images/skill/php_badge.svg";
import java from "../assets/images/skill/java_badge.svg";
import spring from "../assets/images/skill/spring_badge.svg";
import oracle from "../assets/images/skill/oracle_badge.svg";
import redux from "../assets/images/skill/redux_badge.svg";
import npm from  "../assets/images/skill/npm_badge.svg";
import vscode from "../assets/images/skill/vscode_badge.svg";
import json from "../assets/images/skill/json-badge.png";

type Tag = {
    name: string, 
    color? : string,
    badge? : string
}

export const SkillTag = ({name}: Tag) => {

    const skills = [
        { name: "HTML", color: "bg-orange-100 text-orange-700", badge: html5 },
        { name: "CSS", color: "bg-blue-100 text-blue-700" , badge: css3},
        { name: "JavaScript", color: "bg-yellow-100 text-yellow-700", badge: js },
        { name: "Ajax", color: "bg-sky-100 text-sky-700"},
        { name: "jQuery", color: "bg-indigo-100 text-indigo-700", badge: jquery },
        { name: "PHP", color: "bg-purple-100 text-purple-700" , badge:php },
        { name: "Tailwind", color: "bg-teal-100 text-teal-700", badge: tailwind },
        { name: "TypeScript", color: "bg-blue-100 text-blue-700" ,badge:ts },
        { name: "React", color: "bg-cyan-900 text-cyan-300", badge: react },

        { name: "Redux", color: "bg-violet-200 text-violet-900", badge:redux },
        { name: "Java", color: "bg-red-100 text-red-700", badge: java },
        { name: "Spring", color: "bg-green-100 text-green-700", badge: spring },
        { name: "Oracle", color: "bg-red-100 text-red-700", badge: oracle },
        { name: "Android", color: "bg-green-100 text-green-700", badge: android },
        { name: "Bootstrap", color: "bg-purple-100 text-purple-700", badge: bootstrap },
        { name: "Bulma", color: "bg-blue-100 text-blue-700", badge: bulma },
        { name: "GitHub", color: "bg-gray-100 text-gray-800", badge: github },
        { name: "MySQL", color: "bg-blue-100 text-blue-700", badge: mysql },
        { name: "Npm", color: "bg-red-100 text-red-700", badge: npm },
         { name: "JSON", color: "bg-green-100 text-green-700", badge: json },
          { name: "Vscode",color: "bg-blue-200 text-blue-800", badge: vscode },
               
    ];


    return (
        <div className="flex flex-wrap gap-2">
        {
            skills.filter(skill => skill.name === name)
            .map((skill, i) => (
                <motion.div>
                    <div key={i} className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium `+skill.color}>
                        {skill.badge && <img src={skill.badge} className="w-4 h-4" />}
                        <span className="">{skill.name}</span>
                    </div>
                </motion.div>
            ))
        }
        </div>
    )
}