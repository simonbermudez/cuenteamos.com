'use client'
import { CopyButton } from '@/components/copy-button'
import { ShareUrlButton } from '@/components/share-url-button'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { useBaseUrl } from '@/lib/hooks'
import { Group } from '@prisma/client'
import { Share } from 'lucide-react'

type Props = {
  group: Group
}

export function ShareButton({ group }: Props) {
  const baseUrl = useBaseUrl()
  const url = baseUrl && `${baseUrl}/groups/${group.id}/expenses?ref=share`

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="icon">
          <Share className="w-4 h-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="[&_p]:text-sm flex flex-col gap-3">
        <p>
          Para que otros participantes vean el grupo y añadan gastos, comparte su
          URL con ellos.
        </p>
        {url && (
          <div className="flex gap-2">
            <Input className="flex-1" defaultValue={url} readOnly />
            <CopyButton text={url} />
            <ShareUrlButton
              text={`Únete a mi grupo ${group.name} en Cuenteamos`}
              url={url}
            />
          </div>
        )}
        <p>
          <strong>¡Advertencia!</strong> Cualquier persona con la URL del grupo podrá
          ver y editar los gastos. ¡Comparte con precaución!
        </p>
      </PopoverContent>
    </Popover>
  )
}
