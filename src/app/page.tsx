type UserExpense = {
  name: string;
  amount: number;
};

type UserExpenseMap = {
  [uid: string]: UserExpense;
};

export default function Home() {
  return (
    <div>
      <h1 className="text-center font-bold text-3xl text-gray-800 px-2 mt-2">
        Calculate your expenses
      </h1>

      <div className="px-4">
        <form>
          <div className="md:flex md:justify-center md:items-center mt-5">
            <div className="md:w-2/5">
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
            <div className="md:w-2/5">
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
      </div>
    </div>
  );
}
