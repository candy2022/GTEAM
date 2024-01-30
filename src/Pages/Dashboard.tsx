import React, { useEffect, useState } from 'react';
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
import "../Styles/Dashstyle.css"
import TinyBarChart from '../Components/TinyBarChart';
import { Link } from 'react-router-dom';

interface UserInfo {     
    name: string;
    
  }
function Dashboard(){
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    useEffect(() => {
        
        const storedName = sessionStorage.getItem('name');
     
        if ( storedName ) {
          const userObj: UserInfo = {            
            name: storedName,            
          };
          setUserInfo(userObj);
        }
      }, []);  
    
    return(
        <div>
        <NavigationBar menuItems={[
          { name: 'Dashboard', link: '/dashboard' },
          { name: 'Chart', link: '/chart' },
          { name: 'Mypage', link: '/mypage' },
          { name: 'Moneybook', link: '/moneybook'},

        ]}/>
        <div className="DashContainer">
        
        {userInfo ? (
        <div>
         <div className="DashBox">
        <h1>What's New in {userInfo.name}'s Moneybook</h1>
        <p></p>
         </div>
         <div className='DetailBox'>
          <h3>1월 전체 내역</h3>
          <h2><span style={{color:"blue"}}>2,000,000원</span></h2>
          <hr />
         <p> Consumption history 10건 <span> 1,000,000원</span>  </p>   <br />
         <p>income details 2건 <span> 1,000,000원</span>  </p>
         </div>
         <div className='chartBox'> 
          <h2>12월보다 <span style={{color:"blue"}}>50,000원 </span>더 사용했어요.</h2>
          <p> 지난 6개월 평균 거래 금액은 1,000,000원이에요.</p>
         <div className='barChartBox'> <TinyBarChart /></div>
         </div>
         <div className='DetailBox2'>
          <h2>거래내역</h2>
          <p>배달의 민족 <span>29,000원</span></p>
          <p>요기요  <span>50,000원</span></p>
          <hr />
          <div className='thebokibtn'><Link to="/moneybook">거래 내역 더보기 &gt;</Link></div> 

         </div>
         <div>
         <h2>Share {userInfo.name}’s wonderful practice</h2>
          <p>Only I can see the detailed transaction history and amount.</p>
          <button className='savebtn'>게시판에 글쓰러 가기</button>
         </div>
        </div>
        ):( 
        <p>Sign in Use your Google Account</p>
        )}
        
        </div>
            <Footer />
        </div>
    )
}
export default Dashboard;