import React, { useState } from "react";
import TransactionInput from "../Components/TransactionInput";
import NavigationBar from "../Components/NavigationBar";
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
          { name: 'input', link: '/moneyinput'},
        ]}
      />
       <div className="inputContainer">
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
