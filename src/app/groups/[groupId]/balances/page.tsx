import { cached } from '@/app/cached-functions'
import { BalancesList } from '@/app/groups/[groupId]/balances-list'
import { ReimbursementList } from '@/app/groups/[groupId]/reimbursement-list'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { getGroupExpenses } from '@/lib/api'
import {
  getBalances,
  getPublicBalances,
  getSuggestedReimbursements,
} from '@/lib/balances'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Saldos',
}

export default async function GroupPage({
  params: { groupId },
}: {
  params: { groupId: string }
}) {
  const group = await cached.getGroup(groupId)
  if (!group) notFound()

  const expenses = await getGroupExpenses(groupId)
  const balances = getBalances(expenses)
  const reimbursements = getSuggestedReimbursements(balances)
  const publicBalances = getPublicBalances(reimbursements)

  return (
    <>
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Saldos</CardTitle>
          <CardDescription>
            Esta es la cantidad que cada participante pagó o recibió.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <BalancesList
            balances={publicBalances}
            participants={group.participants}
            currency={group.currency}
          />
        </CardContent>
      </Card>
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Reembolsos sugeridos</CardTitle>
          <CardDescription>
            Aquí hay sugerencias para reembolsos optimizados entre participantes.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <ReimbursementList
            reimbursements={reimbursements}
            participants={group.participants}
            currency={group.currency}
            groupId={groupId}
          />
        </CardContent>
      </Card>
    </>
  )
}