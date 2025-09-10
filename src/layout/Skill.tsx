import { useRef } from "react";
import { SkillTag } from "../components/SkillTag";
export const Skill = () => {

    const ref = useRef(null);
    return (
        <div className="flex flex-col items-center min-h-100  bg-[#ffece9]">
            <div className="text-lg font-semibold text-center">🛠️ Skills</div>
            <div ref={ref} className="flex flex-col md:flex-row  justify-between w-full rounded-xl shadow-lg bg-white max-w-4/5">
                <div className="p-4">
                    <div className="mb-2">
                        <div className="font-semibold">⚡ Frontend</div>
                        <div className="ml-4 border-l border-gray-200 pl-3">
                            <div className="flex flex-row flex-wrap gap-3 mb-3"> <div className="hidden md:flex">Markup & Style → </div>
                                <SkillTag name={"HTML"} />
                                <SkillTag name={"CSS"} />
                            </div>
                            <div className="flex flex-row flex-wrap gap-3  mb-3"><div className="hidden md:flex">Core Language → </div>
                                <SkillTag name={"JavaScript"} />
                                <SkillTag name={"TypeScript"} />
                            </div>
                            <div className="flex flex-row flex-wrap gap-3  mb-3"><div className="hidden md:flex">Framework →  </div>
                                <SkillTag name={"React"} />
                                <SkillTag name={"Redux"} />
                                <SkillTag name={"jQuery"} />
                            </div>
                            <div className="flex flex-row flex-wrap gap-3  mb-3"><div className="hidden md:flex">Styling Framework → </div>
                                <SkillTag name={"Tailwind"} />
                                <SkillTag name={"Bulma"} />
                                <SkillTag name={"Bootstrap"} />
                            </div>
                            <div className="flex flex-row flex-wrap gap-3"><div className="hidden md:flex">Web Communication →</div>
                                <SkillTag name={"Ajax"} />
                                <SkillTag name={"JSON"} />
                            </div>
                        </div>
                    </div>
                    <div className="mb-2">
                        <div className="font-semibold">⚙️ Backend</div>
                        <div className="flex flex-row gap-3 ml-4 border-l border-gray-200 pl-3">
                            <SkillTag name={"PHP"} />
                            <SkillTag name={"MySQL"} />
                        </div>
                    </div>
                    <div className="mb-2">
                        <div className="font-semibold">📚 Education</div>
                        <div className="flex flex-row gap-3 ml-4 border-l border-gray-200 pl-3">
                            <SkillTag name={"Java"} />
                            <SkillTag name={"Spring"} />
                            <SkillTag name={"Oracle"} />
                        </div>
                    </div>
                    <div className="mb-2">
                        <div className="font-semibold">🛠️ Development Tools</div>
                        <div className="flex flex-row gap-3 ml-4 border-l border-gray-200 pl-3">
                            <SkillTag name={"Npm"} />
                            <SkillTag name={"GitHub"} />
                            <SkillTag name={"Vscode"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};