import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; 
import "../Styles/inputstyle.css"
import { MoneyType, Money } from "../Components/types";  

interface MoneyInputProps {
  type: MoneyType;
  onTransactionSubmit: (money: Money) => void;  

}
 
const TransactionInput: React.FC<MoneyInputProps> = ({ type, onTransactionSubmit }) => {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [detail, setDetail] = useState("");
  const navigate = useNavigate();  

  const handleTransactionSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newMoney: Money = {
      id: Date.now(),
      type,
      category,
      amount: parseFloat(amount), // Assuming amount is a number, adjust if needed
      date,
      detail,
    };

    onTransactionSubmit(newMoney);

    setCategory("");
    setAmount("");
    setDate("");
    setDetail("");
    navigate('/moneybook');
  };

  return (
    <div>
      <h2 className="title">{type === "expense" ? "소비 내역을 입력하세요." : "수입 내역을 입력하세요."}</h2>
      <div className="moneyContainer">
        <form onSubmit={handleTransactionSubmit}>
        <label>
            Date:
            <input
              className="inputField"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
          <br />
          <label>
            Detail:
            <input
              className="inputField"
              type="detail"
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Category:
            <select className="selectField" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">Select a category</option>
              {type === "expense" ? (
                <>
                  <option value="food">Food</option>
                  <option value="clothing">Clothing</option>
                  <option value="entertainment">Entertainment</option>
                </>
              ) : (
                <>
                  <option value="salary">Salary</option>
                  <option value="bonus">Bonus</option>
                  <option value="other">Other</option>
                </>
              )}
            </select>
          </label>
          <br />
          <label>
            Amount:
            <input
             className="inputField"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
          <br />
          
          <br />
          <button className="savebtn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TransactionInput;
