import type { Config } from "drizzle-kit";

export default {
  schema: "./src/server/schema.ts",
  dbCredentials: {
    uri: process.env.DATABASE_URL!,
  },
  driver: "mysql2",
} satisfies Config;
