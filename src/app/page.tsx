import ExpensesForm from "@/components/ExpensesForm/ExpensesForm";
import ExpensesList from "@/components/ExpensesList/ExpensesList";

export default async function Home() {
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
