export default function Navbar() {
    return (
        <nav className="w-full flex justify-between items-center py-6 px-10 fixed top-0 left-0 z-50">
            <div className="text-monolith-accent font-bold tracking-tighter text-xl">
                EARM
            </div>
            <div className="flex items-center gap-8">
                <a href="#about" className="text-monolith-primary font-bold hover:text-monolith-accent transition-colors text-sm uppercase tracking-widest">
                    About
                </a>
                <a href="#projects" className="text-monolith-primary font-bold hover:text-monolith-accent transition-colors text-sm uppercase tracking-widest">
                    Projects
                </a>
                <a href="#contact" className="text-monolith-primary font-bold hover:text-monolith-accent transition-colors text-sm uppercase tracking-widest">
                    Contact
                </a>
                <a href="#contact" className="text-monolith-primary font-bold hover:text-monolith-accent transition-colors text-sm uppercase tracking-widest">
                    Business
                </a>
            </div>
        </nav>
    );
}