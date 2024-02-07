import React, { useState } from "react";
import TransactionInput from "../Components/TransactionInput";
import NavigationBar from "../Components/NavigationBar";
import { Link } from 'react-router-dom';
import "../Styles/inputstyle.css";

function MoneyInput() {
  const [selectedType, setSelectedType] = useState<"income" | "expense">("expense");

  const handleButtonClick = (type: "income" | "expense") => {
    setSelectedType(type);
  };

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
          {selectedType === "income" && <TransactionInput type="income" />}
          {selectedType === "expense" && <TransactionInput type="expense" />}
        </div>
      </div>
    </div>
  );
}

export default MoneyInput;
