import { unstable_noStore as noStore } from "next/cache";
import { sql } from "@vercel/postgres";
import { Expense } from "./actions";

export async function fetchExpense() {
  noStore();
  // Add noStore() here prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).

  try {
    console.log("Fetching expenses data...");
    const data = await sql<Expense>`SELECT * FROM expenses`;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch expenses data.");
  }
}
