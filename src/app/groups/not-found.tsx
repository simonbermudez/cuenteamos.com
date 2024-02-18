import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col gap-2">
      <p>Este grupo no existe.</p>
      <p>
        <Button asChild variant="secondary">
          <Link href="/groups">Ir a grupos visitados recientemente</Link>
        </Button>
      </p>
    </div>
  )
}