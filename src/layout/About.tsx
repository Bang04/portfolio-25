import { inView, motion, useAnimation, useInView } from "framer-motion";

import { SkillTag } from "../components/SkillTag";
import sunnysweb from "../assets/images/project/Sunnyside-web.png";
import { useEffect, useRef, useState } from "react";

const projects = [
    { image: sunnysweb, description: "첫 번째 프로젝트" },
    { image: sunnysweb, description: "두 번째 프로젝트" },
    { image: sunnysweb, description: "세 번째 프로젝트" },
];

export const About = () => {
    const [hovered, setHovered] = useState<boolean[]>(()=> projects.map(()=> false));//ref별 각각 모션 줄 것

    return (
        <div className="flex flex-col items-center mx-5">
            <div className="text-lg font-semibold text-center">About me</div>

            <div className="flex flex-col items-center">
                <div className="w-full  p-3 text-lg text-left">💼 경력</div>

                <div className="flex lex-row justify-evenly md:flex-col gap-4 w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            delay: 0,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                        }}
                        className="basis-1/3 flex flex-row border-gray-400 rounded-xl py-5  items-center shadow-lg">
                        <div className="flex basis-1/4 justify-around">🏢 </div>
                        <div className="flex flex-col">
                            <div className="m-0 p-0 text-lg">주식회사 노벨테크놀로지</div>
                            <div className="flex flex-wrap justify-between">
                                <div className="text-sm text-gray-400">2020.01~2023.08</div>
                                <div className="text-sm text-gray-400">3년4개월</div>
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
                        className="basis-1/3 flex flex-row border-gray-400 rounded-xl py-5  items-center shadow-lg">

                        <div className="flex basis-1/4 justify-around">🏢 </div>
                        <div className="flex flex-col">
                            <div className="m-0 p-0 text-lg">주식회사 노벨테크놀로지</div>
                            <div className="flex flex-wrap justify-between">
                                <div className="text-sm text-gray-400">2020.01~2023.08</div>
                                <div className="text-sm text-gray-400">3년4개월</div>
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
                        className="basis-1/3 flex flex-row border-gray-400 rounded-xl py-5  items-center shadow-lg">

                        <div className="flex basis-1/4 justify-around">🏢 </div>
                        <div className="flex flex-col">
                            <div className="m-0 p-0 text-lg ">주식회사 노벨테크놀로지</div>
                            <div className="flex flex-wrap justify-between">
                                <div className="text-sm text-gray-400">2020.01~2023.08</div>
                                <div className="text-sm text-gray-400">3년4개월</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                 
             <div className="flex flex-col">
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
                                    className="flex w-5/6 m-auto h-100 rounded-2xl shadow-lg"
                                >
                                    {/* 이미지 영역 */}
                                    <motion.div
                                        animate={{ width: hovered[i] ? "50%" : "100%" }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="h-full   overflow-y-scroll scroll-smooth rounded-2xl"
                                    >
                                        <img
                                            src={project.image}
                                            alt="example"
                                            className="w-full object-top object-cover "
                                        />
                                    </motion.div>

                                    {/* 설명 영역 */}
                                    <motion.div
                                        animate={{ width: hovered[i] ? "50%" : "0%" }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="flex items-center justify-center bg-white rounded-2xl"
                                    >
                                        <motion.div
                                            animate={{ opacity: hovered[i] ? 1 : 0 }}
                                            transition={{ duration: 0.3, delay: hovered[i] ? 0.2 : 0 }}
                                            className="p-6 text-gray-700"
                                        >
                                            <div>QR Scann Andorid APP </div>
                                            <div>2022.12~2023.04</div>
                                            <div>태양광 모듈의 각 QR코드를 스캔해서 등록하여 유지관리하는 App</div>
                                            <div>
                                                <div>핵심 기능 / 역할 : </div>
                                                <div>
                                                    <ul>
                                                        <li> - 프로젝트 카드 hover 시 이미지 축소 및 설명 표시 애니메이션 구현</li>
                                                        <li>반응형 디자인 적용 및 TailwindCSS로 레이아웃 구성</li>
                                                        <li>React 컴포넌트 재사용성을 고려한 구조 설계</li>

                                                    </ul>
                                                </div>
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