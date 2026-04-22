"use client";

import { SectionReveal } from "@/app/components/landing/section-reveal";

const trails = [
  "Formação Engenheiros de IA",
  "Trilha Aprendendo Python",
  "Formação Analista de Dados",
  "Trilha Data Science e Machine Learning",
  "Formação AI Designer",
  "Trilha Automações com n8n",
  "Trilha Dashboards Interativos",
  "Trilha Python para Web",
  "Trilha Visão Computacional",
  "Trilha Engenharia de Dados",
  "Trilha Python Office",
] as const;

export function TrailsSection() {
  return (
    <section
      className='border-t border-white/5 bg-[radial-gradient(circle_at_100%_0%,rgba(126,231,231,0.06),transparent_42%),radial-gradient(circle_at_0%_100%,rgba(255,92,53,0.05),transparent_40%)] bg-zinc-950 px-4 py-20 sm:py-24'
      aria-labelledby='trails-heading'
    >
      <SectionReveal className='mx-auto max-w-7xl'>
        <div className='grid gap-12 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:gap-16 lg:items-start'>
          <div className='lg:sticky lg:top-28'>
            <p
              data-reveal-header
              className='text-xs font-medium uppercase tracking-[0.2em] text-zinc-500'
            >
              Metodologia
            </p>
            <h2
              id='trails-heading'
              data-reveal-header
              className='mt-3 max-w-[14ch] text-balance text-3xl font-semibold leading-[1.08] tracking-tighter text-white sm:text-4xl md:text-5xl'
            >
              Estudo objetivo baseado em trilhas
            </h2>
            <p
              data-reveal-header
              className='mt-5 max-w-[52ch] text-pretty text-base leading-relaxed text-zinc-400'
            >
              Cada trilha conecta teoria e prática para você saber exatamente o
              que estudar em seguida — do primeiro script ao deploy de modelos.
            </p>
          </div>

          <div className='flex flex-col gap-2.5 sm:flex-row sm:flex-wrap'>
            {trails.map((name, i) => (
              <span
                key={name}
                data-reveal-item
                className={[
                  "inline-flex max-w-[min(100%,20rem)] items-center rounded-full border border-white/10 bg-zinc-900/55 px-4 py-2 text-sm text-zinc-200 shadow-[0_16px_40px_-24px_rgba(4,7,17,0.9)] transition-colors hover:border-brand-orange/35 hover:text-white sm:max-w-none",
                  i % 2 === 0 ? "self-start sm:self-auto" : "self-end sm:self-auto",
                  i % 4 === 1 ? "lg:translate-x-4" : "",
                  i % 4 === 3 ? "lg:-translate-x-2" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
