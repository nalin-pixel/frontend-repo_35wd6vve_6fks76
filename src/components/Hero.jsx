import { useState } from 'react';
import { Search, Sun, Moon, Crown } from 'lucide-react';

const navItems = [
  { id: 'history', label: 'History' },
  { id: 'society', label: 'Society' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'military', label: 'Military' },
  { id: 'culture', label: 'Culture' },
  { id: 'legacy', label: 'Legacy' },
];

export default function Hero({ onToggleTheme, theme, onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) onSearch(query.trim());
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIzNTg2NzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')",
          filter: 'grayscale(10%)',
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" aria-hidden />

      <nav className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-yellow-500 to-amber-700 flex items-center justify-center ring-2 ring-yellow-300/60">
            <Crown className="text-white" size={22} />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-serif tracking-wide text-yellow-300 drop-shadow">Glory of Rome</h1>
            <p className="text-xs sm:text-sm text-yellow-100/90">An Interactive Journey Through Ancient Civilization</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollTo(n.id)}
              className="text-sm font-medium text-yellow-100/90 hover:text-yellow-300 transition-colors"
            >
              {n.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-yellow-100 hover:bg-white/20 transition"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </nav>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-24 text-center">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white leading-tight">
          From a city on the Tiber to an empire without equal
        </h2>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-yellow-100/95 max-w-3xl mx-auto">
          Discover how Rome rose from humble beginnings to shape law, language, architecture, and culture across three continents.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 mx-auto max-w-xl flex items-center gap-2 bg-white/10 border border-white/20 rounded-full p-2 backdrop-blur">
          <Search className="text-yellow-100 ml-2" size={18} />
          <input
            type="search"
            placeholder="Search topics, people, places (e.g., Augustus, aqueducts, Gaul)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent outline-none placeholder-yellow-100/70 text-yellow-50 px-2 text-sm"
          />
          <button type="submit" className="px-4 py-2 rounded-full bg-gradient-to-r from-[#7b1113] to-rose-700 text-yellow-100 text-sm font-semibold hover:opacity-95">
            Search
          </button>
        </form>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-white dark:to-[#0f0d0a]" aria-hidden />
    </header>
  );
}
