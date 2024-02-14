import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import NavigationBar from '../Components/NavigationBar';
import Footer from '../Components/Footer';
import "../Styles/PostDetailstyle.css";

const PostDetail: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const Navigate = useNavigate();

  const storedPosts: Array<{
    postId: string;
    title: string;
    author: string;
    datePosted: string;
    authorPicture: string;
    content: string; // 추가: 글 내용
    // Add other fields accordingly
  }> = JSON.parse(localStorage.getItem('posts') || '[]');

  const post = storedPosts.find((p) => p.postId === postId);

  if (!post) {
    return <div>글을 찾을 수 없습니다.</div>;
  }

  const handleDelete = () => {
    const confirmed = window.confirm('삭제하시겠습니까?');

    if (confirmed) {
      const updatedPosts = storedPosts.filter(p => p.postId !== postId);
      localStorage.setItem('posts', JSON.stringify(updatedPosts));

      // 삭제 후 목록으로 이동
      Navigate('/board');
    }
  };

  return (
    <div>
      <NavigationBar
        menuItems={[
          { name: 'Home', link: '/dashboard' },
          { name: 'Community', link: '/board' },
          { name: 'Moneybook', link: '/moneybook' },
          { name: 'Mypage', link: '/mypage' },
        ]}
      />
      <div className='pdContainer'>
        <h2>{post.title}</h2>
        <div className='pdPicture' >
          <img style={{ borderRadius: '50%', marginRight: '5vw' }} src={post.authorPicture} alt="author picture" />
          <div>
            <h3> {post.author}</h3>
            <p> {post.datePosted}</p>
          </div>
           
        </div>
        <hr />
        <div className='postContent'>
          <p>{post.content}</p>
        </div>
        <Link to="/board">
          <button className='listbtn'>back</button>     
        </Link>
        <button className='delbtn' onClick={handleDelete}>delete</button>

      </div>
      <Footer />
    </div>
  );
};

export default PostDetail;
