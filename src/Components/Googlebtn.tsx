import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
interface GoogleLoginResponse {
    // Google OAuth에서 반환되는 필드들
    sub: string;
    name: string; 
    given_name: string;
    family_name: string;
    picture: string;
    email: string;
    email_verified: boolean;
    locale: string;
    
    // ... 기타 필드들 ...
  }
const Googlebtn = () => {
    const sendToServer = (credentialResponse: GoogleLoginResponse ) => {
        // credentialResponse를 서버로 전송
        fetch('/api/oauth2/callback/google', {
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
        onSuccess={(credentialResponse: GoogleLoginResponse) => {
          console.log(credentialResponse);
          //서버에 전송
          sendToServer(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </GoogleOAuthProvider>
  );
};

export default Googlebtn;