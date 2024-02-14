import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
import "../Styles/Boardstyle.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPencilAlt, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Board: React.FC = () => {   
   const storedPosts: Array<{
    postId: string;
    title: string;
    author: string;
    datePosted: string;
    // Add other fields accordingly
  }> = JSON.parse(localStorage.getItem('posts') || '[]');
  const truncateTitle = (title: string, maxLength = 35) => {
    if (title.length <= maxLength) {
      return title;
    } else {
      return `${title.substring(0, maxLength)}...`;
    }
  };
  return (
    <div>    
      <NavigationBar
        menuItems={[
          { name: 'Home', link: '/dashboard' },
          { name: 'Community', link: '/board' },
          { name: 'Moneybook', link: '/moneybook'},
          { name: 'Mypage', link: '/mypage' },
        ]}
      />
      <div>    
      
      <div className='boardContainer'>
      <div className='mypageheader1'>
        <h3 style={{fontSize: "2em"}}>Ask and answer together. </h3>
         <p style={{color:"darkblue"}}> Let's discuss in the community...</p>
      </div>
      <div className='boardcontent'>      
      <div className='comcontainer'> 
      <input className='search' type="text" 
        placeholder= "Enter your search term...">
       </input>
      <button className='searchbtn'><FontAwesomeIcon icon={faMagnifyingGlass} /> search</button>
      </div>
      <br />
      <div className='comcontainer'> 
      <div className='comcategorybox'>
       &nbsp; <button className='postcategorybtn'> ● Latest</button> <button className='postcategorybtn'> ● accuracy</button>   
      </div>
      <Link to="writepost" className="writebtn"><FontAwesomeIcon icon={faPencilAlt} /> Write a post</Link>
      
      </div>
      <hr />
      <table>
      <thead>
        <tr>
        <th>DatePosted</th><th>Title</th><th>Author</th><th>Views</th>
        </tr>
      </thead>
      <tbody>
      {storedPosts.map((post) => (
      <tr key={post.postId}>
        <td>
          <Link to={`/board/${post.postId}`}>{post.datePosted}</Link>
        </td>
        <td>
          <Link to={`/board/${post.postId}`}>
          {truncateTitle(post.title)}</Link>
        </td>
        <td>
          <Link to={`/board/${post.postId}`}>{post.author}</Link>
        </td>
        <td style={{ color: "#5931eb9c" }}>
          <Link to={`/board/${post.postId}`}>
            <FontAwesomeIcon icon={faHeart} />
          </Link>
        </td>
      </tr>
    ))}
      </tbody>
    </table>
      </div>
      </div>
      
      <Footer />
      </div>
    </div>
  );
};

export default Board;