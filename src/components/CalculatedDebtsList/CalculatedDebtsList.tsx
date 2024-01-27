import map from "lodash/map";
import { UserDebt } from "@/utils/calculateUsersDebts";

type CalculatedDebtsListProps = {
  calculatedDebts: UserDebt[];
};

export default async function CalculatedDebtsList({
  calculatedDebts,
}: CalculatedDebtsListProps) {
  return (
    <div className="px-4 mt-4">
      <h2 className="text-2xl font-bold text-gray-800 text-center">
        Calculated Debts
      </h2>

      <div className="p-2">
        {map(calculatedDebts, (debtor) => (
          <div
            key={debtor.name}
            className="my-2 rounded flex justify-between bg-slate-300 px-2 py-1"
          >
            {debtor.name} has to pay{" "}
            {map(debtor.debts, (debt) => (
              <div key={debt.name}>
                {debt.name} {debt.amount}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
