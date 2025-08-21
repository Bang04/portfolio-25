import { SkillTag } from "../components/SkillTag";
export const Skill = () => {
    return (
        <div className="flex flex-col items-center min-h-100  bg-[#ffece9]">
            <div className="text-lg font-semibold text-center">🛠️ Skills</div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:min-w-xs max-w-md">
                <div className=" md:col-span-2 flex  flex-col w-full p-5 bg-white shadow-lg rounded-md">
                    <div className="flex items-center pb-4">
                        <div className="text-red-600  whitespace-nowrap">🖥️ Front-end</div>
                    </div>
                    <div className="flex flex-wrap max-w-lg gap-2">
                        {/* Markup & Style: */}
                        <SkillTag name={"HTML"} />
                        <SkillTag name={"CSS"} />

                        {/* Core Language: */}
                        <SkillTag name={"JavaScript"} />
                        <SkillTag name={"TypeScript"} />
                        
                        {/* Framework & Library: */}
                        <SkillTag name={"React"} />
                        <SkillTag name={"Redux"} />
                        <SkillTag name={"jQuery"} />
                        
                        {/* Styling Framework: */}
                        <SkillTag name={"Tailwind"} />
                        <SkillTag name={"Bootstrap"} />
                        <SkillTag name={"Bulma"} />

                        {/* Web Communication: */}
                        <SkillTag name={"Ajax"} />
                        <SkillTag name={"JSON"} />
                       
                    </div>
                </div>
                <div className="flex flex-col p-5  w-full  bg-white shadow-lg rounded-md">
                     <div className="flex items-center pb-4">
                        <div className="text-green-500  whitespace-nowrap"> ⚙️ Back-end</div>
                    </div>
                    <div className="flex flex-wrap  gap-2">
                        <SkillTag name={"PHP"} />
                        <SkillTag name={"MySQL"} />
                    </div>
                </div>
               <div className="flex flex-col p-5  w-full  bg-white shadow-lg rounded-md">
                    <div className="flex items-center pb-4">
                        <div className="text-blue-400  whitespace-nowrap">📚 Education</div>
                    </div>
                    <div className="flex flex-wrap  gap-2">
                        <SkillTag name={"Java"} />
                        <SkillTag name={"Spring"} />
                        <SkillTag name={"Oracle"} />
                    </div>
                </div>
                <div className="flex flex-col p-5  w-full bg-white shadow-lg rounded-md">
                     <div className="flex items-center pb-4">
                        <div className="text-purple-500  whitespace-nowrap">🛠️Version & Tool</div>
                    </div>
                    <div className="flex flex-wrap  gap-2">
                        <SkillTag name={"Npm"} />
                        <SkillTag name={"GitHub"} />
                        <SkillTag name={"Vscode"} />
                    </div>
                </div>
            </div>

        </div>
    );
};