"use client";

import Link from "next/link";
import { Check } from "@phosphor-icons/react";
import { SectionReveal } from "@/app/components/landing/section-reveal";

const annualFeatures = [
  "Todos os Cursos, Formações e Trilhas",
  "Acesso por 1 ano",
  "Todos os projetos da plataforma",
  "Todos nossos e-books autorais",
  "Certificados exclusivos",
  "Suporte com professores",
  "Acesso à Comunidade",
] as const;

const lifetimeFeatures = [
  "Todos os Cursos, Formações e Trilhas",
  "Acesso total para sempre",
  "Todos os projetos da plataforma",
  "Todos nossos e-books autorais",
  "Certificados exclusivos",
  "Suporte com professores",
  "Comunidade de Alunos",
] as const;

export function PricingSection() {
  return (
    <section
      id='matricula'
      className='scroll-mt-24 border-t border-white/5 bg-zinc-950 px-4 py-20 sm:py-24'
      aria-labelledby='pricing-heading'
    >
      <SectionReveal className='mx-auto max-w-7xl'>
        <h2
          id='pricing-heading'
          data-reveal-header
          className='max-w-2xl text-balance text-3xl font-semibold leading-[1.08] tracking-tighter text-white sm:text-4xl md:text-5xl'
        >
          Escolha o melhor plano para você
        </h2>
        <p
          data-reveal-header
          className='mt-4 max-w-[60ch] text-base leading-relaxed text-zinc-400'
        >
          Valores referentes à página oficial em março de 2026; confirme
          condições e formas de pagamento no checkout.
        </p>

        <div className='mt-12 grid gap-6 lg:grid-cols-2'>
          <article
            data-reveal-item
            className='relative flex flex-col rounded-3xl border border-brand-orange/35 bg-zinc-900/60 p-6 shadow-[0_28px_70px_-32px_rgba(255,92,53,0.35)] sm:p-8'
          >
            <span className='absolute right-6 top-6 rounded-full border border-brand-orange/40 bg-brand-orange/10 px-3 py-1 text-xs font-medium text-brand-orange'>
              Mais popular
            </span>
            <h3 className='text-lg font-semibold text-white'>
              Assinatura Anual
            </h3>
            <p className='mt-2 text-sm text-zinc-500'>
              Renovação automática; cancele com o time se não quiser renovar.
            </p>
            <p className='mt-8 text-3xl font-semibold tracking-tight text-white'>
              12x R$ 179,00
            </p>
            <p className='mt-1 text-sm text-zinc-400'>
              ou R$ 1.793,55 à vista com desconto
            </p>
            <ul className='mt-8 flex flex-1 flex-col gap-3 text-sm text-zinc-300'>
              {annualFeatures.map((f) => (
                <li key={f} className='flex gap-2'>
                  <Check
                    className='mt-0.5 h-4 w-4 shrink-0 text-brand-cyan'
                    weight='bold'
                    aria-hidden
                  />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href='https://asimov.academy/'
              className='mt-8 inline-flex h-11 items-center justify-center rounded-xl bg-brand-orange px-4 text-sm font-medium text-zinc-950 transition-opacity hover:opacity-90'
            >
              Inscreva-se
            </Link>
          </article>

          <article
            data-reveal-item
            className='flex flex-col rounded-3xl border border-white/10 bg-zinc-900/45 p-6 sm:p-8'
          >
            <h3 className='text-lg font-semibold text-white'>
              Acesso Vitalício
            </h3>
            <p className='mt-2 text-sm text-zinc-500'>
              Pagamento único; sem assinatura recorrente.
            </p>
            <p className='mt-8 text-3xl font-semibold tracking-tight text-white'>
              12x R$ 629,89
            </p>
            <p className='mt-1 text-sm text-zinc-400'>
              ou R$ 6.277,40 à vista com desconto
            </p>
            <ul className='mt-8 flex flex-1 flex-col gap-3 text-sm text-zinc-300'>
              {lifetimeFeatures.map((f) => (
                <li key={f} className='flex gap-2'>
                  <Check
                    className='mt-0.5 h-4 w-4 shrink-0 text-brand-cyan'
                    weight='bold'
                    aria-hidden
                  />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href='https://asimov.academy/'
              className='mt-8 inline-flex h-11 items-center justify-center rounded-xl border border-white/15 bg-zinc-950/60 px-4 text-sm font-medium text-white transition-colors hover:border-white/25'
            >
              Inscreva-se
            </Link>
          </article>
        </div>
      </SectionReveal>
    </section>
  );
}
