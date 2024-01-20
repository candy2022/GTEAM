import React, { useState } from "react";

type TransactionType = "expense" | "income";

interface TransactionInputProps {
  type: TransactionType;
}
const TransactionInput: React.FC<TransactionInputProps> = ({ type }) => {
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
 
   
    const handleTransactionSubmit = (e: React.FormEvent) => {
      e.preventDefault();
    // 여기에서 입력된 데이터를 서버에 전송하거나 상태를 업데이트하는 로직을 추가할 수 있습니다.
    console.log("Type:", type);
    console.log("Category:", category);
    console.log("Amount:", amount);
    console.log("Date:", date);

    // 입력 후에 필드를 초기화합니다.
    setCategory("");
    setAmount("");
    setDate("");
  };

  return (
    <div>
      <h2>{type === "expense" ? "Expense" : "Income"} Input Page</h2>
      <div className="moneyContainer">

      
      <form onSubmit={handleTransactionSubmit}>
      <label>
      Category:
      <select value={category}  >
        <option value="">Select a category</option>
        <option value="food">Food</option>
        <option value="clothing">Clothing</option>
        <option value="entertainment">Entertainment</option>
       </select>
    </label>
        <br />
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <br />
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <br />
        <button className="savebtn" type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
};

export default TransactionInput;
