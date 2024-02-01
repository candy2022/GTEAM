import React from "react";
import NavigationBar from "../Components/NavigationBar";
import PieChartComponent from "../Components/PieChart";
import Footer from "../Components/Footer";

import '../Styles/Chartstyle.css';
function Chart() {
  return (
    <div>
      <NavigationBar
        menuItems={[
          { name: 'Dashboard', link: '/dashboard' },
          { name: 'Chart', link: '/chart' },
          { name: 'Mypage', link: '/mypage' },
          { name: 'Moneybook', link: '/moneybook'}
        ]}
      />
      <div className="DashContainer">
        <h2> Check out this month's spending chart!  </h2>
        <div className="pieContainer" >
          <PieChartComponent />
        </div>
        <div>
          <p>
            Understanding your expenses is crucial for financial well-being.
            The pie chart above provides a visual breakdown of your spending
            categories.
          </p>
          <p>
            Take control of your budget by analyzing where your money goes. Use
            this information to make informed decisions and achieve your
            financial goals.
          </p>
          <p>
            To view detailed reports or explore more features, head to the{' '}
            <a href="/dashboard">Dashboard</a> page.
          </p>
        </div>        
      </div>
      <Footer />
    </div>
  );
}

export default Chart;
