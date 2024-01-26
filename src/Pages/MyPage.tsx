import React, { useState } from 'react';
import Account from '../Components/Account';
import GeneralSettings from '../Components/GeneralSettings';
import MyPosts from '../Components/MyPosts';
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";

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
          { name: 'Moneybook', link: '/moneybook'},

        ]}/>
        <div className="myContainer" >
        <div>
        <div style={{ display: 'flex' }}>
        <div className='myaside'>
        <h2>MyPage</h2>
        <button className="mybtn" onClick={() => setCurrentPage('information')}>Account</button>
        <button  className="mybtn" onClick={() => setCurrentPage('posts')}>Posts</button>
        <button  className="mybtn" onClick={() => setCurrentPage('settings')}>Help Center</button> 

        </div>             
        <div style={{ flex: 1, padding: '10px' }}>
          {renderPage()}
        </div>
      </div>
    </div>
    <Footer />
    </div>
    </div>
    )
}
export default Mypage;