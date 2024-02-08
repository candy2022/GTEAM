import React from "react";
import { Money } from "./types";  
import "../Styles/Historystyle.css"
interface MoneyHistoryProps {
  moneys: Money[];
}

const MoneyHistory: React.FC<MoneyHistoryProps> = ({ moneys }) => {
  return (
    <div className='historyContainer'>
       
      <table className="historytable">
        
        <tbody>
          {moneys.map((money) => (
            <tr key={money.id}>
              <td>{money.date}</td>
              <td>{money.detail}</td>
              <td style={{ color: money.type === "income" ? "blue" : "inherit" }}>
                {money.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MoneyHistory;
