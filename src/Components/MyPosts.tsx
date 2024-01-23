import React from 'react';
import '../Styles/MyPagestyle.css'
function MyPosts () {
 
  return (
    <div>
      <div className='mypageheader'>
        <h3>작성한 게시글</h3>
      </div>
      <div className='categorybox'>
       &nbsp; <button className='postcategorybtn'>질문</button> <button className='postcategorybtn'>소비차트공유</button> <button className='postcategorybtn'>스터디</button>
      </div>
      <div className='postbox'>
        <p>작성한 게시물이 없습니다. 커뮤니티에서 질문을 시작해보세요</p>
      </div>
     </div>
  );
}

export default MyPosts;
