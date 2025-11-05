import { useState } from 'react';
import { Map, Book } from 'lucide-react';

const ERAS = {
  Kingdom: {
    range: '753–509 BC',
    notes:
      'Foundation myths of Romulus and Remus; seven kings; early institutions and religious traditions take root.',
    highlights: ['Romulus', 'Numa Pompilius', 'Tarquinius Superbus'],
    map: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Ancient_Rome_territories.png',
  },
  Republic: {
    range: '509–27 BC',
    notes:
      'Senate and assemblies; expansion across the Mediterranean; civil wars ending with the rise of Augustus.',
    highlights: ['Hannibal (foe)', 'Julius Caesar', 'Cicero', 'Spartacus'],
    map: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Roman_Republic_44_BC.png',
  },
  Empire: {
    range: '27 BC–476 AD (West)',
    notes:
      'From Augustus to the fall of the West; Pax Romana, crises, and Christianization under Constantine and beyond.',
    highlights: ['Augustus', 'Nero', 'Trajan', 'Hadrian', 'Constantine'],
    map: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Roman_Empire_Trajan_117AD.png',
  },
};

export default function TimelineMap() {
  const [era, setEra] = useState('Empire');

  return (
    <section id="history" className="relative py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#7b1113] dark:text-yellow-300">History & Timeline</h2>
            <p className="mt-2 text-slate-700 dark:text-yellow-100/80 max-w-2xl">
              Explore Rome through its key eras—the Kingdom, the Republic, and the Empire—and see how borders changed over time.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-gradient-to-r from-amber-100 to-yellow-50 dark:from-[#2a241d] dark:to-[#1b170f] border border-amber-200/60 dark:border-yellow-900/40 rounded-full p-1">
            {Object.keys(ERAS).map((k) => (
              <button
                key={k}
                onClick={() => setEra(k)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                  era === k
                    ? 'bg-[#7b1113] text-yellow-100 dark:bg-yellow-300 dark:text-[#2b1d1a]'
                    : 'text-[#7b1113]/80 dark:text-yellow-200 hover:bg-amber-200/50 dark:hover:bg-[#3a2f23]'
                }`}
              >
                {k}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-[#17130e] rounded-lg shadow border border-amber-200/60 dark:border-yellow-900/40 p-6">
            <div className="flex items-center gap-2 text-[#7b1113] dark:text-yellow-300">
              <Book size={18} />
              <h3 className="font-semibold">{era} Period</h3>
            </div>
            <p className="mt-1 text-sm text-slate-600 dark:text-yellow-100/80">{ERAS[era].range}</p>
            <p className="mt-4 text-slate-700 dark:text-yellow-100/90">{ERAS[era].notes}</p>
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-[#7b1113] dark:text-yellow-300">Highlights</h4>
              <ul className="mt-2 list-disc list-inside space-y-1 text-slate-700 dark:text-yellow-100/90">
                {ERAS[era].highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-[#17130e] rounded-lg shadow border border-amber-200/60 dark:border-yellow-900/40 p-4">
            <div className="flex items-center gap-2 text-[#7b1113] dark:text-yellow-300 mb-2">
              <Map size={18} />
              <h3 className="font-semibold">Map of the {era}</h3>
            </div>
            <div className="aspect-video w-full overflow-hidden rounded-md ring-1 ring-amber-200/60 dark:ring-yellow-900/40">
              <img src={ERAS[era].map} alt={`Map of the Roman ${era}`} className="w-full h-full object-cover" />
            </div>
            <p className="mt-2 text-xs text-slate-500 dark:text-yellow-200/70">Maps courtesy of Wikimedia Commons (public domain where applicable).</p>
          </div>
        </div>
      </div>
    </section>
  );
}
