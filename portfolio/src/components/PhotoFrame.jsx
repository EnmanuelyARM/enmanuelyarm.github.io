// src/components/PhotoFrame.jsx

export default function PhotoFrame() {
    return (
        <div className="w-80 h-80 bg-monolith-secondary border-2 border-slate-800 rounded-2xl flex items-center justify-center relative shadow-[0_0_40px_rgba(251,191,36,0.1)]">
            <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-monolith-accent animate-pulse shadow-[0_0_15px_rgba(251,191,36,0.5)]"></div>
            <img src="./src/assets/profilePhoto.webp" alt="Enmanueli Rondon" className="w-full h-full object-cover rounded-xl" />
        </div>
    );
}