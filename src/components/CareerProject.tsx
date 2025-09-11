import { motion } from "framer-motion";

import { SkillTag } from "../components/SkillTag";
import careerProjects from "../data/careerProjects";
import { useEffect, useState } from "react";

export const CareerProject = () => {
    const [hovered, setHovered] = useState<boolean[]>(()=> careerProjects.map(()=> false));//ref별 각각 모션 줄 것
    const [isMobile, setIsMobile] = useState(false);

    useEffect(()=>{
        const reSize = () => setIsMobile(window.innerWidth >= 768);
        window.addEventListener("resize", reSize);
        return () => {
            window.removeEventListener('resize', reSize);
        }
    }, []);

    return(
        <div className="flex flex-col items-center">
               
                <div className="flex flex-col mb-20">
                    <div className="w-4/5 mx-auto p-3 text-lg text-left font-bold">🚀 주요성과</div>
                    <div className="flex flex-col gap-10">
                         {    
                        careerProjects.map((project, i: number) => {
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
                                    initial={{ opacity: 0, y: 0 }}
                                    animate={{ opacity: 1, y: 0 }}  // 스크롤 들어올 때만 애니메이션 실행
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className="relative flex flex-col md:flex-row w-5/6 m-auto rounded-2xl shadow-lg  bg-white"
                                >
                                    {/* 이미지 영역 */}
                                    <motion.div
                                       animate={{ width:  "100%" }}
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
                                        animate={{ width: hovered[i] ? "100%" : "0%" , height:  hovered[i] ?"auto" : "0px"  }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className=" flex justify-center bg-white rounded-2xl"
                                    >
                                        {/* /items-center  */}
                                        <motion.div
                                            animate={{ opacity: hovered[i] ? 1 : 0 }}
                                            transition={{ duration: 0.3, delay: hovered[i] ? 0.2 : 0 }}
                                            className="p-6 text-gray-700 "
                                        >
                                            <div className="text-xl font-bold text-gray-800">{project.title}</div>
                                            <div className="text-sm text-gray-500"><b className="mr-2">web</b>{project.periods.web}</div>
                                             <div className="text-sm text-gray-500"><b className="mr-2">app</b>{project.periods.app}</div>
                                            <div className="text-base text-gray-700 mt-2">{project.role}</div>
                                            <div>
                                                <div className="text-lg font-semibold text-gray-800 mt-4">역할 / 업무성과</div>
                                                <div className="text-sm text-gray-500">
                                                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                                                        { project.achievements.map((achiev) => (
                                                            <li>{achiev}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="flex flex-wrap gap-1 mt-4">
                                                    {project.techStack.map((sill) =>(
                                                        <SkillTag name={sill} />
                                                    ))}
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
    )
}