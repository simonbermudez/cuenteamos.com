'use server'
import { getCategories } from '@/lib/api'
import { env } from '@/lib/env'
import { formatCategoryForAIPrompt } from '@/lib/utils'
import OpenAI from 'openai'
import { ChatCompletionCreateParamsNonStreaming } from 'openai/resources/index.mjs'

const openai = new OpenAI({ apiKey: env.OPENAI_API_KEY })

export async function extractExpenseInformationFromImage(imageUrl: string) {
  'use server'
  const categories = await getCategories()

  const body: ChatCompletionCreateParamsNonStreaming = {
    model: 'gpt-4-vision-preview',
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: `
              Esta imagen contiene un recibo.
              Lea el monto total y guárdelo como un número no formateado sin ningún otro texto o moneda.
              Luego, adivine la categoría para este recibo entre las siguientes categorías y almacene su ID: ${categories.map(
                (category) => formatCategoryForAIPrompt(category),
              )}.
              Adivine la fecha del gasto y guárdela como yyyy-mm-dd.
              Adivine un título para el gasto.
              Devuelva el monto, la categoría, la fecha y el título solo con una coma entre ellos, sin nada más.`,
          },
        ],
      },
      {
        role: 'user',
        content: [{ type: 'image_url', image_url: { url: imageUrl } }],
      },
    ],
  }
  const completion = await openai.chat.completions.create(body)

  const [amountString, categoryId, date, title] = completion.choices
    .at(0)
    ?.message.content?.split(',') ?? [null, null, null, null]
  return { amount: Number(amountString), categoryId, date, title }
}

export type ReceiptExtractedInfo = Awaited<
  ReturnType<typeof extractExpenseInformationFromImage>
>