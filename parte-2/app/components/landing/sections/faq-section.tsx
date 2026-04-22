"use client";

import { CaretDown } from "@phosphor-icons/react";
import { useId, useState } from "react";
import { SectionReveal } from "@/app/components/landing/section-reveal";

const faqItems = [
  {
    q: "Não sei se os cursos são para mim!",
    a: "Os cursos da Asimov são destinados a todos aqueles que desejam: aprender a programar em Python, independentemente do nível de conhecimento prévio; criar sistemas variados, como dashboards interativos, aplicativos web e aplicações com IA; realizar análise e visualização de dados utilizando programação; automatizar tarefas e muito mais.",
  },
  {
    q: "Nunca programei em Python. Tem algum pré-requisito?",
    a: "Nossos cursos são projetados para alunos de todos os níveis, incluindo iniciantes completos. Tudo o que você precisa é de um computador e determinação. Nossas formações abrangentes e em constante atualização foram cuidadosamente elaboradas para orientar seu desenvolvimento profissional.",
  },
  {
    q: "Terei acesso total à plataforma?",
    a: "Depende do plano escolhido. No plano anual ou vitalício, você tem acesso a todas as formações, trilhas, cursos, projetos exclusivos, comunidade de alunos, suporte direto dos professores e certificados de conclusão. No plano de formação ou trilha específica, o acesso fica restrito ao conteúdo contratado.",
  },
  {
    q: "Como vejo a grade curricular e a carga horária de cada curso ou trilha?",
    a: "As informações de conteúdo e carga horária estão nas páginas de cursos e nas páginas de formações e trilhas da Asimov Academy.",
  },
  {
    q: "Qual o tempo de acesso à plataforma?",
    a: "O tempo de acesso depende do plano. Acesso anual: 1 ano. Acesso vitalício: para sempre.",
  },
  {
    q: "A renovação da Assinatura é automática?",
    a: "Sim, a renovação da assinatura é automática. Se não quiser renovar, fale com o time pelo suporte na plataforma ou no WhatsApp (51) 99625-3887. O acesso vitalício não é assinatura — é pagamento único.",
  },
  {
    q: "Como funciona a garantia de 7 dias e reembolso?",
    a: "Pelo art. 49 do Código de Defesa do Consumidor, você pode desistir em até 7 dias corridos. Dentro do prazo, solicite pelo WhatsApp e receba 100% de volta. Em renovações, a garantia não se aplica.",
  },
  {
    q: "Como posso pagar minha assinatura?",
    a: "Sua inscrição pode ser paga em até 12x no cartão de crédito, Pix, boleto e PayPal. Veja valores atualizados no fluxo oficial de inscrição.",
  },
  {
    q: "Posso adquirir somente os e-books?",
    a: "Sim, os e-books autorais podem ser adquiridos separadamente. Eles complementam os cursos — a experiência completa combina vídeo e leitura.",
  },
  {
    q: "Posso adquirir somente os cursos?",
    a: "Não é possível adquirir cursos individualmente. Eles estão nas formações e trilhas, que podem ser compradas separadamente ou pelos planos anual e vitalício.",
  },
] as const;

export function FaqSection() {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id='faq'
      className='scroll-mt-24 border-t border-white/5 bg-zinc-950 px-4 py-20 sm:py-24'
      aria-labelledby='faq-heading'
    >
      <SectionReveal className='mx-auto max-w-7xl'>
        <div className='grid gap-12 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,1fr)] lg:gap-16'>
          <div>
            <p
              data-reveal-header
              className='text-xs font-medium uppercase tracking-[0.2em] text-zinc-500'
            >
              Suporte
            </p>
            <h2
              id='faq-heading'
              data-reveal-header
              className='mt-3 text-3xl font-semibold leading-[1.08] tracking-tighter text-white sm:text-4xl'
            >
              Dúvidas frequentes
            </h2>
            <p
              data-reveal-header
              className='mt-4 max-w-[48ch] text-base leading-relaxed text-zinc-400'
            >
              Respostas diretas sobre acesso, planos e como começar sem
              atrito.
            </p>
          </div>

          <div className='flex flex-col gap-2'>
            {faqItems.map((item, index) => {
              const expanded = open === index;
              const panelId = `${baseId}-panel-${index}`;
              const buttonId = `${baseId}-btn-${index}`;
              return (
                <div
                  key={item.q}
                  data-reveal-item
                  className='rounded-2xl border border-white/10 bg-zinc-900/40 transition-colors hover:border-white/15'
                >
                  <button
                    type='button'
                    id={buttonId}
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={() => setOpen(expanded ? null : index)}
                    className='flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-sm font-medium text-white transition-colors hover:text-zinc-200 sm:px-5 sm:text-base'
                  >
                    {item.q}
                    <CaretDown
                      className={`h-5 w-5 shrink-0 text-zinc-500 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                        expanded ? "rotate-180" : ""
                      }`}
                      aria-hidden
                    />
                  </button>
                  <div
                    id={panelId}
                    role='region'
                    aria-labelledby={buttonId}
                    className={`grid border-t border-white/5 transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                      expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className='min-h-0 overflow-hidden'>
                      <p
                        className='px-4 py-4 text-sm leading-relaxed text-zinc-500 sm:px-5'
                        aria-hidden={!expanded}
                      >
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
