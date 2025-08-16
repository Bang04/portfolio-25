export const Contact = ({menuRef}:any) => {
    return (
        <div ref={menuRef} >
            <section className="min-h-100 bg-[#8490c8]">
                <h2>Contact</h2>
                <p>Email: your.email@example.com</p>
                <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile">yourprofile</a></p>
                <p>GitHub: <a href="https://github.com/yourgithub">yourgithub</a></p>
            </section>
        </div>
    );
};