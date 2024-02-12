import React, { useState } from 'react';
import Account from '../Components/Account';
import GeneralSettings from '../Components/GeneralSettings';
import MyPosts from '../Components/MyPosts';
import NavigationBar from '../Components/NavigationBar';
import Footer from '../Components/Footer';
import Chart from '../Components/Chart';
import '../Styles/MyPagestyle.css';

function Mypage() {
  const [currentPage, setCurrentPage] = useState<'information' | 'settings' | 'posts' | 'chart'>();
  const [sidebarHidden, setSidebarHidden] = useState(false);

  const toggleSidebar = () => {
    setSidebarHidden(!sidebarHidden);
  };

  const hideSidebar = () => {
    setSidebarHidden(false);
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

      <div className={`myContainer1 ${sidebarHidden ? 'full-width' : ''}`}>
        <div>
          <div style={{ display: 'flex' }}>
            <div className={`myaside ${sidebarHidden ? 'hidden' : ''}`}>
              <h2>MyPage</h2>
              <button className="mybtn" onClick={() => { toggleSidebar(); setCurrentPage('information'); }}>Account</button>
              <button className="mybtn" onClick={() => { toggleSidebar(); setCurrentPage('chart');}}>Chart</button>
              <button className="mybtn" onClick={() => { toggleSidebar(); setCurrentPage('posts');}}>Posts</button>
              <button className="mybtn" onClick={() => { toggleSidebar(); setCurrentPage('settings');}}>Help Center</button>
             </div>
            <div className={`mycon ${sidebarHidden ? 'move-left' : ''}`} onClick={hideSidebar}>
              <button className="toggle-btn" onClick={toggleSidebar}>&gt;</button>
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
