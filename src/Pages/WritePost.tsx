import React, { useState } from 'react';
import '../Styles/WritePoststyle.css'; 
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

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

      <div>
        <button className="submitbtn" onClick={handleImageUpload}>upload photo</button>
      </div>

      
    </div>
  );
};

export default WritePost;
