import React, { useEffect, useState } from 'react';
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
import "../Styles/Dashstyle.css"
import TinyBarChart from '../Components/TinyBarChart';
import { Link } from 'react-router-dom';
import { Money } from '../Components/types';
interface UserInfo {     
    name: string;
    
  }
function Dashboard(){
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    const [transactionHistory, setTransactionHistory] = useState<Money[]>([]);
    const [moneys, setMoneys] = useState<Money[]>([]);
    const [averageAmount, setAverageAmount] = useState<number | null>(null);

    const [totalExpenses, setTotalExpenses] = useState<number>(0);
    const [totalIncome, setTotalIncome] = useState<number>(0);
    const [totalExpensesCount, setTotalExpensesCount] = useState<number>(0);
    const [totalIncomesCount, setTotalIncomesCount] = useState<number>(0);
 
 
    useEffect(() => {
        
        const storedName = sessionStorage.getItem('name');
     
        if ( storedName ) {
          const userObj: UserInfo = {            
            name: storedName,            
          };
          setUserInfo(userObj);
        }
        const storedMoneys = localStorage.getItem("moneys");
        if (storedMoneys) {
            const moneys: Money[] = JSON.parse(storedMoneys); 
            setMoneys(moneys);
           
            const reversedMoneys = moneys.reverse();        
                 
            setTransactionHistory(reversedMoneys.slice(0, 2));  
            const currentMonthMoneys = moneys.filter(
              (money) => new Date(money.date).getMonth() + 1 === new Date().getMonth() + 1
            
          );
 
          const totalExpenses = currentMonthMoneys
              .filter((money) => money.type === "expense")
              .reduce((sum, money) => sum + Number(money.amount), 0);
  
          const totalIncome = currentMonthMoneys
              .filter((money) => money.type === "income")
              .reduce((sum, money) => sum + Number(money.amount), 0);
  
             
          setTotalExpenses(totalExpenses);
          setTotalIncome(totalIncome);
          const totalExpensesCount = currentMonthMoneys.filter((money) => money.type === "expense").length;
          setTotalExpensesCount(totalExpensesCount);
          const totalIncomesCount = currentMonthMoneys.filter((money) => money.type === "income").length;
          setTotalIncomesCount(totalIncomesCount);
          const currentDate = new Date();
          const currentMonth = currentDate.getMonth() + 1;
      
          const past6MonthsMoneys = moneys.filter(
            (money) =>
              new Date(money.date).getMonth() + 1 >= currentMonth - 5 &&
              new Date(money.date).getMonth() + 1 <= currentMonth
          );
      
          const totalAmount = past6MonthsMoneys.reduce((sum, money) => sum + Number(money.amount), 0);
          const average = totalAmount / past6MonthsMoneys.length;
      
          setAverageAmount(Math.round(average));
          }
          
       }, []);  
       const currentMonth = new Date().toLocaleDateString('en-US', { month: 'long' });
       const currentDate = new Date();

       const previousMonthDate = new Date(currentDate);
       previousMonthDate.setMonth(currentDate.getMonth() - 1);
       const previousMonth = previousMonthDate.toLocaleDateString('en-US', { month: 'long' });
       const currentM = currentDate.getMonth() + 1;

      const previousM = (currentM - 1 + 12) % 12;
       
       const currentMonthTotal = moneys
         .filter((money) => new Date(money.date).getMonth() + 1 === currentM)
         .reduce((sum, money) => sum + Number(money.amount), 0);
     
       const previousMonthTotal = moneys
         .filter((money) => new Date(money.date).getMonth() + 1 === previousM)
         .reduce((sum, money) => sum + Number(money.amount), 0);
     
       const difference = currentMonthTotal - previousMonthTotal;
     
 
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
         <h3>{currentMonth} full details</h3>
    <h2><span style={{color:"darkblue"}}>₩{totalExpenses + totalIncome}</span></h2>
    <hr />
     <p>Expenses Transactions: {totalExpensesCount}   &nbsp;<span>₩{totalExpenses}</span></p>
    <br />
    <p>Income Transactions: {totalIncomesCount} &nbsp;<span>₩{totalIncome}</span></p>

         </div>
         <div className='chartBox'> 
         <h2>You spent <span style={{color: "darkblue"}}>₩{difference} more</span> than in {previousMonth}.</h2>
         {averageAmount !== null && (
        <p>The average transaction amount for the past 6 months is ₩{averageAmount}</p>
        )}
         <br />
         <div className='barChartBox'> <TinyBarChart moneys={moneys}/></div>
         </div>
         <div className='DetailBox2'>
         <h2>Transaction History</h2>
          {transactionHistory.map((transaction) => (
            <p key={transaction.id}>
                {transaction.detail} <span>{Number(transaction.amount).toLocaleString()} ₩</span>
            </p>
           ))}
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