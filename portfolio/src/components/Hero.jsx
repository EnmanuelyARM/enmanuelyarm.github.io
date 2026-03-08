// src/components/Hero.jsx

export default function Hero() {
    return (
        <section className="text-center">
            <h1 className="text-5xl md:text-6xl m-0 tracking-tighter uppercase font-bold text-white">
                Soy <span className="text-[#1DBECD]">Enmanuely Rondon</span>
            </h1>
            <p className="text-[#8b949e] text-lg font-bold mt-2 tracking-widest uppercase">
                Desarrollador Web
            </p>

            <div className="mt-8 flex gap-4 justify-center">
                <button className="px-6 py-2 border border-[#1DBECD] text-[#1DBECD] hover:bg-[#1DBECD] hover:text-white transition-all rounded shadow-[0_0_15px_rgba(0,209,255,0.2)]">
                    Ver Proyectos
                </button>
                <button className="px-6 py-2 bg-[#0F4269] text-white hover:bg-[#1DBECD] hover:text-white transition-all rounded">
                    Sobre mí
                </button>
            </div>
        </section>
    )
}

