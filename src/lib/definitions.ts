export type User = {
  id: string;
  name: string;
};

export type Expense = {
  id: string;
  user_id: string;
  amount: number;
  timestamp: string;
};
