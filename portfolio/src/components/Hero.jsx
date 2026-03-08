// src/components/Hero.jsx

export default function Hero() {
    return (
        <section className="text-center align-items-left">
            <h1 className="text-5xl md:text-6xl m-0 tracking-tighter uppercase font-bold text-monolith-primary">
                Hola
            </h1>
            <h1 className="text-5xl md:text-6xl m-0 tracking-tighter uppercase font-bold text-monolith-primary">
                Soy <span className="text-monolith-accent">Enmanueli Rondon</span>
            </h1>
            <p className="text-monolith-txt text-lg font-bold mt-2 tracking-widest uppercase">
                Ingeniero de Software | Desarrollador Web
            </p>

            <div className="mt-8 flex gap-4 justify-center">
                <button className="px-6 py-2 border border-monolith-accent text-monolith-accent hover:bg-monolith-accent hover:text-monolith-txt transition-all rounded shadow-[0_0_15px_rgba(0,209,255,0.2)]">
                    Ver Proyectos
                </button>
                <button className="px-6 py-2 bg-monolith-accent text-monolith-txt hover:bg-monolith-secondary hover:text-monolith-primary transition-all rounded">
                    Sobre mí
                </button>
            </div>
        </section>
    )
}

