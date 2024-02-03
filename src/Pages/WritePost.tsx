import React, { useState } from 'react';
import '../Styles/WritePoststyle.css'; 
import { Link } from 'react-router-dom';

const WritePost: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const categories = ['질문', '일상', '소비차트공유'];

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
    console.log('글쓰기 기능 추가');
  };

  return (
    <div className="write-post-container">
    <div className="button-container">
      <Link to="/board">
        <button className='backbtn'>&lt;</button>
      </Link>
      <h2 style={{textAlign: "center"}}>글쓰기</h2>

      <button className='submitbtn' onClick={handleSubmit}>등록</button>
    </div>
      <label htmlFor="categorySelect">주제</label>
      <select id="categorySelect" onChange={handleCategoryChange} value={selectedCategory}>
        <option value="">카테고리 선택</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <div>
         <input type="text" id="titleInput" placeholder='제목을 입력해주세요' value={title} onChange={handleTitleChange} />
      </div>

      <div className='textareaBox'>
        <textarea id="contentTextarea" placeholder='본문에 자유롭게 글을 써보세요. 커뮤니티 가이드라인에 맞지 않는 콘텐츠는 통보없이 삭제될 수 있어요'
         value={content} onChange={handleContentChange} />
      </div>

      <div>
        <button onClick={handleImageUpload}>사진 첨부</button>
      </div>

      
    </div>
  );
};

export default WritePost;
