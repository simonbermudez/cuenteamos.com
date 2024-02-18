import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'
import Link from 'next/link'

// FIX for https://github.com/vercel/next.js/issues/58615
// export const dynamic = 'force-dynamic'

export default function HomePage() {
  return (
    <main>
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container flex max-w-screen-md flex-col items-center gap-4 text-center">
          <h1 className="!leading-none font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl landing-header py-2">
            Comparte <strong>Gastos</strong> <br /> con <strong>Amigos</strong>{' '}
            y <strong>Familiares</strong>
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            ¡Bienvenido a tu nueva instancia de <strong>Cuenteamos</strong>! <br />
          </p>
          <div className="flex gap-2">
            <Button asChild>
              <Link href="/groups">Ir a grupos</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
