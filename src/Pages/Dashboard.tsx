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
        <div className='Container'>
        <NavigationBar menuItems={[
          { name: 'Home', link: '/dashboard' },
          { name: 'Community', link: '/board' },
          { name: 'Moneybook', link: '/moneybook'},
          { name: 'Mypage', link: '/mypage' },
        ]}/>
        <div className="DashContainer1">
        
        {userInfo ? (
        <div >
         <div className="DashBox">
        <h1>What's New in {userInfo.name}'s Moneybook</h1>
        <p></p>
         </div>
         <div className='DetailBox'>
          <h3>January full details</h3>
          <h2><span style={{color:"darkblue"}}>₩2,000,000</span></h2>
          <hr />
          <p>Expenses Transactions: 10&nbsp;<span>₩1,000,000</span></p>
          <br />
          <p>Income Transactions: 2&nbsp;<span>₩1,000,000</span></p>

         </div>
         <div className='chartBox'> 
         <h2>You spent <span style={{color: "darkblue"}}>₩50,000 more</span> than in December.</h2>
         <p>The average transaction amount for the past 6 months is ₩1,000,000.</p>
         <br />
         <div className='barChartBox'> <TinyBarChart /></div>
         </div>
         <div className='DetailBox2'>
         <h2>Transaction History</h2>
         <p>Baemin <span>₩29,000</span></p>
         <p>Yogiyo <span>₩50,000</span></p>
          <hr />
          <div className='thebokibtn'>
            <Link to="/moneybook">View More Transaction History &gt;</Link>
          </div>

         </div>
         <div>
         <h2>Share {userInfo.name}’s wonderful practice</h2>
          <p>Only I can see the detailed transaction history and amount.</p>
          <div className='thebokibtn'>
            <Link to="/board">Go to Write a Post on the Bulletin Board &gt;</Link></div> 
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