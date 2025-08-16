import { SkillTag } from "../components/SkillTag";
import sunnysweb from "../assets/images/project/Sunnyside-web.png";


export const About = ({ menuRef }: any) => {
    return (
        <div ref={menuRef} className="flex flex-col items-center mx-5">
            <div className="text-lg font-semibold text-center">About me</div>

            <div className="flex flex-col w-full items-center">
                <div className="w-full  p-3 text-lg text-left">💼 경력</div>
                <div className="flex flex-col justify-evenly md:flex-row gap-4 w-full">
                    <div className="basis-1/3 flex flex-row border border-gray-400 rounded-xl py-10  items-center hover:animate-bounce">
                        <div className="flex basis-1/4 justify-around">🏢 </div>
                        <div className="flex flex-col">
                            <div className="m-0 p-0 text-lg">주식회사 노벨테크놀로지</div>
                            <div className="flex flex-wrap justify-between">
                                <div className="text-sm text-gray-400">2020.01~2023.08</div>
                                <div className="text-sm text-gray-400">3년4개월</div>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/3 flex flex-row border border-gray-400 rounded-xl  items-center hover:animate-bounce">
                        <div className="flex basis-1/4 justify-around">🏢 </div>
                        <div className="flex flex-col">
                            <div className="m-0 p-0 text-lg">주식회사 노벨테크놀로지</div>
                            <div className="flex flex-wrap justify-between">
                                <div className="text-sm text-gray-400">2020.01~2023.08</div>
                                <div className="text-sm text-gray-400">3년4개월</div>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/3 flex flex-row border border-gray-400 rounded-xl  items-center hover:animate-bounce">
                        <div className="flex basis-1/4 justify-around">🏢 </div>
                        <div className="flex flex-col">
                            <div className="m-0 p-0 text-lg ">주식회사 노벨테크놀로지</div>
                            <div className="flex flex-wrap justify-between">
                                <div className="text-sm text-gray-400">2020.01~2023.08</div>
                                <div className="text-sm text-gray-400">3년4개월</div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div className="flex flex-col w-full items-cente">
                <div className="w-full  p-3 text-lg text-left">🌟주요성과</div>
                <div className="flex flex-col flex-wrap items-center justify-center flex-wrap gap-3 w-full">
                    <div className="flex flex-col md:flex-row border border-gray-400 rounded-xl  items-center ">
                        <div className="flex justify-around w-full h-full  max-h-70 rounded-xl  overflow-hidden hover:overflow-y-visible  hover:scale-130 hover:transform-gpu">
                            <img className="w-full h-full object-cover  object-top  rounded-xl" src={sunnysweb} />
                        </div>
                        <div className="flex flex-col basis-1/3">
                            <div className="flex flex-col gap-y-1 m-3">
                                <div className="font-bold">QR Scann Andorid APP</div>
                                <div className="text-sm text-gray-400">2022.12~2023.04</div>
                                <div className="text-gray-600">태양광 모듈의 각 QR코드를 스캔해서 등록하여 유지관리하는 App </div>
                                <div className="flex flex-wrap gap-x-1">
                                    <div className="m-1 p-2 text-sm font-bold border border-gray-400 rounded-xl">html</div>
                                    <div className="m-1 p-2 text-sm font-bold border border-gray-400 rounded-xl">Css3</div>
                                    <div className="m-1 p-2 text-sm font-bold border border-gray-400 rounded-xl">JavaScript</div>
                                    <div className="m-1 p-2 text-sm font-bold border border-gray-400 rounded-xl">Ajax</div>
                                    <div className="m-1 p-2 text-sm font-bold border border-gray-400 rounded-xl">Jquery</div>
                                    <div className="m-1 p-2 text-sm font-bold border border-gray-400 rounded-xl">PHP</div>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row border border-gray-400 rounded-xl  items-center ">
                        <div className="flex justify-around w-full h-full max-h-70 rounded-xl overflow-hidden hover:overflow-y-visible hover:scale-130 hover:transform-gpu">
                            <img className="w-full h-full object-cover  object-top  rounded-xl " src={sunnysweb} />
                        </div>
                        <div className="flex flex-col basis-1/3">
                            <div className="flex flex-col gap-y-1 m-3">
                                <div className="">QR Scann Andorid APP</div>
                                <div>2022.12~2023.04</div>
                                <div>태양광 모듈의 각 QR코드를 스캔해서 등록하여 유지관리하는 App </div>
                                <div className="flex flex-wrap gap-x-1">
                                    <div className="m-1 p-1 border border-gray-400 rounded-xl">html</div>
                                    <div className="m-1 p-1 border border-gray-400 rounded-xl">Css3</div>
                                    <div className="m-1 p-1 border border-gray-400 rounded-xl">JavaScript</div>
                                    <div className="m-1 p-1 border border-gray-400 rounded-xl">Ajax</div>
                                    <div className="m-1 p-1 border border-gray-400 rounded-xl">Jquery</div>
                                    <div className="m-1 p-1 border border-gray-400 rounded-xl">PHP</div>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row border border-gray-400 rounded-xl  items-center">
                        <div className="flex justify-around w-full h-full max-h-70 rounded-xl overflow-hidden hover:overflow-y-visible hover:scale-130 hover:transform-gpu">
                            <img className="w-full h-full object-cover  object-top  rounded-xl" src={sunnysweb} />
                        </div>
                        <div className="flex flex-col basis-1/3">
                            <div className="flex flex-col gap-y-1 m-3">
                                <div>QR Scann Andorid APP</div>
                                <div>2022.12~2023.04</div>
                                <div>태양광 모듈의 각 QR코드를 스캔해서 등록하여 유지관리하는 App </div>
                                <div className="flex flex-wrap gap-x-1">
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
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};