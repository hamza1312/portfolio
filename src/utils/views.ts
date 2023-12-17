import { eq } from 'drizzle-orm'
import { db } from '../server/db'
import { views } from '../server/schema'

export async function increaseViews(name: string) {
  const view = await db.query.views.findFirst({
    where: eq(views.for, name)
  })
  if (!view) {
    await db.insert(views).values({
      for: name,
      count: 1,
    })
    return 1
  } else {
    await db.update(views).set({ count: view.count + 1}).where(eq(views.for, view.for))
    return view.count + 1
  }
}
