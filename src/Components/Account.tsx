import React from "react";
import "../Styles/Accountstyle.css";
function Account(){
    return(
       <div>
        <div className='mypageheader'>
        <h3>Account</h3>
      </div>
        <hr />
        <form action = " " className="AccountContainer">
        <h3>NeatFin에서 나를 표현하고 NeatFin을 보는 방식을 선택하세요</h3>
        <hr />
        <h3>프로필 이미지</h3>
        <img className="profileimg" src="https://cdn.inflearn.com/public/main/profile/default_profile.png" alt="googleaccountimg" />
        <button className="Accountimgbtn">변경</button>
        <p>확장자: png, jpg, jpeg/ 용량: 1MB 이하</p>
        <h3>닉네임</h3>
        <p>한글, 영문(대소문자), 숫자 조합 /2 - 18자 이하</p>
        <input className="nickinput" type="text" />
        <h3>자기소개</h3>
        <textarea id="myTextArea" rows={5} cols={50}></textarea>
        <br />
        <button className="savebtn">저장하기</button>
        </form>
        <div className="AccountContainer">
            <h3>이메일</h3>
            <input className="nickinput" type="text" />
            <button className="savebtn">저장하기</button>

        </div>
        <div className="AccountContainer">
        <h3>탈퇴</h3>
        </div>
        
       </div>


    )
}
export default Account;