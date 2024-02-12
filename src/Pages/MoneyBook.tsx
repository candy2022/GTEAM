import React, { useState, ChangeEvent } from 'react';
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
import MoneyHistory from "../Components/MoneyHistory";
import { useNavigate } from 'react-router-dom';
import '../Styles/MoneyBookstyle.css';

const MoneyBook: React.FC = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<string | undefined>(undefined);

  const handleClick = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    navigate(selectedValue);
  };

  const storedMoneys = localStorage.getItem("moneys");
  const moneys = storedMoneys ? JSON.parse(storedMoneys) : [];

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
      <div className='moneybook-container'>
        <div className='moneybook-content'>
          <div>
            <label>View by month : </label>
            <input type="month" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
          </div>
        </div>

        {/* 우측 내용 (내역 추가하기 부분) */}
        <div className='add-container'>
          <select name="add" id="" onChange={handleClick}>
            <option value="">+ Enter details</option>
            <option value="moneyinput">write directly</option>
            <option value="photoinput">Input as image</option>
          </select>
        </div>
      </div>
      <hr />
      <div className='historyContainer'>
        <MoneyHistory moneys={moneys} />
      </div>
      <Footer />
    </div>
  );
};

export default MoneyBook;
