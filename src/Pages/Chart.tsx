import React from "react";
import NavigationBar from "../Components/NavigationBar";

function Chart(){
    return(
        <div>
        <NavigationBar menuItems={[
          { name: 'Dashboard', link: '/dashboard' },
          { name: 'Chart', link: '/chart' },
          { name: 'Mypage', link: '/mypage' },
        ]}/>
        <div className="DashContainer">
        <h1 style={{marginTop:100}}>This is Chart Page</h1>
        </div>
            
        </div>
    )
}
export default Chart;