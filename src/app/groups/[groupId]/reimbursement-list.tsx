import { Button } from '@/components/ui/button'
import { Reimbursement } from '@/lib/balances'
import { formatCurrency } from '@/lib/utils'
import { Participant } from '@prisma/client'
import Link from 'next/link'

type Props = {
  reimbursements: Reimbursement[]
  participants: Participant[]
  currency: string
  groupId: string
}

export function ReimbursementList({
  reimbursements,
  participants,
  currency,
  groupId,
}: Props) {
  if (reimbursements.length === 0) {
    return (
      <p className="px-6 text-sm pb-6">
        Parece que tu grupo no necesita ningún reembolso 😁
      </p>
    )
  }

  const getParticipant = (id: string) => participants.find((p) => p.id === id)
  return (
    <div className="text-sm">
      {reimbursements.map((reimbursement, index) => (
        <div className="border-t px-6 py-4 flex justify-between" key={index}>
          <div className="flex flex-col gap-1 items-start sm:flex-row sm:items-baseline sm:gap-4">
            <div>
              <strong>{getParticipant(reimbursement.from)?.name}</strong> debe a{' '}
              <strong>{getParticipant(reimbursement.to)?.name}</strong>
            </div>
            <Button variant="link" asChild className="-mx-4 -my-3">
              <Link
                href={`/groups/${groupId}/expenses/create?reimbursement=yes&from=${reimbursement.from}&to=${reimbursement.to}&amount=${reimbursement.amount}`}
              >
                Marcar como pagado
              </Link>
            </Button>
          </div>
          <div>{formatCurrency(currency, reimbursement.amount)}</div>
        </div>
      ))}
    </div>
  )
}
