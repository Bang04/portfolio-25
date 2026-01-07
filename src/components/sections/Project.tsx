import { SkillTag } from "../ui/SkillTag";
import { FanCard } from "../ui/FanCard";
import projects from "../../data/portfolioProjects";
import { ProjectLink } from "../ui/ProjectLInk";
import { ProjectType } from "../ui/ProjectType";


export const Project = () => {
  return (
    <div className="flex flex-col items-center py-16">
      <div className="w-4/5 mx-auto p-3 text-lg text-left font-bold">📦Project</div>
      <div className="flex flex-wrap max-w-4/5 gap-y-15">
        {
          projects.map((project) => {
            return (
              <div className="flex flex-col md:flex-row  w-full justify-evenly items-center  rounded-xl shadow-lg bg-white">
                <div className="flex flex-col w-full md:max-w-2/5">
                  <FanCard images={Object.values(project.images)} />
                  <ProjectLink links={project.links} />
                </div>
                <div className="flex flex-col m-5 md:max-w-2/5">
                  <div className="flex justify-between">
                    <div className="flex gap-x-2 ">
                      {/* type badge*/}
                      <ProjectType type={project.type} />
                      {/* projectname*/}
                      <div className="flex items-center text-xl font-bold text-gray-800"> {project.name} </div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">{project.period}</div>
                  <div className="text-base text-gray-700 mt-2">{project.description}</div>
                  <div>
                    <div className="text-base font-semibold text-gray-800 mt-4">기능</div>
                    <div className="text-sm text-gray-500">
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                        {project.functions?.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}

                      </ul>
                    </div>
                    <div className="text-base font-semibold text-gray-800 mt-4">담당 역할</div>
                    <div className="text-sm text-gray-500">
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                        {project.roles.map((role, i) => (
                          <li key={i}>{role}</li>
                        ))}

                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-4">
                      {project.skills.map((skill) => (
                        <SkillTag name={skill} />
                      ))}
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
