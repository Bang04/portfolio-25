
import { useState } from "react";
import { motion } from "framer-motion";
import { SkillTag } from "../components/SkillTag";
import { ImageSlide } from "./ImageSlide";
import careerProjects from "../data/careerProjects";

export const CareerProject = () => {
    const [hovered, setHovered] = useState<boolean[]>(() => careerProjects.map(() => false));

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col mb-20 w-4/5">
                <div className="w-full mx-auto p-3 text-lg text-left font-bold">🚀 주요성과</div>
                <div className="w-full mx-auto flex flex-col gap-10">
                    {careerProjects.map((project, i: number) => {
                        return (
                            <motion.div
                                onMouseEnter={() => setHovered(prev => {
                                    const newHover = [...prev];
                                    newHover[i] = true;
                                    return newHover
                                })
                                }
                                // onMouseLeave={() => setHovered(prev => {
                                //         const newHover = [...prev];
                                //         newHover[i] = false;                 
                                //         return newHover
                                //     })
                                // }
                                initial={{ opacity: 0, y: 0 }}
                                animate={{ opacity: 1, y: 0 }}  // 스크롤 들어올 때만 애니메이션 실행
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="relative flex flex-col md:flex-row rounded-2xl shadow-lg bg-white"
                            >
                                {/* 이미지 영역 */}
                                <ImageSlide images={project.image} mode={project.mode} />
                                {/* 설명 영역 */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    style={{ height: hovered[i] ? "auto" : "0px" }}
                                    animate={{ opacity: hovered[i] ? 1 : 0, flexBasis: hovered[i] ? "100%" : "0%" }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="flex justify-center bg-white rounded-2xl overflow-hidden overflow-y-scroll"
                                >
                                    {/* /items-center  */}
                                    <motion.div
                                        animate={{ opacity: hovered[i] ? 1 : 0 }}
                                        transition={{ duration: 0.3, delay: hovered[i] ? 0.2 : 0 }}
                                        className="px-6 py-2 text-gray-700 "
                                    >
                                        <div className="text-xl font-bold text-gray-800">{project.title}</div>
                                        {project.periods.web !== "" ?
                                            <div className="text-sm text-gray-500">
                                                <b className="mr-2">web</b>
                                                {project.periods.web}
                                            </div>
                                            : 
                                            ""
                                        }
                                        {project.periods.app !== "" ?
                                            <div className="text-sm text-gray-500">
                                                <b className="mr-2">app</b>
                                                {project.periods.app}
                                            </div>
                                            : 
                                            ""
                                        }
                                        <div className="text-base text-gray-700 mt-2">{project.role}</div>
                                        <div>
                                            <div className="text-lg font-semibold text-gray-800 mt-4">역할 / 업무성과</div>
                                            <div className="text-sm text-gray-500">
                                                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                                                    {project.achievements.map((achiev) => (
                                                        <li>{achiev}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="flex flex-wrap gap-1 mt-4">
                                                {project.techStack.map((sill) => (
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