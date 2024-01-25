import React from 'react';
import '../Styles/MyPagestyle.css'
function MyPosts () {
 
  return (
    <div>
      <div className='mypageheader'>
        <h3>Posts</h3>
      </div>
      <div className='categorybox'>
       &nbsp; <button className='postcategorybtn'>질문</button> <button className='postcategorybtn'>소비차트공유</button> <button className='postcategorybtn'>스터디</button>
      </div>
      <div className='postbox'>
        <p>You haven't posted anything <br />
        when you create a post, it'll show up here</p>
      </div>
     </div>
  );
}

export default MyPosts;
