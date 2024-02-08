import React, { useState, useEffect } from "react";
import TransactionInput from "../Components/TransactionInput";
import NavigationBar from "../Components/NavigationBar";
import { Link } from 'react-router-dom';
import "../Styles/inputstyle.css";
import { Money } from "../Components/types";  

function MoneyInput() {
  const [selectedType, setSelectedType] = useState<"income" | "expense">("expense");

   
  const [moneys, setMoneys] = useState<Money[]>([]);

  const handleButtonClick = (type: "income" | "expense") => {
    setSelectedType(type);
  };

  const handleTransactionSubmit = (money: Money) => {
    // Add the new transaction to the moneys state
    setMoneys([...moneys, money]);

    // Save transactions to local storage
    localStorage.setItem("moneys", JSON.stringify([...moneys, money]));
  };

  useEffect(() => {
    const storedMoneys = localStorage.getItem("moneys");
    if (storedMoneys) {
      setMoneys(JSON.parse(storedMoneys));
    }
  }, []);
  return (
    <div>
      <NavigationBar
        menuItems={[
          { name: 'Home', link: '/dashboard' },
          { name: 'Community', link: '/board' },
          { name: 'Moneybook', link: '/moneybook'},
          { name: 'Mypage', link: '/mypage' },
        ]}
      />
      <div className="inputContainer">
        <div className="buttonRow">
          <Link to="/moneybook"><button className="backbtn" >&lt;</button></Link>
          <div>

         
          <button className={`moneybtn income ${selectedType === "income" ? "": "selected"}`} onClick={() => handleButtonClick("income")}>Income</button>
          <button className={`moneybtn expense ${selectedType === "expense" ? "" :"selected" }`} onClick={() => handleButtonClick("expense")}>Expense</button>
        </div> </div>

        <div className="transContainer">
 
          {selectedType === "income" && <TransactionInput type="income" onTransactionSubmit={handleTransactionSubmit} />}
          {selectedType === "expense" &&  <TransactionInput type="expense" onTransactionSubmit={handleTransactionSubmit} />
}
        </div>
      </div>
    </div>
  );
}

export default MoneyInput;
