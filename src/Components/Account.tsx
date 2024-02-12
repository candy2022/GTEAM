import React, { useEffect, useState } from 'react';
import "../Styles/Accountstyle.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet,  faCommentDollar, faHome , faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

interface UserInfo {
  email: string;
  name: string;
  picture: string;
}
function Account() {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    // 세션 스토리지에서 정보 읽어오기
    const storedEmail = sessionStorage.getItem('email');
    const storedName = sessionStorage.getItem('name');
    const storedPicture = sessionStorage.getItem('picture');

    if (storedEmail && storedName && storedPicture) {
      const userObj: UserInfo = {
        email: storedEmail,
        name: storedName,
        picture: storedPicture,
      };
      setUserInfo(userObj);
    }
  }, []);  

  return(
       <div className='AContainer'>
        <div className='mypageheader'>
        <h3>Edit profile</h3>
      </div>
        {userInfo ? (
        <div >                
        <div className="AccountContainer">        
        <div className="profile-container">
        <img className="profileimg" src={userInfo.picture} alt="googleaccountimg" />
        <div className="profile-info">
        <h2>Hi {userInfo.name}</h2>         
        </div>      
        </div>      
       <h3><FontAwesomeIcon icon={faEnvelope} /> Email</h3>
        <div className="nickinput" >{userInfo.email}</div> 
            <p>Managed by Google</p>
         </div>
        <div className="LinkContainer">
        <Link to="/dashboard"><FontAwesomeIcon icon={faHome} /> </Link>

        <Link to="/moneybook"><FontAwesomeIcon icon={faWallet} /> </Link> 
        <Link to="/board"><FontAwesomeIcon icon={faCommentDollar} /> </Link>
         
        </div>
        <div className="AccountContainer">
        <h3>Delete account</h3> <button className="savebtn">Delete</button>
        </div>
        </div>
      ) : (
        <p>No user information available.</p>
      )}
       </div>


    )
}
export default Account;