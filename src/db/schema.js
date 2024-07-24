import { serial, pgTable, varchar } from "drizzle-orm/pg-core"

// create students table
export const StudentsTable = pgTable("Students", {
    id: serial("id").primaryKey().notNull(), // searching/rendering rule
    firstName: varchar("first_name").notNull(),
    lastName: varchar("last_name").notNull(),
    notes: varchar("notes").array(),
    // login credentials
    username: varchar("username").notNull(),
    password: varchar("password").notNull()
})