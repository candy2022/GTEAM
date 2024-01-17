import React from 'react';
import { GoogleLogin ,CredentialResponse} from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom'; // useHistory 추가

const Googlebtn = () => {
  const navigate = useNavigate(); // useHistory 훅 사용

    const sendToServer = (credentialResponse: CredentialResponse ) => {
        // credentialResponse를 서버로 전송
        fetch('http://localhost:8080/api/oauth2/callback/google', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ credentialResponse }),
        })
        .then(response => response.json())
        .then(data => {
          console.log('서버 응답:', data);
          // 서버로부터의 추가 응답 처리
        })
        .catch(error => {
          console.error('서버로 전송 중 오류 발생:', error);
        });
      };
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
        
      <GoogleLogin
        onSuccess={(credentialResponse: CredentialResponse) => {
          console.log(credentialResponse);
          //서버에 전송
          sendToServer(credentialResponse);
          
          // Google 로그인 성공 후 대시보드 페이지로 이동
          navigate('/dashboard');

        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </GoogleOAuthProvider>
  );
};

export default Googlebtn;