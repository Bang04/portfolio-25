import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SkillTag } from "../components/SkillTag";
import crowdweb from "../assets/images/project/Crowdfunding-web.png";
import enterweb from "../assets/images/project/Enterainment-web.png";
import cartweb from "../assets/images/project/ListWithCart-web.png";
import sunnysweb from "../assets/images/project/Sunnyside-web.png";

const projects = [
    { image: crowdweb, description: "첫 번째 프로젝트" },
    { image: enterweb, description: "두 번째 프로젝트" },
    { image: cartweb, description: "세 번째 프로젝트" },
    { image: sunnysweb, description: "네 번째 프로젝트" },
];

export const Project = () => {

    return (
        <>
            <div className="text-lg font-semibold text-center">📦Project</div>
            <div className="flex flex-row sm:flex-col w-5/6 m-auto">
                {
                    projects.map((project, i: number) => {
                     
                        return (
                            <div className="flex flex-col w-80 sm:w-full border border-gray-400 rounded-xl  items-center">
                            <div className="flex justify-around w-full h-full max-h-70 rounded-xl overflow-hidden hover:overflow-y-visible hover:scale-130 hover:transform-gpu">
                                <img className="w-full h-full object-cover  object-top  rounded-xl" src={project.image} />
                            </div>
                            <div className="flex flex-col basis-1/3">
                                <div className="flex flex-col gap-y-1 m-3">
                                    <div>QR Scann Andorid APP</div>
                                    <div>2022.12~2023.04</div>
                                    <div>태양광 모듈의 각 QR코드를 스캔해서 등록하여 유지관리하는 App </div>
                                    <div className="flex flex-wrap gap-1">
                                        <SkillTag name={"HTML"} />
                                        <SkillTag name={"CSS3"} />
                                        <SkillTag name={"JavaScript"} />
                                        <SkillTag name={"Ajax"} />
                                        <SkillTag name={"jQuery"} />
                                        <SkillTag name={"PHP"} />
                                        <SkillTag name={"Tailwind"} />
                                        <SkillTag name={"TypeScript"} />
                                        <SkillTag name={"React"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }

            </div>
        </>
    );
}
