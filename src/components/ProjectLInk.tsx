import git from "../assets/images/skill/github.svg";
import link from "../assets/images/skill/link.svg";

export const ProjectLink = (props: any) => {
    const demoLink = props.links.demo;
    const githubLink = props.links.github;
    return (
        <div className={`flex  mt-6 ${demoLink === null?  'mx-5 justify-end': 'justify-around' }`}>
            {
                demoLink === null ?
                    ""
                    :
                    <a
                        className="flex items-center px-3 py-1 rounded-md border outline-gray-200 text-gray-700 font-medium shadow hover:bg-blue-900 hover:shadow-lg hover:text-white transition-transform transform hover:-translate-y-1"
                        href={demoLink}
                        target="_blank"
                    >
                        <img src={link} alt="GitHub" className="size-4" />
                        <p className="text-sm">Demo</p>
                    </a>
            }

            {/* GitHub 버튼 */}
            <a
                className="flex items-center px-1 py-1 rounded-md border outline-gray-200 text-gray-900 font-medium shadow hover:bg-gray-900 hover:shadow-lg hover:text-white transition-transform transform hover:-translate-y-1"
                href={githubLink}
                target="_blank"
            >
                <img src={git} alt="GitHub" className="size-4" />
                <span className="text-sm">GitHub</span>
            </a>
        </div>
    )
}