import React, { useEffect, useState } from 'react';
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
import "../Styles/Dashstyle.css"
import TinyBarChart from '../Components/TinyBarChart';
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
         <h3>Consumption history: 100  </h3>   <br />
         <h3>income details : 100  </h3>
         </div>
         <div> 
          <h2>6개월간 사용 내역</h2>
          <TinyBarChart />
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