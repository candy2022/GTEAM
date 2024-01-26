import React from "react";
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";

function Dashboard(){
    return(
        <div>
        <NavigationBar menuItems={[
          { name: 'Dashboard', link: '/dashboard' },
          { name: 'Chart', link: '/chart' },
          { name: 'Mypage', link: '/mypage' },
          { name: 'Moneybook', link: '/moneybook'},

        ]}/>
        <div className="DashContainer">
        <h1 style={{marginTop:100}}>This is Dashboard Page</h1>
        </div>
            <Footer />
        </div>
    )
}
export default Dashboard;