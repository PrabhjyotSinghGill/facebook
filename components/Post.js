import React from 'react';

function Post({ name,
message,
email,
timestamp,
image,
postImage}) {
    return <div className='post'>
        <h1>{name}</h1>
    </div>
}

export default Post;