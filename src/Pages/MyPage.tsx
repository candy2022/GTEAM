import React, { useState } from 'react';
import Account from '../Components/Account';
import GeneralSettings from '../Components/GeneralSettings';
import MyPosts from '../Components/MyPosts';
import NavigationBar from "../Components/NavigationBar";
import '../Styles/MyPagestyle.css';
function Mypage(){
    const [currentPage, setCurrentPage] = useState<'information' | 'settings' | 'posts'>();

    const renderPage = () => {
     switch (currentPage) {
       case 'information':
          return <Account />;
        case 'settings':
          return <GeneralSettings />;
        case 'posts':
          return <MyPosts />;
        default:
          return null;
        }
    };
    return(
        
        <div>
            <NavigationBar menuItems={[
          { name: 'Dashboard', link: '/dashboard' },
          { name: 'Chart', link: '/chart' },
          { name: 'Mypage', link: '/mypage' },
        ]}/>
        <div className="myContainer" >
        <div>
        <div style={{ display: 'flex' }}>
        <div className='myaside'>
        <h1>MyPage</h1>
        <button className="mybtn" onClick={() => setCurrentPage('information')}>정보 수정</button>
        <button  className="mybtn" onClick={() => setCurrentPage('settings')}>설정</button> 
        <button  className="mybtn" onClick={() => setCurrentPage('posts')}>내가 작성한 게시글</button>
       
        </div>             
        <div style={{ flex: 1, padding: '10px' }}>
          {renderPage()}
        </div>
      </div>
    </div>
    </div>
    </div>
    )
}
export default Mypage;