import { 
  integer, 
  json, 
  pgTable, 
  varchar, 
  date
} from "drizzle-orm/pg-core";

/* USERS TABLE */
export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  credits: integer().default(5),
});

/* PROJECT TABLE */
export const projectTable = pgTable("projects", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  projectId: varchar().notNull(),
  userInput: varchar(),
  device: varchar(),
  createdOn: date().defaultNow(),
  config: json(),
  userid: varchar().references(() => usersTable.email).notNull()
});
