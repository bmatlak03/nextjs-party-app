import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const FormSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  amount: z.coerce.number(),
  date: z.string(),
});

const CreateExpense = FormSchema.omit({ id: true, date: true });

export async function createExpense(formData: FormData) {
  const { user_id, amount } = CreateExpense.parse({
    user_id: formData.get("customerId"),
    amount: formData.get("amount"),
  });

  const date = new Date().toISOString();

  try {
    await sql`
    INSERT INTO expenses (user_id, amount, date)
    VALUES (${user_id}, ${amount}, ${date})
    `;

    revalidatePath("/");
    redirect("/");
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Expense.",
      error,
    };
  }
}
