import { fetchExpense } from "@/lib/data";
import { calculateUsersDebts } from "@/utils/calculateUsersDebts";

import CalculatedDebtsList from "@/components/CalculatedDebtsList/CalculatedDebtsList";
import ExpensesForm from "@/components/ExpensesForm/ExpensesForm";
import ExpensesList from "@/components/ExpensesList/ExpensesList";

export default async function Home() {
  const expenses = await fetchExpense();

  const calculatedDebts = calculateUsersDebts(expenses);

  return (
    <div>
      <h1 className="text-center font-bold text-3xl text-gray-800 px-2 mt-2">
        Calculate your expenses
      </h1>

      <ExpensesForm />
      <ExpensesList expenses={expenses} />
      <CalculatedDebtsList calculatedDebts={calculatedDebts} />
    </div>
  );
}
