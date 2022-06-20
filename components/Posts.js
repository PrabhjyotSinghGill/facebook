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
        <Post
        key="2"
        name="Bill Gates"
        message="echo"
        email="billgates@microsoft.com"
        timestamp="9:00am"
        image="/bg.webp"
        postImage="/c.jpg"
        ></Post>
        <Post
        key="3"
        name="Jeff Bezoz"
        message="echo"
        email="jeff@amazon.com"
        timestamp="9:00am"
        image="/jf.jpg"
        postImage="/c.jpg"
        ></Post>
    </div>;
}

export default Posts;