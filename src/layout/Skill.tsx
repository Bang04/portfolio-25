export const Skill = ({menuRef}:any) => {
    return (
        <div ref={menuRef} className="min-h-100  bg-[#ff8470]">
            <h2>🔧Skills</h2>
            <ul>
                <li>HTML / CSS / JavaScript</li>
                <li>React / Vue / Angular</li>
                <li>Node.js / Python / Java</li>
                <li>Git / Figma / MySQL</li>
            </ul>
        </div>
    );
};