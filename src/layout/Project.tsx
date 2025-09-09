import { motion, AnimatePresence, useAnimation, useInView, usePresenceData, wrap } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SkillTag } from "../components/SkillTag";



import crowdweb from "../assets/images/project/Crowdfunding-web.png";
import crowdapp from "../assets/images/project/Crowdfunding-app.png";

import enterweb from "../assets/images/project/Enterainment-web.png";
import enterApp from "../assets/images/project/Enterainment-app.png";

import cartApp from "../assets/images/project/CartApp.png";
import cartTablet from "../assets/images/project/LlistWithCart-tablet.png";
import cartWeb from "../assets/images/project/LlistWithCart-web.png";

import sunnysweb from "../assets/images/project/Sunnyside-web.png";
import { FanCard } from "../components/FanCard";

const projects = [
  {
    name: "Enter Web",
    images: {
      web: enterweb,
      mobile: enterApp,
    },
  },
  {
    name: "Cart App",
    images: {
     

      tablet: cartTablet,

      mobile: cartWeb,

       web: cartApp,
    },
  },
  {
    name: "Crowd Web",
    images: {
      web: crowdweb,
      mobile: crowdapp,
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
              <div className="flex flex-col md:flex-row  justify-between w-full rounded-xl shadow-lg">
             
                <FanCard images={Object.values(project.images)} />
             
                <div className="flex md:w-2/5 flex-col m-5">
                  <div className="text-xl font-bold text-gray-800">솔라리버 태양광 모니터링 Web& QR Scanner APP​​​ </div>
                  <div className="text-sm text-gray-500">2022-08-01 ~ 2023-04-01</div>
                  <div className="text-base text-gray-700 mt-2">태양광 모듈의 각 QR코드를 스캔해서 등록하여 유지관리하는 App</div>
                  <div>
                    <div className="text-base font-semibold text-gray-800 mt-4">역할 / 기능</div>
                    <div className="text-sm text-gray-500">
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                        <li>web, app 기획, 설계, 개발, 빌드, 배포 경험</li>
                        <li>1. AmChart 를 이용한 데이터 시각봐</li>
                        <li>2. QR 스캐너 라이브러리를 이용한 하이브리드 앱 개발 ​</li>
                        <li>3. Android App 배포 경험</li>

                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-4">
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
