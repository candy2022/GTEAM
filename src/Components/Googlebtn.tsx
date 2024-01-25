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
        
        <GoogleLogin
          onSuccess={handleGoogleLogin}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </GoogleOAuthProvider>   
  );
}

export default Googlebtn;