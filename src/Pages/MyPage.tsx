import React, { useState } from 'react';
import Account from '../Components/Account';
import GeneralSettings from '../Components/GeneralSettings';
import MyPosts from '../Components/MyPosts';
import NavigationBar from '../Components/NavigationBar';
import Footer from '../Components/Footer';
import Chart from '../Components/Chart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faChartPie, faPenToSquare, faComment,  faList  } from '@fortawesome/free-solid-svg-icons';

import '../Styles/MyPagestyle.css';

function Mypage() {
  const [currentPage, setCurrentPage] = useState<'information' | 'settings' | 'posts' | 'chart'>();
  const [sidebarHidden, setSidebarHidden] = useState(false);

  const toggleSidebar = () => {
    setSidebarHidden(!sidebarHidden);
  };

  const hideSidebar = () => {
    setSidebarHidden(true);
  };

  const renderPage = () => {
    
    switch (currentPage) {
      case 'information':
        return <Account />;
      case 'settings':
        return <GeneralSettings />;
      case 'posts':
        return <MyPosts />;
      case 'chart':
        return <Chart />;
      default:
        return <Account />;
    }
  };

  return (
    <div>
      <NavigationBar menuItems={[
        { name: 'Home', link: '/dashboard' },
        { name: 'Community', link: '/board' },
        { name: 'Moneybook', link: '/moneybook' },
        { name: 'Mypage', link: '/mypage' },
      ]} />

      <div className="myContainer1 ">
        <div>
          <div style={{ display: 'flex' }}>
            <div className={`myaside ${sidebarHidden ? 'hidden' : ''}`}>
              <h2>MyPage</h2>
              <br />
              <button className="mybtn" onClick={() => { toggleSidebar(); setCurrentPage('information'); }}>
              <FontAwesomeIcon icon={faUser} /> Account</button>
              <button className="mybtn" onClick={() => { toggleSidebar(); setCurrentPage('chart');}}>
              <FontAwesomeIcon icon={faChartPie} /> Chart</button>
              <button className="mybtn" onClick={() => { toggleSidebar(); setCurrentPage('posts');}}>
              <FontAwesomeIcon icon={faPenToSquare} /> Posts</button>
              <button className="mybtn" onClick={() => { toggleSidebar(); setCurrentPage('settings');}}>
              <FontAwesomeIcon icon={faComment} />  Help Center</button>
             </div>
             <button className={`toggle-btn ${sidebarHidden ? 'hidden' : ''}`} onClick={() => toggleSidebar()}> <FontAwesomeIcon icon={faList} /> </button>

            <div className={`mycon ${sidebarHidden ? 'move-left' : ''}`} onClick={hideSidebar}>
              {renderPage()}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Mypage;
