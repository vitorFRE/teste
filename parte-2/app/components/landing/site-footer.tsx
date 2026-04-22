"use client";

import Link from "next/link";
import { Globe } from "@phosphor-icons/react";

const footerNav = [
  { label: "Conteúdo", href: "#conteudo" },
  { label: "Planos", href: "#matricula" },
  { label: "Dúvidas", href: "#faq" },
] as const;

export function SiteFooter() {
  return (
    <footer className='border-t border-white/10 bg-zinc-950'>
      <div className='mx-auto max-w-7xl px-4 py-14 sm:py-16'>
        <div className='flex flex-col gap-10 md:flex-row md:items-start md:justify-between'>
          <div>
            <Link
              href='/'
              className='text-lg font-bold tracking-tight text-white transition-opacity hover:opacity-90'
            >
              ASIMOV
            </Link>
            <p className='mt-3 max-w-xs text-sm leading-relaxed text-zinc-500'>
              Página de <span className='text-zinc-400'>teste técnico</span> da
              Asimov — conteúdo ilustrativo.
            </p>
          </div>

          <nav aria-label='Rodapé'>
            <p className='text-xs font-medium uppercase tracking-[0.2em] text-zinc-500'>
              Navegação
            </p>
            <ul className='mt-4 flex flex-col gap-2 sm:flex-row sm:gap-8'>
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className='text-sm text-zinc-300 transition-colors hover:text-white'
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className='text-xs font-medium uppercase tracking-[0.2em] text-zinc-500'>
              Oficial
            </p>
            <a
              href='https://asimov.academy/'
              target='_blank'
              rel='noopener noreferrer'
              className='mt-4 inline-flex items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-brand-cyan'
            >
              <Globe className='h-5 w-5' weight='duotone' aria-hidden />
              asimov.academy
            </a>
          </div>
        </div>

        <div className='mt-12 border-t border-white/5 pt-8 text-xs leading-relaxed text-zinc-600'>
          <p>
            Este projeto é um{" "}
            <span className='font-medium text-zinc-500'>teste técnico</span> da{" "}
            Asimov Academy (não é o produto oficial). Desenvolvido por{" "}
            <a
              href='https://github.com/vitorFRE'
              target='_blank'
              rel='noopener noreferrer'
              className='text-zinc-400 underline decoration-white/15 underline-offset-2 transition-colors hover:text-brand-cyan'
            >
              https://github.com/vitorFRE
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
