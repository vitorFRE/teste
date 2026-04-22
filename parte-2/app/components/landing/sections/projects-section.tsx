"use client";

import { SectionReveal } from "@/app/components/landing/section-reveal";

const projects = [
  {
    title: "Agente Analisador de Currículos com IA",
    description:
      "Pipeline que lê PDFs, extrai dados e classifica candidatos com modelo de linguagem.",
  },
  {
    title: "AI Nutricionista – inteligência artificial no Telegram",
    description:
      "Bot conversacional que monta planos alimentares e responde no app em tempo real.",
  },
  {
    title: "Personal Trainer com Inteligência Artificial",
    description:
      "Assistente que gera treinos e acompanha evolução com base nas respostas do usuário.",
  },
  {
    title: "GasPrices – Dashboard de Análise da gasolina no Brasil",
    description:
      "Painel interativo com séries históricas e comparativos regionais de preços.",
  },
  {
    title: "Análise de crédito com Machine Learning",
    description:
      "Modelo supervisionado para scoring e explicabilidade dos fatores de risco.",
  },
  {
    title: "Dashboard de análise imobiliária",
    description:
      "Visualização de oferta, preço m² e indicadores para tomada de decisão.",
  },
  {
    title: "Otimização de rotas para logística",
    description:
      "Algoritmos que reduzem distância e tempo em cenários com múltiplas paradas.",
  },
  {
    title: "Gerando Relatório Automático Via E-mail",
    description:
      "Rotina que consolida dados, gera PDF ou HTML e dispara para a lista configurada.",
  },
] as const;

export function ProjectsSection() {
  return (
    <section
      className='border-t border-white/5 bg-zinc-950 px-4 py-20 sm:py-24'
      aria-labelledby='projects-heading'
    >
      <SectionReveal className='mx-auto max-w-7xl'>
        <div className='flex flex-col gap-6 md:flex-row md:items-end md:justify-between'>
          <div>
            <p
              data-reveal-header
              className='text-xs font-medium uppercase tracking-[0.2em] text-zinc-500'
            >
              Portfólio guiado
            </p>
            <h2
              id='projects-heading'
              data-reveal-header
              className='mt-3 max-w-xl text-balance text-3xl font-semibold leading-[1.08] tracking-tighter text-white sm:text-4xl md:text-5xl'
            >
              Projetos construídos passo a passo
            </h2>
            <p
              data-reveal-header
              className='mt-4 max-w-[60ch] text-base leading-relaxed text-zinc-400'
            >
              Da ideia ao código: exemplos reais que você replica, adapta e leva
              para o portfólio.
            </p>
          </div>
          <p
            data-reveal-item
            className='max-w-xs text-sm leading-relaxed text-zinc-500'
          >
            Cada projeto combina fundamentos sólidos com ferramentas que o
            mercado já usa em produção.
          </p>
        </div>

        <ul className='mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4'>
          {projects.map((project) => (
            <li key={project.title} data-reveal-item>
              <div className='flex h-full flex-col rounded-2xl border border-white/10 bg-zinc-900/45 p-4 shadow-[0_20px_50px_-28px_rgba(4,7,17,0.85)] transition-colors hover:border-white/18 hover:bg-zinc-900/65'>
                <p className='text-sm font-medium leading-snug text-zinc-100'>
                  {project.title}
                </p>
                <p className='mt-3 text-xs leading-relaxed text-zinc-500'>
                  {project.description}
                </p>
                <p className='mt-4 text-xs font-medium uppercase tracking-wider text-zinc-600'>
                  Projeto guiado na plataforma
                </p>
              </div>
            </li>
          ))}
        </ul>
      </SectionReveal>
    </section>
  );
}
