import { SkillTag } from "../components/SkillTag";
import { FanCard } from "../components/FanCard";
import projects from "../data/portfolioProjects";

export const Project = () => {
  return (
    <div className="flex flex-col items-center bg-green-100 py-16">
      <div className="w-4/5 mx-auto p-3 text-lg text-left font-bold">📦Project</div>
      <div className="flex flex-wrap max-w-4/5 gap-y-15">
        {
          projects.map((project, i: number) => {
            return (
              <div className="flex flex-col md:flex-row  justify-between w-full rounded-xl shadow-lg bg-white">
             
                <FanCard images={Object.values(project.images)} />
             
                <div className="flex md:w-2/5 flex-col m-5">
                  <div className="text-xl font-bold text-gray-800">{project.name}</div>
                  <div className="text-sm text-gray-500">{project.period}</div>
                  <div className="text-base text-gray-700 mt-2">{project.description}</div>
                  <div>
                    <div className="text-base font-semibold text-gray-800 mt-4">역할 / 기능</div>
                    <div className="text-sm text-gray-500">
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                        {project.roles.map((role,i) => (
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
