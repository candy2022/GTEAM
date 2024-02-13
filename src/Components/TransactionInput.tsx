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
    if (!date || !detail || !category || !amount) {
      alert("Please fill in all required fields.");
      return;
    }
  
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
      <h2 className="title">{type === "expense" ? "Please enter your consumption details" : "Please enter your income details."}</h2>
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
                  <option value="housing">Housing</option>
                  <option value="clothing">Clothing</option>
                  <option value="transportation">Transportation</option>
                  <option value="household Goods">Household Goods</option>
                  <option value="medical Expenses">Medical Expenses</option>
                  <option value="education">Education</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="others">Others</option>

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
          <button  className={`savebtn ${(!date || !detail || !category || !amount) ? 'disabled' : ''}`}

           type="submit" disabled={!date || !detail || !category || !amount}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TransactionInput;
