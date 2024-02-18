'use client'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { usePathname, useRouter } from 'next/navigation'

type Props = {
  groupId: string
}

export function GroupTabs({ groupId }: Props) {
  const pathname = usePathname()
  const value =
    pathname.replace(/\/groups\/[^\/]+\/([^/]+).*/, '$1') || 'expenses'
  const router = useRouter()

  return (
    <Tabs
      value={value}
      className="[&>*]:border"
      onValueChange={(value) => {
        router.push(`/groups/${groupId}/${value}`)
      }}
    >
      <TabsList>
        <TabsTrigger value="expenses">Gastos</TabsTrigger>
        <TabsTrigger value="balances">Saldos</TabsTrigger>
        <TabsTrigger value="edit">Configuración</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
