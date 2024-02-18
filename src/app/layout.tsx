import { ApplePwaSplash } from '@/app/apple-pwa-splash'
import { ProgressBar } from '@/components/progress-bar'
import { ThemeProvider } from '@/components/theme-provider'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/toaster'
import { env } from '@/lib/env'
import type { Metadata, Viewport } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_BASE_URL),
  title: {
    default: 'Cuenteamos · Compartir Gastos con Amigos y Familiares',
    template: '%s · Cuenteamos',
  },
  description:
    'Cuenteamos es una aplicación web minimalista para compartir gastos con amigos y familiares. Sin anuncios, sin cuenta, sin problema.',
  openGraph: {
    title: 'Cuenteamos · Compartir Gastos con Amigos y Familiares',
    description:
      'Cuenteamos es una aplicación web minimalista para compartir gastos con amigos y familiares. Sin anuncios, sin cuenta, sin problema.',
    images: `/banner.png`,
    type: 'website',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@scastiel',
    site: '@scastiel',
    images: `/banner.png`,
    title: 'Cuenteamos · Compartir Gastos con Amigos y Familiares',
    description:
      'Cuenteamos es una aplicación web minimalista para compartir gastos con amigos y familiares. Sin anuncios, sin cuenta, sin problema.',
  },
  appleWebApp: {
    capable: true,
    title: 'Cuenteamos',
  },
  applicationName: 'Cuenteamos',
  icons: [
    {
      url: '/android-chrome-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      url: '/android-chrome-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
  ],
}

export const viewport: Viewport = {
  themeColor: '#047857',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <ApplePwaSplash icon="/logo-with-text.png" color="#027756" />
      <body className="pt-16 min-h-[100dvh] flex flex-col items-stretch bg-slate-50 bg-opacity-30 dark:bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense>
            <ProgressBar />
          </Suspense>
          <header className="fixed top-0 left-0 right-0 h-16 flex justify-between bg-white dark:bg-gray-950 bg-opacity-50 dark:bg-opacity-50 p-2 border-b backdrop-blur-sm z-50">
            <Link
              className="flex items-center gap-2 hover:scale-105 transition-transform"
              href="/"
            >
              <h1>
                <Image
                  src="/logo-with-text.png"
                  className="m-1 h-auto w-auto"
                  width={(35 * 522) / 180}
                  height={35}
                  alt="Cuenteamos"
                />
              </h1>
            </Link>
            <div role="navigation" aria-label="Menú" className="flex">
              <ul className="flex items-center text-sm">
                <li>
                  <Button
                    variant="ghost"
                    asChild
                    className="-my-3 text-primary"
                  >
                    <Link href="/groups">Grupos</Link>
                  </Button>
                </li>
                <li>
                  <ThemeToggle />
                </li>
              </ul>
            </div>
          </header>

          <div className="flex-1 flex flex-col">{children}</div>

          <footer className="sm:p-8 md:p-16 sm:mt-16 sm:text-sm md:text-base md:mt-32 bg-slate-50 dark:bg-card border-t p-6 mt-8 flex flex-col sm:flex-row sm:justify-between gap-4 text-xs [&_a]:underline">
            <div className="flex flex-col space-y-2">
              <div className="sm:text-lg font-semibold text-base flex space-x-2 items-center">
                <Link className="flex items-center gap-2" href="/">
                  <Image
                    src="/logo-with-text.png"
                    className="m-1 h-auto w-auto"
                    width={(35 * 522) / 180}
                    height={35}
                    alt="Cuenteamos"
                  />
                </Link>
              </div>
              <div className="flex flex-col space-y a--no-underline-text-white">
                <span>Hecho en Caracas, Venezuela 🇻🇪</span>
                <span>
                  Creado por{' '}
                  <a href="https://simonbermudez.com" target="_blank" rel="noopener">
                    Simón Bermúdez
                  </a>{' '}
                  y{' '}
                  <a
                    href="https://www.linkedin.com/in/smejiass/"
                    target="_blank"
                    rel="noopener"
                  >
                    Simón Mejías
                  </a>
                </span>
              </div>
            </div>
          </footer>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
