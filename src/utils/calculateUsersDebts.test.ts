import { Expense } from "@/lib/actions";
import { calculateUsersDebts } from "./calculateUsersDebts";

describe("calculateUsersDebts", () => {
  const expenses: Expense[] = [
    {
      id: "1",
      name: "Kasia",
      amount: 0,
      date: new Date().toISOString(),
    },
    {
      id: "2",
      name: "Basia",
      amount: 32,
      date: new Date().toISOString(),
    },
    {
      id: "3",
      name: "Adam",
      amount: 14,
      date: new Date().toISOString(),
    },
    {
      id: "4",
      name: "Eryk",
      amount: 60,
      date: new Date().toISOString(),
    },
  ];
  test("should properly calculate user debts", () => {
    const calculatedData = calculateUsersDebts(expenses);

    console.log("calculateData", JSON.stringify(calculatedData, null, 2));

    const expectedData = [
      {
        name: "Kasia",
        debts: [
          {
            name: "Basia",
            amount: 5.5,
          },
          {
            name: "Eryk",
            amount: 21,
          },
        ],
      },
      {
        name: "Adam",
        debts: [
          {
            name: "Eryk",
            amount: 12.5,
          },
        ],
      },
    ];

    expect(calculatedData).toEqual(expectedData);
  });
});
