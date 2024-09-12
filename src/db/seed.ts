import { client, db } from '.'
import { goalCompletions, goals } from './schema'
import dayjs from 'dayjs'

async function seed() {
  await db.delete(goalCompletions)
  await db.delete(goals)

  const goalResults = await db
    .insert(goals)
    .values([
      { title: 'Read 1 book', desiredWeeklyFrequency: 1 },
      { title: 'Run 3 miles', desiredWeeklyFrequency: 3 },
      { title: 'Write 1 blog post', desiredWeeklyFrequency: 1 },
    ])
    .returning()

  const startOfWeek = dayjs().startOf('week')

  await db.insert(goalCompletions).values([
    { goalId: goalResults[0].id, createdAt: startOfWeek.toDate() },
    {
      goalId: goalResults[1].id,
      createdAt: startOfWeek.add(1, 'day').toDate(),
    },
  ])
}

seed().finally(() => {
  client.end()
})
