import { useEffect, useState } from "react";

const Navbar = ({ handlerSection }: any) => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handlerScroll = () => {
          //  setIsSticky(window.scrollY > 40);
            if(window.scrollY > 50){
                setIsSticky(true);
            }else if(window.scrollY < 40){
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
        className={`w-full bg-white/40 shadow-md z-50 ${isSticky ? 'fixed' : 'sticky'}`}>
            <div className="flex justify-between items-center w-full mx-auto py-4 px-4 md:px-8">
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
