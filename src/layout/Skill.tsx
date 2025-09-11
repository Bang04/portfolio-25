import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SkillTag } from "../components/SkillTag";
import skills from "../data/skills";

export const Skill = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <div className="flex flex-col items-center min-h-100  bg-[#ffece9] py-16">
            <div className="w-4/5 mx-auto p-3 text-lg text-left font-bold">🛠️ Skills</div>
            <div ref={ref} className="flex flex-col md:flex-row  justify-between w-full rounded-xl shadow-lg bg-white max-w-4/5">
                <div className="p-4">
                    {
                        skills.map((category, i) => (
                            <motion.div
                                animate={
                                    isInView
                                        ? { opacity: 1, scale: 1, x: 10 }
                                        : { opacity: 0, scale: 0 }
                                }
                                transition={{ type: "spring", stiffness: 200, damping: 20, delay: i * 0.2 }}
                                className="mb-2"
                            >
                                <div className="font-semibold ">{category.title}</div>
                                {category.groups.map((groups) => (
                                     <div className="flex ml-4 border-l border-gray-200 pl-3">
                                        {groups.label && (
                                            <div className="flex hidden md:flex">
                                                 <span className="inline-flex items-center px-3 py-1  text-sm font-medium text-gray-700 ">
                                                    {groups.label}
                                                </span>
                                            </div>
                                        )}
                                        <div className="flex flex-row flex-wrap gap-3 mb-3">
                                            {groups.items.map((itme) => (
                                                <SkillTag name={itme} />
                                            ))}
                                         </div>
                                    </div>
                                ))}
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};