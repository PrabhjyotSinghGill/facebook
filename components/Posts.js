import React from 'react';
import Post from './Post';

function Posts() {
    return <div className='posts'>
        <Post
        key="1"
        name="Gill"
        message="echo"
        email="f@g.com"
        timestamp="9:00am"
        image="/gill.jpg"
        postImage="/c.jpg"
        ></Post>
    </div>;
}

export default Posts;