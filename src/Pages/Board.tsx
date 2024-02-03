import React from 'react';
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
import "../Styles/Boardstyle.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Board: React.FC = () => {   
 
  return (
    <div>    
      <NavigationBar
        menuItems={[
          { name: 'Dashboard', link: '/dashboard' },
          { name: 'Community', link: '/board' },
          { name: 'Mypage', link: '/mypage' },
          { name: 'Moneybook', link: '/moneybook'}
        ]}
      />
      <div>    
      
      <div className='boardContainer'>
      <div className='mypageheader'>
        <h3>묻고 답해요 </h3>
         <p style={{color:"white"}}>커뮤니티에서 함께 토론해봐요.</p>
      </div>
      <div className='boardcontent'>      
      <div className='comcontainer'> 
      <input className='search' type="text" 
        placeholder= "검색어를 입력하세요">
       </input>
      <button className='searchbtn'><FontAwesomeIcon icon={faMagnifyingGlass} /> 검색</button>
      </div>
      <br />
      <div className='comcontainer'> 
      <div className='comcategorybox'>
       &nbsp; <button className='postcategorybtn'> ● 최신순</button> <button className='postcategorybtn'> ● 정확도순</button>   
      </div>
      <Link to="writepost" className="writebtn"><FontAwesomeIcon icon={faPencilAlt} /> 글쓰기</Link>
      
      </div>
      <hr />
      </div>
      </div>
      
      <Footer />
      </div>
    </div>
  );
};

export default Board;
