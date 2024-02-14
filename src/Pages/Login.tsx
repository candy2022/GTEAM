import React  from "react";
 import "../Styles/Login.css";
import Footer from "../Components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import NavigationBar from "../Components/NavigationBar";
import Googlebtn from "../Components/Googlebtn";
function Login(){
  
    return(
         <>
    <div className="wrap">
 
    <NavigationBar menuItems={[
          { name: 'Home', link: '#home' },
          { name: 'About', link: '#about' },
          { name: 'Service', link:'#service'          },
          { name: 'Contact', link: '#contact' },
        ]}/>
    <div className="content-wrap">       
      <section>
        <article id="home">
          <br />
           <h1>With <span style={{color: "#5931eb"}}>NeatFin</span> <br />
            gain a clear overview of your expenses and income,<br />
             and achieve a better financial status
            
           </h1>
            
            <Googlebtn />

            <img className="img1" src="/src/assets/mainimg1.png" alt="img" />
            <h3 style={{color: "#555"}}>            
            Ease your concerns about your finances.  
            Let's embark on a journey towards a brighter future together. 
            We are here to assist you in experiencing a more joyful financial state.  
            Discover the path to financial well-being with our user-friendly tools and personalized guidance. <br />
            Take control of your money, plan for your goals, and enjoy the peace of mind that comes with Neatfin's financial solutions.
            Your success is our priority,
            and we're dedicated to supporting you every step of the way.

            </h3>
            </article>
        <article id="about">
          <br />
          <h1>About</h1>
          
           <h2>Take a look at NeatFin's main features.</h2>
           <div className="container">
         <div className="text1">
            <h3  style={{ whiteSpace: "pre-line"}}>
            <span style={{color: "#5931ebe1"}}>Clean and Beautiful Charts </span> </h3>
            <p>
Gain a quick understanding of your expenses and income with visually appealing charts.
Neatly organized charts by period allow you to grasp your financial status at a glance.
            </p>
            <h3>
            <span style={{color: "#5931ebe1"}}> Easy Expense Input </span> </h3>
            <p>Input your expenses effortlessly and categorize them with our intuitive and user-friendly interface.
Manage your budget seamlessly without any hassle.
</p> 
           
         </div>
        <div className="text2">           
        <h3>
            <span style={{color: "#5931ebe1"}}> Automatic Entry with Receipt Photos </span></h3>
            <p>
Snap a photo of your receipt, and let our system automatically record the details for you.
Record your spending without the need for manual data entry.
            </p>
            <h3>
            <span style={{color: "#5931ebe1"}}> Community for Sharing Expenses and Insights </span></h3>
            <p> Join our community to share your spending details and engage with diverse users.
Exchange valuable tips on financial management and share experiences with others.
            </p>
         </div>
        </div>
        </article>       
          
        <article id="service">          
          <h1>Our Service</h1>          
          <div className="container2">
         <div className="text1">
         <h3 style={{color: "#555"}}>Take control of your finances</h3>
           <h2>Gain a Clear Overview of Your Finances.</h2>
           <br />
          <hr />
          <br />
           <h3> Expense Tracking</h3>
           <h3 style={{color: "#555"}}>          
           Easily track your expenses and categorize them to understand where your money is going.
           </h3>
           <h3>Income Management</h3>
           <h3 style={{color: "#555"}}>           
           Keep track of your income sources and monitor your earnings to achieve your financial goals.
           </h3>
         </div>
        <div className="text2">           
        <img className="img2" src="/src/assets/mainimg2.png" alt="img" />

         </div>
        </div>
           </article>      
        <article id="contact">           
          
          <h2>Frequently Asked Questions</h2>
          <div className="contactbox">
          <h3>
          <hr />
          Is my data secure? <br />          
          <span>Absolutely. We prioritize the security and privacy of your data. 
            All your financial information is encrypted and stored securely.</span>
          <br /><hr />
            Can I access the Financial Tracker on my mobile device? <br />
          <span>Yes, the Financial Tracker is available on both desktop and mobile devices.
           You can track your finances anytime, anywhere.</span>
          <hr />
          </h3>
          <br />
          
          <h2>Contact <br /> 
            Please ask any questions you may have when using NeatFin.</h2>
          <a href="https://github.com/Neat-Fin" className="github-button" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
             Visit Github
            </a>
          </div>
          
           </article>
      </section>     
    </div>
    <Footer />
  </div>
    </>
    )
}
export default Login;