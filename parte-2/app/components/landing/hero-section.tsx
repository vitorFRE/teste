"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRef } from "react";
import { ArrowRight, Check } from "@phosphor-icons/react";
import { HoverBorderGradient } from "@/app/components/ui/hover-border-gradient";

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

const bullets = [
  "+40 horas de conteúdo direto ao ponto",
  "Projetos com Python + IA desde o módulo 1",
  "Suporte da comunidade com +20.000 alunos",
  "Certificado reconhecido pelo mercado",
] as const;

export function HeroSection() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;

      const items = gsap.utils.toArray<HTMLElement>(
        el.querySelectorAll("[data-hero-item]"),
      );
      if (items.length === 0) return;

      if (prefersReducedMotion()) {
        gsap.set(items, { autoAlpha: 1, y: 0, scale: 1 });
        return;
      }

      gsap.set(items, { autoAlpha: 0, y: 36 });
      gsap.set(items.slice(-1), { scale: 0.98 });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.to(items.slice(0, -1), {
        autoAlpha: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.09,
      }).to(
        items.slice(-1),
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.72,
        },
        "-=0.42",
      );

      return () => {
        tl.kill();
      };
    },
    { scope: root },
  );

  return (
    <section
      className='relative overflow-hidden bg-zinc-950 px-4 pt-4 pb-12 sm:pt-6 sm:pb-16'
      aria-labelledby='hero-heading'
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat"
        aria-hidden
      />
      <div
        className='pointer-events-none absolute inset-0 bg-linear-to-b from-zinc-950/65 via-zinc-950/40 to-zinc-950/90'
        aria-hidden
      />
      <div
        className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(126,231,231,0.2),transparent_38%),radial-gradient(circle_at_85%_15%,rgba(255,92,53,0.12),transparent_33%)]'
        aria-hidden
      />

      <div
        ref={root}
        className='relative mx-auto grid w-full max-w-7xl min-h-dvh content-center items-center gap-8 py-6 sm:gap-10 sm:py-8 lg:min-h-[calc(100dvh-4.75rem)] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14'
      >
        <div className='flex w-full flex-col'>
          <div data-hero-item className='mb-5'>
            <div className='inline-flex items-center gap-1 rounded-lg border border-white/10 bg-black/70 px-3 py-2 font-mono text-xs shadow-inner sm:text-sm'>
              <span className='text-white'>print</span>
              <span className='text-white'>(</span>
              <span className='text-brand-orange'>&quot;Python + IA&quot;</span>
              <span className='text-white'>)</span>
            </div>
          </div>

          <h1
            id='hero-heading'
            data-hero-item
            className='max-w-2xl text-balance text-4xl font-semibold leading-[1.04] tracking-tighter text-white sm:text-5xl lg:text-6xl'
          >
            Aprenda Python do zero e construa projetos reais com IA
          </h1>

          <p
            data-hero-item
            className='mt-5 max-w-[62ch] text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg'
          >
            O curso mais prático do Brasil para quem quer entrar em tecnologia sem
            enrolação
          </p>

          <div
            data-hero-item
            className='mt-8 flex w-full max-w-lg flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center sm:gap-4'
          >
            <Link
              href='#matricula'
              className='flex w-full rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:w-auto'
            >
              <HoverBorderGradient
                as='div'
                surfaceClassName='bg-brand-cyan'
                containerClassName='w-full border-brand-cyan/70 sm:w-auto'
                className='flex h-12 min-h-12 w-full items-center justify-center rounded-full px-8 text-sm font-semibold text-black'
              >
                Quero começar agora
              </HoverBorderGradient>
            </Link>
            <Link
              href='#conteudo'
              className='flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/20 px-6 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5 sm:w-auto'
            >
              Ver o que vou aprender
              <ArrowRight className='size-4' weight='bold' aria-hidden />
            </Link>
          </div>

          <ul
            data-hero-item
            className='mt-10 grid w-full max-w-3xl grid-cols-1 gap-x-10 gap-y-4 text-sm text-zinc-300 sm:grid-cols-2 sm:text-base'
          >
            {bullets.map((line) => (
              <li key={line} className='flex w-full gap-3'>
                <span
                  className='mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-cyan/15 text-brand-cyan'
                  aria-hidden
                >
                  <Check className='size-3.5' weight='bold' />
                </span>
                <span className='min-w-0 flex-1 text-left text-pretty'>{line}</span>
              </li>
            ))}
          </ul>
        </div>

        <div data-hero-item className='relative w-full'>
          <div className='relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/75 p-3 shadow-[0_30px_80px_-30px_rgba(4,7,17,0.8)] backdrop-blur-sm'>
            <div
              className='relative overflow-hidden rounded-2xl border border-brand-cyan/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.09),0_0_0_1px_rgba(126,231,231,0.08),0_25px_70px_-35px_rgba(126,231,231,0.45)]'
              style={{ aspectRatio: "16 / 9" }}
            >
              <iframe
                className='absolute inset-0 h-full w-full'
                src='https://www.youtube.com/embed/DgxHP1LG5dM?si=zRBNZhHN4VCKhHmb'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              />
            </div>

            <div className='mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2'>
              <div className='rounded-xl border border-white/10 bg-zinc-900/75 px-3 py-2'>
                <p className='font-mono text-xs text-zinc-400'>carga horária</p>
                <p className='text-sm font-medium text-zinc-100'>40h+</p>
              </div>
              <div className='rounded-xl border border-white/10 bg-zinc-900/75 px-3 py-2'>
                <p className='font-mono text-xs text-zinc-400'>comunidade ativa</p>
                <p className='text-sm font-medium text-zinc-100'>20k+ alunos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
