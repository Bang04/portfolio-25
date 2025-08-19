import css3 from "../assets/images/icon/css3_badge.png";
import html5 from "../assets/images/icon/html5_badge.png";
import react from "../assets/images/icon/react_badge.png";
import js from "../assets/images/icon/js_badge.svg";
import jquery from "../assets/images/icon/jquery_badge.svg";
import tailwind from "../assets/images/icon/tailwind_badge.png";
import ts from "../assets/images/icon/ts_badge.png";
import android from "../assets/images/icon/android_badge.svg";
import bootstrap from "../assets/images/icon/bootstrap_badge.svg";
import bulma from "../assets/images/icon/bulma_badge.svg";
import github from "../assets/images/icon/github_badge.svg";
import mysql from "../assets/images/icon/mysql_badge.svg";
import php from "../assets/images/icon/php_badge.svg";
import java from "../assets/images/icon/java_badge.svg";
import spring from "../assets/images/icon/spring_badge.svg";
import oracle from "../assets/images/icon/oracle_badge.svg";
import redux from "../assets/images/icon/redux_badge.svg";
import npm from  "../assets/images/icon/npm_badge.svg";
import vscode from "../assets/images/icon/vscode_badge.svg";
import json from "../assets/images/icon/json-badge.png";

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
                <div key={i} className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium `+skill.color}>
                       {skill.badge && <img src={skill.badge} className="w-4 h-4" />}
                       <span className="">{skill.name}</span>
                </div>
            ))
        }
        </div>
    )
}