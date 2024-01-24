import React  from 'react';
import { GoogleLogin ,CredentialResponse} from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom'; 
import { jwtDecode } from "jwt-decode";
function Googlebtn() {
   const navigate = useNavigate();  
   
    const sendToServer = (credentialResponse: CredentialResponse ) => {
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
      };
  return (
<GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
        
        <GoogleLogin
          onSuccess={(credentialResponse: CredentialResponse) => {
            //console.log(credentialResponse.credential);
            const userobj = jwtDecode(credentialResponse.credential as string);
            console.log(userobj);
            navigate('/dashboard');
             
            //window.localStorage.setItem("token" , userobj);
            sendToServer(credentialResponse);           
  
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </GoogleOAuthProvider>   
  );
}

export default Googlebtn;