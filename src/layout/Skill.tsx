import { SkillTag } from "../components/SkillTag";
export const Skill = () => {
    return (
        <div className="min-h-100  bg-[#ff8470]">
            <div className="text-lg font-semibold text-center">🛠️ Skills</div>

            <div className="flex flex-col gap-4 items-center w-80">
                <div className="w-full flex flex-col md:flex-row">
                    <div className="flex items-center py-3">
                        <div className="text-white  whitespace-nowrap"> Front-end</div>
                    </div>
                    <div className="flex flex-wrap  gap-2">
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
                <div className="w-full flex flex-col md:flex-row">
                    <div className="flex items-center py-3">
                        <div className="text-white  whitespace-nowrap"> Back-end</div>
                    </div>
                    <div className="flex flex-wrap  gap-2">
                        <SkillTag name={"PHP"} />
                        <SkillTag name={"MySQL"} />
                    </div>
                </div>
                <div className="w-full flex flex-col md:flex-row">
                    <div className="flex items-center py-3">
                        <div className="text-white  whitespace-nowrap">Education</div>
                    </div>
                    <div className="flex flex-wrap  gap-2">
                        <SkillTag name={"Java"} />
                        <SkillTag name={"Spring"} />
                        <SkillTag name={"Oracle"} />
                    </div>
                </div>

                <div className="w-full flex flex-col md:flex-row">
                    <div className="flex items-center py-3">
                        <div className="text-white  whitespace-nowrap">Version & Tool</div>
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