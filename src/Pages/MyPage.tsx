import React from "react";
import NavigationBar from "../Components/NavigationBar";

function Mypage(){
    return(
        <div>
            <NavigationBar menuItems={[
          { name: 'Dashboard', link: '/dashboard' },
          { name: 'Chart', link: '/chart' },
          { name: 'Mypage', link: '/mypage' },
        ]}/>
        <div className="DashContainer">
        <h1 style={{marginTop:100}}>Mypage</h1>
        </div>
            
        </div>
    )
}
export default Mypage;