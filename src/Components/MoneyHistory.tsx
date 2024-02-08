import React from "react";
type MoneyType = "expense" | "income";

interface Money {
  id: number;
  type:MoneyType;
  category: string;
  amount: number;
  date: string;
}

interface MoneyHistoryProps {
  moneys: Money[];
}

const MoneyHistory: React.FC<MoneyHistoryProps> = ({ moneys }) => {
  return (
    <div className='historyContainer'>
      <p>내역</p>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>{moneys.length > 0 ? (moneys[0].type === "expense" ? "소비" : "수입") : "Category"}</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {moneys.map((money) => (
            <tr key={money.id}>
              <td>{money.date}</td>
              <td>{money.category}</td>
              <td>{money.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MoneyHistory;
