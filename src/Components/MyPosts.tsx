import React from 'react';
import '../Styles/MyPagestyle.css'
function MyPosts () {
 
  return (
    <div className='postContainer'>
      <div className='mypageheader'>
        <h3>Posts</h3>
      </div>
      <div className='categorybox'>
 
       &nbsp; <button className='postcategorybtn'>question</button>
        <button className='postcategorybtn'>daily</button>
         <button className='postcategorybtn'>Share chart</button>
      </div>
      <div className='postbox'>
        <p>You haven't posted anything <br />
        when you create a post, it'll show up here</p>
      </div>
     </div>
  );
}

export default MyPosts;
