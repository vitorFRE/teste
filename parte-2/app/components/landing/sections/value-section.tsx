"use client";

import {
  BookBookmark,
  Certificate,
  ChatsCircle,
  CodeBlock,
  Folders,
  UsersThree,
} from "@phosphor-icons/react";
import { SectionReveal } from "@/app/components/landing/section-reveal";

const stats = [
  {
    value: "+20 mil",
    label: "alunos",
    hint: "Comunidade ativa aprendendo na prática.",
  },
  {
    value: "275h",
    label: "de aulas",
    hint: "Conteúdo gravado, objetivo e atualizado.",
  },
  {
    value: "61",
    label: "cursos",
    hint: "Organizados em trilhas e formações.",
  },
  {
    value: "79",
    label: "projetos",
    hint: "Construídos passo a passo com os especialistas.",
  },
] as const;

const platformFeatures = [
  {
    title: "Projetos exclusivos",
    description: "Aulas guiadas para você aplicar Python, dados e IA em cenários reais.",
    icon: CodeBlock,
  },
  {
    title: "Cursos organizados por trilhas e formações",
    description:
      "Trilhas claras do básico ao avançado, sem perder tempo escolhendo o próximo passo.",
    icon: Folders,
  },
  {
    title: "E-books autorais",
    description:
      "Material escrito para aprofundar o que você vê nas aulas, no seu ritmo.",
    icon: BookBookmark,
  },
  {
    title: "Certificado de conclusão",
    description: "Certificados exclusivos para registrar sua evolução no mercado.",
    icon: Certificate,
  },
  {
    title: "Comunidade de alunos",
    description: "Troca com outros estudantes e suporte direto dos professores.",
    icon: ChatsCircle,
  },
] as const;

export function ValueSection() {
  return (
    <section
      id='conteudo'
      className='scroll-mt-24 border-t border-white/5 bg-zinc-950 px-4 py-20 sm:py-24'
      aria-labelledby='value-heading'
    >
      <SectionReveal className='mx-auto max-w-7xl'>
        <div className='grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16'>
          <div>
            <p
              data-reveal-header
              className='text-xs font-medium uppercase tracking-[0.2em] text-zinc-500'
            >
              Plataforma
            </p>
            <h2
              id='value-heading'
              data-reveal-header
              className='mt-3 max-w-md text-balance text-3xl font-semibold leading-[1.08] tracking-tighter text-white sm:text-4xl md:text-5xl'
            >
              O que você encontra na Asimov?
            </h2>
            <p
              data-reveal-header
              className='mt-5 max-w-[52ch] text-pretty text-base leading-relaxed text-zinc-400'
            >
              Números que mostram a profundidade do ecossistema e tudo o que você usa no
              dia a dia para aprender com método.
            </p>
          </div>

          <div className='grid gap-3 sm:grid-cols-2'>
            {stats.map((s) => (
              <article
                key={s.label}
                data-reveal-item
                className='group rounded-2xl border border-white/10 bg-zinc-900/50 p-5 shadow-[0_24px_60px_-28px_rgba(4,7,17,0.75)] transition-colors hover:border-white/15 hover:bg-zinc-900/70'
              >
                <div className='flex items-baseline gap-1'>
                  <span className='text-3xl font-semibold tracking-tight text-white sm:text-4xl'>
                    {s.value}
                  </span>
                  <span className='text-sm font-medium text-zinc-400'>{s.label}</span>
                </div>
                <p className='mt-3 text-sm leading-relaxed text-zinc-500'>{s.hint}</p>
              </article>
            ))}
          </div>
        </div>

        <div className='mt-16 border-t border-white/5 pt-16'>
          <div className='flex flex-wrap items-end justify-between gap-6'>
            <div>
              <p
                data-reveal-header
                className='text-xs font-medium uppercase tracking-[0.2em] text-zinc-500'
              >
                Experiência completa
              </p>
              <h3
                data-reveal-header
                className='mt-2 max-w-xl text-2xl font-semibold tracking-tighter text-white sm:text-3xl'
              >
                Plataforma de ensino
              </h3>
              <p
                data-reveal-header
                className='mt-3 max-w-[60ch] text-base leading-relaxed text-zinc-400'
              >
                Tudo integrado para você estudar com clareza: conteúdo, projetos,
                materiais complementares e suporte.
              </p>
            </div>
            <div
              data-reveal-item
              className='hidden items-center gap-2 rounded-xl border border-white/10 bg-zinc-900/60 px-4 py-2 text-sm text-zinc-300 shadow-inner sm:flex'
            >
              <UsersThree className='h-5 w-5 text-brand-cyan' aria-hidden />
              <span>Junte-se a milhares de alunos</span>
            </div>
          </div>

          <ul className='mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {platformFeatures.map(({ title, description, icon: Icon }) => (
              <li
                key={title}
                data-reveal-item
                className='flex gap-4 rounded-2xl border border-white/10 bg-zinc-900/40 p-5 transition-colors hover:border-brand-cyan/25 hover:bg-zinc-900/60'
              >
                <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-zinc-950/80 text-brand-cyan'>
                  <Icon className='h-5 w-5' weight='duotone' aria-hidden />
                </div>
                <div>
                  <p className='font-medium text-white'>{title}</p>
                  <p className='mt-2 text-sm leading-relaxed text-zinc-500'>
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </SectionReveal>
    </section>
  );
}
