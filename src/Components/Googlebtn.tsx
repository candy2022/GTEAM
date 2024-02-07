import React   from 'react';
import { GoogleLogin ,CredentialResponse} from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom'; 
import { jwtDecode } from "jwt-decode";
interface UserInfo {
  email: string;
  name: string;
  picture: string;
}

function Googlebtn() {
   const navigate = useNavigate();  
   const handleGoogleLogin = (credentialResponse: CredentialResponse) => {
    const userObj = jwtDecode(credentialResponse.credential as string) as UserInfo;
    console.log(userObj);
    // 세션 스토리지에 로그인 정보 저장
    sessionStorage.setItem('email', userObj.email);
    sessionStorage.setItem('name', userObj.name);
    sessionStorage.setItem('picture', userObj.picture);
 
     navigate('/dashboard');
  };
  const handleGoogleButtonClick = () => {
    // 클릭 이벤트 처리 로직을 여기에 추가
    console.log('Google 버튼이 클릭되었습니다.');
  };
  const isLoggedIn = !!sessionStorage.getItem('name'); // name이 존재하면 true, 없으면 false

  const handleLogout = () => {
    // 세션 스토리지에서 로그인 정보 삭제
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('picture');

    // 로그아웃 후 홈페이지로 리다이렉트
    navigate('/');
  };
   /* const sendToServer = (credentialResponse: CredentialResponse ) => {
      const requestBody  =JSON.stringify({credentialResponse});
         
        fetch('http://localhost:8080/api/oauth2/callback/google', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body:  requestBody ,
        })
        .then(response => response)
        .then(data => {
          console.log('서버 응답:', data);
           
        })
        .catch(error => {
          console.error('서버로 전송 중 오류 발생:', error);
        });
      };*/
  return (
<GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
{isLoggedIn ? (
        // 로그인된 경우
        <div>
           <button className='logoutbtn' onClick={handleLogout}>로그아웃</button>
          {/* 로그인된 사용자에 대한 추가 UI 또는 동작을 여기에 추가할 수 있습니다. */}
        </div>
      ) : (
        // 로그인되지 않은 경우
        <div onClick={handleGoogleButtonClick}>
          <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </div>
      )}
      </GoogleOAuthProvider>   
  );
}

export default Googlebtn;