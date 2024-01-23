import ExpensesForm from "@/components/ExpensesForm/ExpensesForm";
import ExpensesList from "@/components/ExpensesList/ExpensesList";
import { fetchExpense } from "@/lib/data";

type UserExpense = {
  name: string;
  amount: number;
};

type UserExpenseMap = {
  [uid: string]: UserExpense;
};

export default async function Home() {
  const expenses = await fetchExpense();
  console.log("expenses", expenses);
  return (
    <div>
      <h1 className="text-center font-bold text-3xl text-gray-800 px-2 mt-2">
        Calculate your expenses
      </h1>

      <ExpensesForm />
      <ExpensesList />
    </div>
  );
}
