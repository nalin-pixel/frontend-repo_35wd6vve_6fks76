import { useState } from 'react';
import { Crown, Shield, Book } from 'lucide-react';

function Section({ id, title, accent, children, image }) {
  return (
    <section id={id} className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-serif" style={{ color: accent }}>{title}</h2>
            <div className="mt-4 prose prose-slate dark:prose-invert max-w-none">
              {children}
            </div>
          </div>
          {image && (
            <div className="relative">
              <img src={image} alt="Section visual" className="w-full h-full object-cover rounded-lg shadow-lg ring-1 ring-amber-200/60 dark:ring-yellow-900/40" />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-transparent to-amber-100/10 pointer-events-none" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function Sections() {
  return (
    <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-amber-50 via-white to-amber-100/40 dark:from-[#1b1712] dark:via-[#12100c] dark:to-[#0f0d0a]">
      <Section
        id="society"
        title="Society & Daily Life"
        accent="#7b1113"
        image="https://images.unsplash.com/photo-1608452809375-9da22f1a8c78?q=80&w=2069&auto=format&fit=crop"
      >
        <p>
          Roman society was layered: <strong>patricians</strong> (aristocrats), <strong>plebeians</strong> (commoners), and
          <strong> enslaved people</strong>. Family life centered on the <em>paterfamilias</em>, with strong traditions of
          ancestor worship and household gods.
        </p>
        <ul>
          <li><strong>Clothing:</strong> Togas for citizens, tunics for everyday wear; vibrant dyes signaled status.</li>
          <li><strong>Food:</strong> Bread, olives, wine, garum (fish sauce), and markets buzzing with Mediterranean goods.</li>
          <li><strong>Leisure:</strong> Gladiatorial games, theatre, chariot races at the Circus Maximus, and public baths.</li>
        </ul>
        <div className="mt-6 grid sm:grid-cols-3 gap-4 text-sm">
          <div className="p-4 rounded-lg bg-white dark:bg-[#17130e] border border-amber-200/60 dark:border-yellow-900/40">
            <Shield className="text-[#7b1113] dark:text-yellow-300" />
            <p className="mt-2">Citizenship granted legal protections and responsibilities.</p>
          </div>
          <div className="p-4 rounded-lg bg-white dark:bg-[#17130e] border border-amber-200/60 dark:border-yellow-900/40">
            <Book className="text-[#7b1113] dark:text-yellow-300" />
            <p className="mt-2">Education emphasized rhetoric, law, and Greek literature.</p>
          </div>
          <div className="p-4 rounded-lg bg-white dark:bg-[#17130e] border border-amber-200/60 dark:border-yellow-900/40">
            <Crown className="text-[#7b1113] dark:text-yellow-300" />
            <p className="mt-2">Patron–client relationships bound society together.</p>
          </div>
        </div>
      </Section>

      <Section
        id="military"
        title="Military & Conquest"
        accent="#7b1113"
        image="https://images.unsplash.com/photo-1582531829763-7e119f83a2b0?q=80&w=1932&auto=format&fit=crop"
      >
        <p>
          The Roman army was organized into <strong>legions</strong>, each with cohorts and centuries led by
          <strong> centurions</strong>. Discipline, engineering, and logistics underpinned their success.
        </p>
        <ul>
          <li><strong>Tactics:</strong> Testudo (tortoise) formation, flexible manipular lines, fortified camps.</li>
          <li><strong>Campaigns:</strong> The Punic Wars against Carthage, Caesar’s conquest of Gaul, and the Battle of Actium.</li>
          <li><strong>Equipment:</strong> Gladius, pilum, scutum, and lorica segmentata armor.</li>
        </ul>
      </Section>

      <Section
        id="architecture"
        title="Architecture & Engineering"
        accent="#7b1113"
        image="https://images.unsplash.com/photo-1546530967-21531b891dd4?q=80&w=2071&auto=format&fit=crop"
      >
        <p>
          Roman builders mastered <strong>arches</strong>, <strong>concrete</strong>, and <strong>domes</strong> to create
          aqueducts, roads, baths, and amphitheaters. Their innovations inspired countless modern landmarks.
        </p>
        <div className="mt-4 grid sm:grid-cols-2 gap-4 text-sm">
          <div className="p-4 rounded-lg bg-white dark:bg-[#17130e] border border-amber-200/60 dark:border-yellow-900/40">
            <h4 className="font-semibold" style={{ color: '#7b1113' }}>Aqueducts vs. Modern Waterworks</h4>
            <p>Roman aqueducts used gravity-fed channels; modern systems adopt similar principles with new materials.</p>
          </div>
          <div className="p-4 rounded-lg bg-white dark:bg-[#17130e] border border-amber-200/60 dark:border-yellow-900/40">
            <h4 className="font-semibold" style={{ color: '#7b1113' }}>Arches & Domes</h4>
            <p>The arch distributes weight efficiently, enabling the vast span of the Pantheon dome.</p>
          </div>
        </div>
        <div className="mt-6 p-4 rounded-lg bg-amber-50 dark:bg-[#1a160f] border border-amber-200/60 dark:border-yellow-900/40 text-sm">
          <p>
            Colosseum cutaway: a complex network of corridors, lifts, and trapdoors moved gladiators, animals, and scenery to the arena floor.
          </p>
        </div>
      </Section>

      <Section
        id="culture"
        title="Culture & Religion"
        accent="#7b1113"
        image="https://images.unsplash.com/photo-1578926078644-8c7b0a0fe2a5?q=80&w=2070&auto=format&fit=crop"
      >
        <p>
          Rome’s pantheon featured Jupiter, Mars, Venus, and Neptune, among many others. Over time, Rome transitioned from polytheism to
          <strong> Christianity</strong>, profoundly reshaping art and institutions.
        </p>
        <ul>
          <li><strong>Arts:</strong> Frescoes, mosaics, sculpture blending Greek ideals with Roman realism.</li>
          <li><strong>Literature:</strong> Virgil’s <em>Aeneid</em>, Cicero’s orations, Ovid’s <em>Metamorphoses</em>.</li>
          <li><strong>Ritual:</strong> Household <em>lares</em> and public festivals bound communities.</li>
        </ul>
      </Section>

      <Section
        id="legacy"
        title="Legacy"
        accent="#7b1113"
        image="https://images.unsplash.com/photo-1578926078105-1be0309a1f1b?q=80&w=2070&auto=format&fit=crop"
      >
        <p>
          Rome’s influence endures in legal codes, republican government, architecture, and languages descended from Latin.
        </p>
        <blockquote className="mt-4 border-l-4 pl-4 italic border-amber-400 dark:border-yellow-600">
          "All roads lead to Rome"—a proverb capturing the empire’s reach and infrastructure.
        </blockquote>
        <p className="mt-4 text-sm">
          Further reading: The British Museum, The Met, and UNESCO resources on Roman sites.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-white dark:bg-[#17130e] border border-amber-200/60 dark:border-yellow-900/40">
            <h4 className="font-semibold mb-2" style={{ color: '#7b1113' }}>Interactive Quiz</h4>
            <Quiz />
          </div>
          <div className="p-4 rounded-lg bg-white dark:bg-[#17130e] border border-amber-200/60 dark:border-yellow-900/40">
            <h4 className="font-semibold mb-2" style={{ color: '#7b1113' }}>Glossary of Latin Terms</h4>
            <Glossary />
          </div>
        </div>
      </Section>
    </div>
  );
}

function Quiz() {
  const questions = [
    {
      q: 'Who was the first emperor of Rome?',
      options: ['Julius Caesar', 'Augustus', 'Nero', 'Romulus'],
      a: 'Augustus',
      explain: 'Octavian took the title Augustus in 27 BC, becoming the first emperor.',
    },
    {
      q: 'Which formation protected soldiers with overlapping shields?',
      options: ['Phalanx', 'Testudo', 'Wedge', 'Cohort Wheel'],
      a: 'Testudo',
      explain: 'The "tortoise" shield wall guarded against missiles.',
    },
  ];
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);

  const current = questions[step];

  const submit = () => {
    if (!selected) return;
    if (selected === current.a) setScore((s) => s + 1);
    setTimeout(() => {
      setSelected(null);
      setStep((s) => (s + 1 < questions.length ? s + 1 : s));
    }, 600);
  };

  return (
    <div>
      <p className="font-medium">{current.q}</p>
      <div className="mt-3 grid sm:grid-cols-2 gap-2">
        {current.options.map((opt) => {
          const isCorrect = selected && opt === current.a;
          const isWrong = selected && opt === selected && opt !== current.a;
          return (
            <button
              key={opt}
              onClick={() => setSelected(opt)}
              className={`text-left p-3 rounded border text-sm transition ${
                isCorrect
                  ? 'bg-green-100 border-green-300 text-green-800'
                  : isWrong
                  ? 'bg-rose-100 border-rose-300 text-rose-800'
                  : 'bg-amber-50/40 dark:bg-[#12100c] border-amber-200/60 dark:border-yellow-900/40 hover:bg-amber-100/60 dark:hover:bg-[#1a160f]'
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
      <div className="mt-3 flex items-center justify-between text-sm">
        <button onClick={submit} className="px-3 py-2 rounded bg-[#7b1113] text-yellow-100 font-semibold">
          Submit
        </button>
        <p>
          Score: {score}/{questions.length}
        </p>
      </div>
      {selected && (
        <p className="mt-2 text-xs text-slate-600 dark:text-yellow-100/80">{current.explain}</p>
      )}
    </div>
  );
}

function Glossary() {
  const terms = [
    { term: 'SPQR', def: 'Senatus Populusque Romanus — The Senate and People of Rome.' },
    { term: 'Legion', def: 'A large military unit of roughly 4,800 infantry plus auxiliaries.' },
    { term: 'Forum', def: 'The public square and marketplace; civic heart of a Roman city.' },
    { term: 'Pax Romana', def: 'A long period of relative peace and stability (27 BC–180 AD).' },
  ];

  return (
    <ul className="grid sm:grid-cols-2 gap-3">
      {terms.map((t) => (
        <li key={t.term} className="group relative p-3 rounded bg-amber-50/60 dark:bg-[#12100c] border border-amber-200/60 dark:border-yellow-900/40">
          <span className="font-semibold" style={{ color: '#7b1113' }}>{t.term}</span>
          <span className="ml-2 text-xs text-slate-600 dark:text-yellow-100/80">(hover)</span>
          <div className="pointer-events-none opacity-0 group-hover:opacity-100 transition absolute left-3 right-3 top-full mt-2 p-3 rounded bg-white dark:bg-[#17130e] text-sm shadow border border-amber-200/60 dark:border-yellow-900/40 z-10">
            {t.def}
          </div>
        </li>
      ))}
    </ul>
  );
}
