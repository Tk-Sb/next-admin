CREATE TABLE IF NOT EXISTS "Students" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" varchar NOT NULL,
	"last_name" varchar NOT NULL,
	"notes" varchar[],
	"username" varchar NOT NULL,
	"password" varchar NOT NULL
);
