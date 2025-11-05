import { useMemo, useState } from 'react';
import Hero from './components/Hero';
import FactsCarousel from './components/FactsCarousel';
import TimelineMap from './components/TimelineMap';
import Sections from './components/Sections';

export default function App() {
  const [theme, setTheme] = useState('light');

  const onToggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  const searchIndex = useMemo(
    () => ({
      history: ['history', 'timeline', 'kingdom', 'republic', 'empire', 'augustus', 'caesar', 'nero', 'constantine'],
      society: ['society', 'daily', 'family', 'clothing', 'food', 'games', 'baths', 'patricians', 'plebeians'],
      military: ['military', 'army', 'legion', 'centurion', 'punic', 'gaul', 'actium', 'tactics'],
      architecture: ['architecture', 'engineering', 'aqueducts', 'roads', 'arches', 'domes', 'colosseum', 'pantheon'],
      culture: ['culture', 'religion', 'gods', 'jupiter', 'mars', 'venus', 'neptune', 'virgil', 'cicero', 'ovid'],
      legacy: ['legacy', 'law', 'language', 'latin', 'republic', 'government', 'influence'],
    }),
    []
  );

  const handleSearch = (q) => {
    const query = q.toLowerCase();
    const match = Object.entries(searchIndex).find(([, keywords]) => keywords.some((k) => query.includes(k)));
    if (match) {
      const id = match[0];
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-white text-[#2b1d1a] dark:bg-[#0f0d0a] dark:text-yellow-100">
        <Hero onToggleTheme={onToggleTheme} theme={theme} onSearch={handleSearch} />
        <FactsCarousel />
        <TimelineMap />
        <main className="relative">
          <div id="anchor-sections" />
          <Sections />
        </main>
        <footer className="mt-16 border-t border-amber-200/60 dark:border-yellow-900/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm flex flex-col sm:flex-row items-center justify-between">
            <p>
              © {new Date().getFullYear()} Glory of Rome — Crafted for students and history enthusiasts.
            </p>
            <p className="opacity-80">Marble white · Imperial red · Gold · Bronze</p>
          </div>
        </footer>
      </div>
      {/* Anchor targets */}
      <div id="architecture" className="hidden" />
      <div id="military" className="hidden" />
      <div id="culture" className="hidden" />
      <div id="legacy" className="hidden" />
      <div id="society" className="hidden" />
    </div>
  );
}
