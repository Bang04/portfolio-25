import { useEffect, useState } from "react";


interface Navbar {
    sectionAboutt: () => void,
    sectionProject: () => void,
    sectionSkill: () => void,
    sectionContact: () => void
}
const Navbar:React.FC<Navbar> = (
   {sectionAboutt, sectionProject,sectionSkill,sectionContact}
) => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        console.log(window.scrollY);
        const handlerScroll = () => {
            setIsSticky(window.scrollY > 40);
        }
        window.addEventListener("scroll", handlerScroll);


        return () => {
            window.removeEventListener("scroll", handlerScroll);
        };
    }, []);

    return (
        <header className={`w-full bg-white/40 shadow-md z-50 ${isSticky ? 'fixed' : 'flex'}`}>
            <div className="flex justify-between items-center max-w-6xl mx-auto py-4 px-4 md:px-8">
                <h1 className="text-2xl font-bold">BEK</h1>
                <nav className="space-x-4">
                    <button onClick={sectionAboutt} >About</button>
                    <button onClick={sectionProject}>Projects</button>
                    <button onClick={sectionSkill}>Skills</button>
                    <button onClick={sectionContact}>Contact</button>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
