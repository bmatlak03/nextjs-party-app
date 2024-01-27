import { createExpense } from "@/lib/actions";

export default async function ExpensesForm() {
  return (
    <form action={createExpense} className="px-4">
      <div className="flex justify-center flex-col">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            name="name"
            type="text"
            className="w-full bg-gray-100 focus:bg-white focus:outline-none border border-gray-300 rounded py-2 px-4 block appearance-none leading-normal"
            placeholder="Name"
          />
        </div>
        <div className="mt-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Amount
          </label>
          <input
            name="amount"
            type="number"
            className="w-full bg-gray-100 focus:bg-white focus:outline-none border border-gray-300 rounded py-2 px-4 block appearance-none leading-normal"
            placeholder="Amount"
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold rounded"
      >
        Add
      </button>
    </form>
  );
}
