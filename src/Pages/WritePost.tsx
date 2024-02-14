import React, { useState } from 'react';
import '../Styles/WritePoststyle.css'; 
import { Link , useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import NavigationBar from "../Components/NavigationBar";

const WritePost: React.FC = () => {
  const navigate = useNavigate();  
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const storedName = sessionStorage.getItem('name');
  const storedPicture = sessionStorage.getItem('picture');

  const categories = ['question', 'daily', 'Share chart'];

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  const handleImageUpload = () => {
    console.log('이미지 업로드 기능 추가');
  };

  const handleSubmit = () => {
    if (!selectedCategory || !title || !content) {
      alert('모든 필드를 채워주세요.');
      return;  
    }

     const postId: string = new Date().getTime().toString();
     const formattedDate = new Date().toISOString().slice(0, 10);

    const post: {
      postId: string;
      title: string;
      author: string;
      selectedCategory: string;
      content: string;
      datePosted: string;
      authorPicture: string;
    } = {
      postId,
      title,
      author: storedName || 'Anonymous',
      selectedCategory,
      content,
      datePosted: formattedDate,
      authorPicture: storedPicture || 'NOPicture',
    };
  
     const existingPosts: Array<{
      postId: string;
      title: string;
      author: string;
      selectedCategory: string;
      content: string;
      datePosted: string;
      authorPicture: string;
      // Add other fields accordingly
    }> = JSON.parse(localStorage.getItem('posts') || '[]');
  
     existingPosts.push(post);
  
     localStorage.setItem('posts', JSON.stringify(existingPosts));
     const confirmation = window.confirm('제출되었습니다. 확인을 누르면 게시판으로 이동합니다.');
    
     if (confirmation) {
      navigate('/board');

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

    <div className="write-post-container">
    <div className="button-container">
      <Link to="/board">
        <button className='backbtn'> <FontAwesomeIcon icon={faChevronLeft} /> </button>
      </Link>
      <h2 style={{textAlign: "center"}}>write a post</h2>

      <button className='submitbtn' onClick={handleSubmit}>submit</button>
    </div>
      <label htmlFor="categorySelect">Subject</label>
      <select id="categorySelect" onChange={handleCategoryChange} value={selectedCategory}>
        <option value="">select a category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <div>
         <input type="text" id="titleInput" placeholder='Please enter the subject' value={title} onChange={handleTitleChange} />
      </div>

      <div className='textareaBox'>
        <textarea id="contentTextarea" placeholder=' Please feel free to write in the text.
        Content that does not comply with the community guidelines may be deleted without notice.'
         value={content} onChange={handleContentChange} />
      </div>

      
        <button className="submitbtn" onClick={handleImageUpload}>upload photo</button>
      

      </div>
    </div>
  );
};

export default WritePost;
