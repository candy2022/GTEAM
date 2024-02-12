import React from 'react';
import "../Styles/MyPagestyle.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots , faClipboardQuestion} from '@fortawesome/free-solid-svg-icons';

function GeneralSettings(){
    return(
    <div  className="helpcontainer">
        <div className='mypageheader'>
            <h3>Help Center</h3>
        </div>
        <div>
        <h2>Hi, how can we help you?</h2>
        <br />
        <h2>Notice</h2>
        <hr />
        <p>Hello, This is NEAT FIN.
            We are informing you in advance to provide better NEAT FIN services to customers who use the service.
        </p>
        <p>
        NEAT FIN has a community function that allows you to communicate with other users, unlike other applications in general.
        </p> 
        <p>
        Everyone who uses NEAT FIN is advised to refrain from writing false a post swearing and slandering.
        </p>  
        <p>
        The part of NEAT FIN's functions that can be compared to humans in a similar environment is for consumption or saving. 
        Please refrain from swearing and slander caused by this. 
        </p>     
        <p>
        NEAT FIN does not leak your information anywhere else.
        </p>  
        <br />
        <h2> <FontAwesomeIcon icon={faCommentDots} style={{fontSize: "2em"}} />  &nbsp;         
        Frequently Asked Questions</h2>
          
          <p  >
          <hr />
          <FontAwesomeIcon icon={faClipboardQuestion} style={{fontSize: "2em"}} />  &nbsp;

          Is my data secure? <br />  <br />
          Absolutely. We prioritize the security and privacy of your data. 
            All your financial information is encrypted and stored securely. 
          <br /><hr />
          <FontAwesomeIcon icon={faClipboardQuestion} style={{fontSize: "2em"}} />  &nbsp;

            Can I access the Financial Tracker on my mobile device? <br /><br />
            Yes, the Financial Tracker is available on both desktop and mobile devices.
           You can track your finances anytime, anywhere. 
          <hr />
          </p>
          <br />
        </div>
       

     </div>   
    )
}
export default GeneralSettings;