import React from "react";
import NavigationBar from "../Components/NavigationBar";

function Dashboard(){
    return(
        <div>
        <NavigationBar menuItems={[
          { name: 'Dashboard', link: '/dashboard' },
          { name: 'Chart', link: '/chart' },
          { name: 'Mypage', link: '/mypage' },
          { name: 'input', link: '/moneyinput'},

        ]}/>
        <div className="DashContainer">
        <h1 style={{marginTop:100}}>This is Dashboard Page</h1>
        </div>
            
        </div>
    )
}
export default Dashboard;