import {
  mysqlTable,
  serial,
  timestamp,
  varchar,
  text,
  int,
  uniqueIndex,
} from "drizzle-orm/mysql-core";

export const views = mysqlTable('views', {
  id: serial('id').primaryKey().notNull(),
  for: varchar('for', {
    length: 60,
  }).notNull(),
  count: int('count').notNull(),
  created_at: timestamp('created_at'),
  updated_at: timestamp('updated_at')
}, (views) => {
    return {
      forIndex: uniqueIndex('for_index').on(views.for)
    }
  })

export const blogs = mysqlTable('blog', {
  id: serial('id').primaryKey().notNull(),
  title: text('title'),
  rawContent: text('raw_content'),
  views: int('views'),
  created_at: timestamp('created_at'),
  updated_at: timestamp('updated_at'),
})
