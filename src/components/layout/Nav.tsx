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
        <div
            className={`fixed top-0 left-0 w-full z-50 backdrop-filter backdrop-blur bg-white/60 transition-all
  ${isSticky ? 'shadow-md' : 'shadow-sm'}`}
        >
            <div className="max-w-screen-lg mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <h1 className="text-2xl font-bold tracking-tight">BEK</h1>

                {/* Navigation */}
                <nav className="flex items-center gap-6 text-sm font-medium">
                    <button onClick={() => handlerSection("about")} className="hover:text-blue-600 transition">
                        About
                    </button>
                    <button onClick={() => handlerSection("project")} className="hover:text-blue-600 transition">
                        Projects
                    </button>
                    <button onClick={() => handlerSection("skill")} className="hover:text-blue-600 transition">
                        Skills
                    </button>
                    <button onClick={() => handlerSection("contact")} className="hover:text-blue-600 transition">
                        Contact
                    </button>
                </nav>
            </div>
        </div>

    );
};

export default Navbar;
