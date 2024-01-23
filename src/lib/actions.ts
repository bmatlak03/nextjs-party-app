"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const ExpenseSchema = z.object({
  id: z.string(),
  name: z.string(),
  amount: z.coerce.number(),
  date: z.string(),
});

export type Expense = ReturnType<typeof ExpenseSchema.parse>;

const CreateExpense = ExpenseSchema.omit({ id: true, date: true });

export async function createExpense(formData: FormData) {
  const { name, amount } = CreateExpense.parse({
    name: formData.get("name"),
    amount: formData.get("amount"),
  });

  const date = new Date().toISOString();
  try {
    await sql`
    INSERT INTO expenses (name, amount, date)
    VALUES (${name}, ${amount}, ${date})
    `;
    revalidatePath("/");
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Expense.",
      error,
    };
  }
}
