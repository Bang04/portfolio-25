
import { useState } from "react";
import { motion } from "framer-motion";
import { SkillTag } from "../ui/SkillTag";
import { ImageSlide } from "./ImageSlide";
import careerProjects from "../../data/careerProjects";

export const CareerProject = () => {
  const [hovered, setHovered] = useState<boolean[]>(() =>
    careerProjects.map(() => false)
  );

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-screen-lg mx-auto mb-20">
        {/* 타이틀 */}
        <div className="px-4 mb-6 text-lg font-bold">🚀 주요성과</div>

        {/* 리스트 */}
        <div className="flex flex-col gap-12 px-4">
          {careerProjects.map((project, i) => (
            <motion.div
              key={i}
              onMouseEnter={() =>
                setHovered(prev => {
                  const copy = [...prev];
                  copy[i] = true;
                  return copy;
                })
              }
              onMouseLeave={() =>
                setHovered(prev => {
                  const copy = [...prev];
                  copy[i] = false;
                  return copy;
                })
              }
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full overflow-hidden rounded-3xl border bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="flex flex-col md:flex-row">
                {/* 이미지 */}
                <div className="md:w-1/2 w-full overflow-hidden">
                  <ImageSlide images={project.image} mode={project.mode} />
                </div>

                {/* 콘텐츠 */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: hovered[i] ? 1 : 0, y: hovered[i] ? 0 : 10 }}
                  transition={{ duration: 0.4 }}
                  className="md:w-1/2 w-full p-6"
                >
                  <div className="text-xl font-bold text-gray-900">
                    {project.title}
                  </div>

                  {project.periods.web && (
                    <div className="text-sm text-gray-500 mt-1">
                      <b className="mr-2">web</b>
                      {project.periods.web}
                    </div>
                  )}

                  {project.periods.app && (
                    <div className="text-sm text-gray-500">
                      <b className="mr-2">app</b>
                      {project.periods.app}
                    </div>
                  )}

                  <div className="text-base text-gray-700 mt-2">
                    {project.role}
                  </div>

                  <div className="mt-4">
                    <div className="text-lg font-semibold text-gray-800">
                      역할 / 업무성과
                    </div>

                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                      {project.achievements.map((achiev, idx) => (
                        <li key={idx}>{achiev}</li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.techStack.map((skill, idx) => (
                        <SkillTag key={idx} name={skill} />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
