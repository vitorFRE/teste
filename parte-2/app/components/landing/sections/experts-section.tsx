"use client";

import Image from "next/image";
import { SectionReveal } from "@/app/components/landing/section-reveal";

const experts = [
  {
    name: "Rodrigo Tadewald",
    bio: "Engenheiro Químico formado pela UFRGS, aprendeu Python em 2014 para analisar dados no mercado financeiro. Se especializou em Machine Learning, Computação em nuvem e probabilidade e estatística. É sócio fundador da Asimov Trading e da Asimov Academy.",
    image:
      "https://asimov.academy/wp-content/uploads/2025/02/image.png.webp",
    alt: "Rodrigo Tadewald",
  },
  {
    name: "Adriano Soares",
    bio: "Engenheiro Químico formado pela UFRGS, especializado em estratégias quantitativas no mercado financeiro. Programa em Python desde 2015 e é cofundador da Asimov Academy.",
    image: "https://asimov.academy/wp-content/uploads/2025/02/img-2.png.webp",
    alt: "Adriano Soares",
  },
  {
    name: "Juliano Faccioni",
    bio: "Doutor em Biologia Celular e Molecular pela UFRGS. Ensina Python, análise de dados e pensamento analítico desde 2018. Forte defensor do ensino de programação para todos.",
    image:
      "https://asimov.academy/wp-content/uploads/2025/02/image-2.png.webp",
    alt: "Juliano Faccioni",
  },
  {
    name: "Samuel Sublate",
    bio: "Programador desde 2019, especializado em automações. Atuou em diferentes segmentos do mercado e hoje é fundador de uma empresa focada em automações contábeis.",
    image:
      "https://asimov.academy/wp-content/uploads/2025/08/Captura-de-Tela-2025-08-21-as-13.30.07-e1755793875843.png.webp",
    alt: "Samuel Sublate",
  },
] as const;

export function ExpertsSection() {
  return (
    <section
      className='border-t border-white/5 bg-zinc-950 px-4 py-20 sm:py-24'
      aria-labelledby='experts-heading'
    >
      <SectionReveal className='mx-auto max-w-7xl'>
        <p
          data-reveal-header
          className='text-xs font-medium uppercase tracking-[0.2em] text-zinc-500'
        >
          Time
        </p>
        <h2
          id='experts-heading'
          data-reveal-header
          className='mt-3 max-w-3xl text-balance text-3xl font-semibold leading-[1.08] tracking-tighter text-white sm:text-4xl md:text-5xl'
        >
          Conheça os especialistas que vão guiar seu aprendizado
        </h2>
        <p
          data-reveal-header
          className='mt-4 max-w-[62ch] text-base leading-relaxed text-zinc-400'
        >
          Profissionais que unem experiência de mercado e didática para você
          evoluir com segurança.
        </p>

        <div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {experts.map((person) => (
            <article
              key={person.name}
              data-reveal-item
              className='flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/45 shadow-[0_24px_60px_-32px_rgba(4,7,17,0.88)] transition-colors hover:border-white/16'
            >
              <div className='relative aspect-384/271 w-full bg-zinc-900'>
                <Image
                  src={person.image}
                  alt={person.alt}
                  fill
                  className='object-cover object-top'
                  sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
                />
              </div>
              <div className='flex flex-1 flex-col p-5'>
                <h3 className='text-base font-semibold text-white'>
                  {person.name}
                </h3>
                <p className='mt-3 text-sm leading-relaxed text-zinc-500'>
                  {person.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
