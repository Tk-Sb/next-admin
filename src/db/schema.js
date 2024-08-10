import { serial, pgTable, varchar, foreignKey, integer } from "drizzle-orm/pg-core"

// create grade table
export const GradesTable = pgTable("Grades", {
    gradeId: serial("gradeId").primaryKey().notNull(),
    grade: varchar("grade").notNull()
})

// create classes table
export const ClassesTable = pgTable("Classes", {
    classId: serial("classId").primaryKey().notNull(),
    class: varchar("class").notNull(),
})

// create students table
export const StudentsTable = pgTable("Students", {
    studentId: serial("studentId").primaryKey().notNull(), // searching/rendering rule
    firstName: varchar("first_name").notNull(),
    lastName: varchar("last_name").notNull(),
    gradeId: integer("gradeId").references(() => GradesTable.gradeId).notNull(),
    classId: integer("classId").references(() => ClassesTable.classId).notNull(),
    notes: varchar("notes").array(),
    // login credentials
    username: varchar("username").notNull(),
    password: varchar("password").notNull()
})