import React from "react";
import NavigationBar from "../Components/NavigationBar";
import PieChartComponent from "../Components/PieChart";
import '../Styles/Chartstyle.css';
function Chart() {
  return (
    <div>
      <NavigationBar
        menuItems={[
          { name: 'Dashboard', link: '/dashboard' },
          { name: 'Chart', link: '/chart' },
          { name: 'Mypage', link: '/mypage' },
          { name: 'input', link: '/moneyinput'}
        ]}
      />
      <div className="DashContainer">
        <h1> Check out this month's spending chart!    </h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
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
    </div>
  );
}

export default Chart;
