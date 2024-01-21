import React from 'react';
import NavigationBar from "../Components/NavigationBar";
import '../Styles/MoneyBookstyle.css';
import { useNavigate } from 'react-router-dom';
const MoneyBook: React.FC = () => {
    const navigate = useNavigate();
    const handleClick = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        navigate(selectedValue);
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
      <div className='moneybook-container'>
      <div className='moneybook-content'>
        {/* 좌측 내용 */}
        <div>
          <label>날짜 선택:</label>
          <input type="date" />
        </div>
       
      </div>
      
      {/* 우측 내용 (내역 추가하기 부분) */}
      <div className='add-container'>
         <select name="add" id="" onChange={handleClick}>
         <option value="">+ 내역 추가하기</option>
          <option value="moneyinput">직접 기입하기</option>
          <option value="photoinput">갤러리에서 찾기</option>
        </select>
      </div>
      </div>
      <hr />
        <p>내역이 없습니다.</p>
    </div>
  );
};

export default MoneyBook;
