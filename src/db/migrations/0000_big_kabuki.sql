CREATE TABLE IF NOT EXISTS "Classes" (
	"classId" serial PRIMARY KEY NOT NULL,
	"class" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Grades" (
	"gradeId" serial PRIMARY KEY NOT NULL,
	"grade" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Students" (
	"studentId" serial PRIMARY KEY NOT NULL,
	"first_name" varchar NOT NULL,
	"last_name" varchar NOT NULL,
	"gradeId" integer NOT NULL,
	"classId" integer NOT NULL,
	"notes" varchar[],
	"username" varchar NOT NULL,
	"password" varchar NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Students" ADD CONSTRAINT "Students_gradeId_Grades_gradeId_fk" FOREIGN KEY ("gradeId") REFERENCES "public"."Grades"("gradeId") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Students" ADD CONSTRAINT "Students_classId_Classes_classId_fk" FOREIGN KEY ("classId") REFERENCES "public"."Classes"("classId") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
