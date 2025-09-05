import { inView, motion, useAnimation, useInView } from "framer-motion";

import { SkillTag } from "../components/SkillTag";
import sunnysweb from "../assets/images/sol/sol_main.png";
import { useEffect, useRef, useState } from "react";

const projects = [
    { image: sunnysweb, description: "첫 번째 프로젝트" },
    { image: sunnysweb, description: "두 번째 프로젝트" },
    { image: sunnysweb, description: "세 번째 프로젝트" },
];

export const About = () => {
    const [hovered, setHovered] = useState<boolean[]>(()=> projects.map(()=> false));//ref별 각각 모션 줄 것
    const [isMobile, setIsMobile] = useState(false);

    useEffect(()=>{
        const reSize = () => setIsMobile(window.innerWidth >= 768);
        window.addEventListener("resize", reSize);
        return () => {
            window.removeEventListener('resize', reSize);
        }
       
    }, []);
    return (
        <div className="flex flex-col items-center mx-5">
            <div className="text-lg font-semibold text-center">About me</div>

            <div className="flex flex-col items-center">
                <div className="w-full  p-3 text-lg text-left">💼 경력</div>

                <div className="flex flex-col justify-evenly md:flex-row gap-4 w-full mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            delay: 0,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                        }}
                        className="basis-1/3  sm:w-full flex flex-row border-gray-400 rounded-xl py-5  items-center shadow-lg">
                        <div className="flex basis-1/4 justify-around">🏢 </div>
                        <div className="flex flex-col">
                            <div className="m-0 p-0 text-lg">노벨테크놀로지</div>
                            <div className="flex flex-wrap justify-between">
                                <div className="text-sm text-gray-400">2020.01~2023.08</div>
                                <div className="text-sm text-gray-400">(3년5개월)</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            delay: 0.5,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                        }}
                        className="basis-1/3  sm:w-full flex flex-row border-gray-400 rounded-xl py-5  items-center shadow-lg">

                        <div className="flex basis-1/4 justify-around">🏢 </div>
                        <div className="flex flex-col">
                            <div className="m-0 p-0 text-lg">일오삼미디어</div>
                            <div className="flex flex-wrap justify-between">
                                <div className="text-sm text-gray-400">2017.07~2018.07</div>
                                <div className="text-sm text-gray-400">(1년 1개월)</div>
                            </div>
                        </div>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            delay: 1,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                        }}
                        className="basis-1/3  sm:w-full flex flex-row border-gray-400 rounded-xl py-5  items-center shadow-lg">

                        <div className="flex basis-1/4 justify-around">🏢 </div>
                        <div className="flex flex-col">
                            <div className="m-0 p-0 text-lg ">트론트</div>
                            <div className="flex flex-wrap justify-between">
                                <div className="text-sm text-gray-400">2014.01-2015.03</div>
                                <div className="text-sm text-gray-400">(1년3개월)</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                 
                <div className="flex flex-col mb-20">
                    <div className="w-full  p-3 text-lg text-left">🚀 주요성과</div>
                    <div className="flex flex-col gap-10">
                         {    
                        projects.map((project, i: number) => {
                            return (
                                <motion.div
                                    onMouseEnter={() => setHovered(prev =>{
                                            const newHover = [...prev];
                                            newHover[i] = true;
                                            return newHover
                                        })
                                    }
                                    onMouseLeave={() => setHovered(prev => {
                                            const newHover = [...prev];
                                            newHover[i] = false;
                                            return newHover
                                        })
                                    }
                                    initial={{ opacity: 0, y: 100 }}
                                    animate={{ opacity: 1, y: 0 }}  // 스크롤 들어올 때만 애니메이션 실행
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className="relative flex flex-col md:flex-row w-5/6 m-auto rounded-2xl shadow-lg"
                                >
                                    {/* 이미지 영역 */}
                                    <motion.div
                                       animate={{ width:  "100%" }}
                                         // animate={{ width: hovered[i]?  isMobile? "80%" : "50%" : "100%" }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="flex items-center w-full h-auto scroll-smooth rounded-2xl"
                                    >
                                        <img
                                            src={project.image}
                                            alt="example"
                                            className="w-full object-top object-cover  rounded-2xl"
                                        />
                                    </motion.div>

                                    {/* 설명 영역 */}
                                    <motion.div
                                        animate={{ width: hovered[i] ? "100%" : "0%" , height:  hovered[i] ?" 350px" : "0px"  }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className=" flex justify-center bg-white rounded-2xl"
                                    >
                                        {/* /items-center  */}
                                        <motion.div
                                            animate={{ opacity: hovered[i] ? 1 : 0 }}
                                            transition={{ duration: 0.3, delay: hovered[i] ? 0.2 : 0 }}
                                            className="p-6 text-gray-700 "
                                        >
                                            <div className="text-xl font-bold text-gray-800">솔라리버 태양광 모니터링 Web& QR Scanner APP​​​ </div>
                                            <div className="text-sm text-gray-500">2022-08-01 ~ 2023-04-01</div>
                                            <div className="text-base text-gray-700 mt-2">태양광 모듈의 각 QR코드를 스캔해서 등록하여 유지관리하는 App</div>
                                            <div>
                                                <div className="text-lg font-semibold text-gray-800 mt-4">역할 / 업무성과</div>
                                                <div className="text-sm text-gray-500">
                                                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                                                        <li>web, app 기획, 설계, 개발, 빌드, 배포 경험</li>
                                                        <li>1. AmChart 를 이용한 데이터 시각봐</li>
                                                        <li>2. QR 스캐너 라이브러리를 이용한 하이브리드 앱 개발 ​</li>
                                                        <li>3. Android App 배포 경험</li>

                                                    </ul>
                                                </div>
                                                <div className="flex flex-wrap gap-1 mt-4">

                                                    <SkillTag name={"PHP"} />
                                                    <SkillTag name={"MySQL"} />
                                            
                                                    <SkillTag name={"HTML"} />
                                                    <SkillTag name={"CSS3"} />
                                                    <SkillTag name={"JavaScript"} />

                                                    <SkillTag name={"Ajax"} />
                                                    <SkillTag name={"jQuery"} />
                                                     <SkillTag name={"Android"} />
                                                   
                                                </div>
                                            </div>

                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            )
                        })
                    }
                    </div>
                   
                </div>  

            </div>
        </div>
    );
};