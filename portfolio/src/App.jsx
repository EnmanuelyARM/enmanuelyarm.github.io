import { useState, useEffect } from 'react';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import PhotoFrame from './components/PhotoFrame';

function App() {
  const [layoutState, setLayoutState] = useState('centered');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLayoutState('split');
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const isSplit = layoutState === 'split';

  return (
    <main className="min-h-screen bg-monolith-bg text-monolith-txt flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden selection:bg-monolith-accent selection:text-black">
      <Navbar />

      <div className={`flex flex-col md:flex-row items-center w-full max-w-7xl gap-12 transition-all duration-1000 ease-in-out ${isSplit ? 'md:justify-between' : 'md:justify-center'}`}>
        <div className={`transition-all duration-1000 ease-in-out ${isSplit ? 'md:w-1/2 md:translate-x-0' : 'md:w-full md:max-w-2xl md:translate-x-0'}`}>
          <Hero />
        </div>

        <div className={`flex justify-center transition-all duration-1000 ease-in-out ${isSplit ? 'md:w-1/2 opacity-100 scale-100' : 'opacity-0 scale-50 w-0 md:w-0 md:max-w-0 overflow-hidden'}`}>
          <PhotoFrame />
        </div>
      </div>

    </main>
  );
}

export default App;