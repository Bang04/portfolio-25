import { motion, AnimatePresence, useAnimation, useInView, usePresenceData, wrap } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SkillTag } from "../components/SkillTag";

import { Slide } from "../components/Slide";



import crowdweb from "../assets/images/project/Crowdfunding-web.png";
import enterweb from "../assets/images/project/Enterainment-web.png";
import cartApp from "../assets/images/project/CartApp.png";
import cartTablet from "../assets/images/project/LlistWithCart-tablet.png";
import cartWeb from "../assets/images/project/LlistWithCart-web.png";

import sunnysweb from "../assets/images/project/Sunnyside-web.png";

// const projects = [

//     { web: enterweb, description: "두 번째 프로젝트" },
//     { app: cartApp, tablet: cartTablet, web: cartWeb, description: "첫 번째 프로젝트" },
//     { web: crowdweb, description: "세 번째 프로젝트" },
//     { web: sunnysweb, description: "네 번째 프로젝트" },
// ];


const projects = [
  {
    name: "Enter Web",
    images: {
      web: enterweb,
    },
  },
  {
    name: "Cart App",
    images: {
      web: cartApp,
      tablet: cartTablet,
      mobile: cartWeb,
    },
  },
  {
    name: "Crowd Web",
    images: {
      web: crowdweb,
    },
  },
  {
    name: "Sunnys Web",
    images: {
      web: sunnysweb,
    },
  },
];
export const Project = () => {


  return (
    <div className="flex flex-col items-center w-full ">
      <div className="text-lg font-semibold text-center mb-15">📦Project</div>
      <div className="flex flex-wrap max-w-4/5 gap-y-15">

        {
          projects.map((project, i: number) => {

            return (
              <div className="flex flex-col md:flex-row w-full rounded-xl shadow-lg">

                <Slide images={Object.values(project.images)} />

                {/* <div className="flex  md:w-3/5  h-100 rounded-xl  hover:overflow-y-visible  hover:scale-110 hover:transform-gpu ">  overflow-hidden */}
                {/* <img className="w-full h-full object-cover  object-top  rounded-xl block md:hidden "  /> */}
                {/* <img className="w-full h-full object-cover  object-top  rounded-xl hidden md:block lg:hidden " /> */}
                {/* <img className="w-full h-full object-cover  object-top  rounded-xl hidden lg:block"  /> */}

                {/* </div> */}
                <div className="flex md:w-2/5 flex-col ">
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
    </div>
  );
}
