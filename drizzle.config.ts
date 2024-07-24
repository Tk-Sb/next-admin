import { defineConfig } from "drizzle-kit"

export default defineConfig({
    dialect: "postgresql", // "mysql" | "sqlite" | "postgresql"
    schema: "./src/db/schema.js",
    out: "./src/db/migrations",
})