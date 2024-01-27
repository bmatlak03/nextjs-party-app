import { Expense } from "@/lib/actions";

export type UserDebt = {
  name: string;
  debts: {
    name: string;
    amount: number;
  }[];
};

export function calculateUsersDebts(expenses: Expense[]): UserDebt[] {
  const totalCost = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const averageCost = totalCost / expenses.length;

  const differences = expenses.reduce((acc, expense) => {
    acc[expense.name] = expense.amount - averageCost;
    return acc;
  }, {} as { [name: string]: number });

  const usersDebts: UserDebt[] = [];

  for (const debtor in differences) {
    for (const creditor in differences) {
      if (debtor === creditor) continue;
      if (differences[debtor] > 0 && differences[creditor] < 0) {
        const paymentAmount = Math.min(
          differences[debtor],
          -differences[creditor]
        );

        if (!usersDebts.some((userDebt) => userDebt.name === creditor)) {
          usersDebts.push({ name: creditor, debts: [] });
        }

        usersDebts
          .find((userDebt) => userDebt.name === creditor)
          ?.debts.push({
            name: debtor,
            amount: paymentAmount,
          });

        differences[debtor] -= paymentAmount;
        differences[creditor] += paymentAmount;
      }
    }
  }

  return usersDebts;
}
