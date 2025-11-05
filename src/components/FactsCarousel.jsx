import { useEffect, useState } from 'react';

const FACTS = [
  "Romans used concrete 2,000 years ago that's still standing today.",
  'Roman roads stretched over 400,000 km across the empire.',
  'Aqueducts brought fresh water to cities using precise gradients.',
  'Latin is the root of the Romance languages like Italian, French, and Spanish.',
  'The Roman Republic inspired modern ideas of checks and balances.',
  'The Colosseum could host around 50,000 spectators for games.',
];

export default function FactsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % FACTS.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative py-10 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIzNTg2NzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center">
      <div className="absolute inset-0 bg-white/80 dark:bg-[#0f0d0a]/80" aria-hidden />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-xl font-serif text-[#7b1113] dark:text-yellow-300">Did You Know?</h3>
        <p className="mt-4 text-2xl sm:text-3xl font-semibold text-[#2b1d1a] dark:text-yellow-100 transition-all">
          {FACTS[index]}
        </p>
        <div className="mt-6 flex justify-center gap-2">
          {FACTS.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full ${i === index ? 'bg-[#7b1113] dark:bg-yellow-300' : 'bg-[#7b1113]/30 dark:bg-yellow-200/30'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
