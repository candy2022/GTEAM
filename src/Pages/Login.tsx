import React from "react";
import Googlebtn from "../Components/Googlebtn";
import "../Styles/Login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
function Login(){
    return(
         <>
    <div id="wrap">
    <header>
      <a className="logo" href="#home"> <img src="https://avatars.githubusercontent.com/u/155896979?s=200&v=4" alt="logoimg" /></a>
      <nav>
        <ul className="nav-items">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
         <li><Googlebtn /></li> 
        </ul>
      </nav>
    </header>
    <div id="content-wrap">       
      <section>
        <article id="home">
           <h1>With <span style={{color: "#5931eb"}}>NeatFin</span> <br />
            gain a clear overview of your expenses and income,<br />
             and achieve a better financial status<br />
            
           </h1>
           <img className="img1" src="https://avatars.githubusercontent.com/u/155896979?s=200&v=4" alt="img" />
           <h3>            
            Ease your concerns about your finances. <br />
            Let's embark on a journey towards a brighter future together. 
            We are here to assist you in experiencing a more joyful financial state. <br />
            Discover the path to financial well-being with our user-friendly tools and personalized guidance. <br />
            Take control of your money, plan for your goals, and enjoy the peace of mind that comes with Neatfin's financial solutions.
            Your success is our priority,
            and we're dedicated to supporting you every step of the way.

            </h3> 
            </article>
        <article id="about">
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
        <article id="contact">           
          <h1>Contact</h1>
          <h2>Please ask any questions you may have when using NeatFin.</h2>
          <a href="https://github.com/Neat-Fin" className="github-button" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
             Visit Github
            </a>
           </article>
      </section>     
    </div>
    <footer>© Copyright 2024 Neatfin</footer> 
  </div>
    </>
    )
}
export default Login;