import { fetchExpense } from "@/lib/data";
import map from "lodash/map";

export default async function ExpensesList() {
  const expenses = await fetchExpense();
  return (
    <div className="px-4 mt-4">
      <h2 className="text-2xl font-bold text-gray-800 text-center">Expenses</h2>

      <div className="p-2">
        {map(expenses, (expenses) => (
          <div
            key={expenses.id}
            className="my-2 rounded flex justify-between bg-slate-300 px-2 py-1"
          >
            <p>
              <span>Name:</span> {expenses.name}
            </p>
            <p>
              <span>Amount:</span> {expenses.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
