import React, { useState } from "react";
import TransactionInput from "../Components/TransactionInput";
import NavigationBar from "../Components/NavigationBar";
import { Link } from 'react-router-dom';
import "../Styles/inputstyle.css";
function MoneyInput() {
  const [selectedType, setSelectedType] = useState<"income" | "expense" >(
    "expense"
  );

  const handleButtonClick = (type: "income" | "expense") => {
    setSelectedType(type);
  };

  return (
    <div>
      <NavigationBar
        menuItems={[
          { name: 'Dashboard', link: '/dashboard' },
          { name: 'Chart', link: '/chart' },
          { name: 'Mypage', link: '/mypage' },
          { name: 'input', link: '/moneybook'},
        ]}
      />
       <div className="inputContainer">
        <button className="moneybtn">
        <Link to="/moneybook"> &lt;</Link>
        </button>
        <br />
      <button className="moneybtn income" onClick={() => handleButtonClick("income")}>Income</button>
      <button className="moneybtn expense" onClick={() => handleButtonClick("expense")}>Expense</button>
        <div className="transContainer" >
        {selectedType === "income" && <TransactionInput type="income" />}
        {selectedType === "expense" && <TransactionInput type="expense" />}
  
        </div>
     
       </div>
    </div>
  );
}

export default MoneyInput;
