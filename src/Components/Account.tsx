import React, { useEffect, useState } from 'react';
import "../Styles/Accountstyle.css";
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
       <div>
        <div className='mypageheader'>
        <h3>Edit profile</h3>
      </div>
        {userInfo ? (
        <div>                
        <form action = " " className="AccountContainer">
        <h2>{userInfo.name} 's information</h2>
        <img className="profileimg" src={userInfo.picture} alt="googleaccountimg" />
        <h3>UserName</h3>
        <input className="nickinput" type="text" placeholder={userInfo.name} />
        <h3>Pronouns</h3>
        <div className="textareacontainer">
        <textarea id="myTextArea" ></textarea>
        </div>
        <br />
         
        <button className="savebtn">submit</button>
        </form>
        <div className="AccountContainer">
            <h3>Email</h3>
            <div className="nickinput" >{userInfo.email}</div> 
            <p>Managed by Google</p>
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