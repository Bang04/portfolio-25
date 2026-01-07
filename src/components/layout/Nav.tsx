import { useEffect, useState } from "react";

const Navbar = ({ handlerSection }: any) => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handlerScroll = () => {
            //  setIsSticky(window.scrollY > 40);
            if (window.scrollY > 50) {
                setIsSticky(true);
            } else if (window.scrollY < 40) {
                setIsSticky(false);
            }
        }
        window.addEventListener("scroll", handlerScroll);

        return () => {
            window.removeEventListener("scroll", handlerScroll);
        };
    }, []);

    return (
        <header
            className={`top-0 left-0 w-full z-50 h-16 border-b backdrop-blur bg-white/60 transition-all
  ${isSticky ? 'fixed shadow-md' : 'sticky shadow-sm'}`}
        >
            <div className="layout flex justify-between items-center h-16 px-4">
                <h1 className="text-2xl font-bold">BEK</h1>
                <nav className="space-x-4">
                    <button onClick={() => handlerSection("about")} >About</button>
                    <button onClick={() => handlerSection("project")}>Projects</button>
                    <button onClick={() => handlerSection("skill")}>Skills</button>
                    <button onClick={() => handlerSection("contact")}>Contact</button>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
