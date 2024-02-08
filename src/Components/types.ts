export type MoneyType = "expense" | "income";

export interface Money {
  id: number;
  type: MoneyType;
  category: string;
  amount: number | string;
  date: string;
  detail: string;
}