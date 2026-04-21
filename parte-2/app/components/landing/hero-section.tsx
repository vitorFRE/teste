"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Check } from "@phosphor-icons/react";
import { HoverBorderGradient } from "@/app/components/ui/hover-border-gradient";

const bullets = [
  "+40 horas de conteúdo direto ao ponto",
  "Projetos com Python + IA desde o módulo 1",
  "Suporte da comunidade com +20.000 alunos",
  "Certificado reconhecido pelo mercado",
] as const;

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

const itemUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-black px-4 pb-20 pt-10 sm:pb-28 sm:pt-14"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/55 via-black/35 to-black/80"
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.div
          className="flex w-full flex-col items-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemUp} className="mb-6">
            <div className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-black/70 px-3 py-2 font-mono text-xs shadow-inner sm:text-sm">
              <span className="text-white">print</span>
              <span className="text-white">(</span>
              <span className="text-brand-orange">&quot;Python + IA&quot;</span>
              <span className="text-white">)</span>
            </div>
          </motion.div>

          <motion.h1
            id="hero-heading"
            variants={itemUp}
            className="max-w-3xl text-balance text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Aprenda Python do zero e construa projetos reais com IA
          </motion.h1>

          <motion.p
            variants={itemUp}
            className="mt-5 max-w-2xl text-pretty text-base text-zinc-400 sm:text-lg"
          >
            O curso mais prático do Brasil para quem quer entrar em tecnologia
            sem enrolação
          </motion.p>

          <motion.div
            variants={itemUp}
            className="mt-8 flex w-full max-w-lg flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4"
          >
            <Link
              href="#matricula"
              className="flex w-full rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:w-auto"
            >
              <HoverBorderGradient
                as="div"
                surfaceClassName="bg-brand-cyan"
                containerClassName="w-full border-brand-cyan/70 sm:w-auto"
                className="flex h-12 min-h-12 w-full items-center justify-center rounded-full px-8 text-sm font-semibold text-black"
              >
                Quero começar agora
              </HoverBorderGradient>
            </Link>
            <Link
              href="#conteudo"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/20 px-6 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5 sm:w-auto"
            >
              Ver o que vou aprender
              <ArrowRight className="size-4" weight="bold" aria-hidden />
            </Link>
          </motion.div>

          <motion.ul
            variants={itemUp}
            className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-x-10 gap-y-4 text-sm text-zinc-300 sm:grid-cols-2 sm:text-base"
          >
            {bullets.map((line) => (
              <li key={line} className="flex w-full gap-3">
                <span
                  className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-cyan/15 text-brand-cyan"
                  aria-hidden
                >
                  <Check className="size-3.5" weight="bold" />
                </span>
                <span className="min-w-0 flex-1 text-left text-pretty">{line}</span>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          className="relative mt-14 w-full max-w-4xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.55,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
        >
          <div
            className="relative overflow-hidden rounded-2xl border border-brand-cyan/25 shadow-[0_0_0_1px_rgba(126,231,231,0.08),0_0_48px_rgba(126,231,231,0.18)]"
            style={{ aspectRatio: "16 / 9" }}
          >
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/DgxHP1LG5dM?si=zRBNZhHN4VCKhHmb"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
