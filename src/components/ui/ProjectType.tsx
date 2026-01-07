export const ProjectType = ( project: any) => {
    return (
        <div>
            {
            project.type === "team" ?
                <div className="flex flex-nowrap items-center px-1 py-1 rounded-md border text-blue-700 font-medium shadow hover:bg-blue-700 y-1">
                    <div className="flex items-center text-xs font-semibold text-blue-700 hover:text-white">👭<span className="hidden md:flex">Team</span></div>
                </div>
                :
                <div className="flex flex-nowrap items-center px-1 py-1 rounded-md border text-red-700 font-medium shadow hover:bg-blue-700 y-1">
                    <div className="flex items-center text-xs font-semibold text-red-700 hover:text-white">🧑‍💻<span className="hidden md:flex">Persol</span></div>
                </div>
            }
        </div>
    )
}
