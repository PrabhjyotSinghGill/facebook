import React from "react";

function Post({ name, message, email, timestamp, image, postImage }) {
  return (
    <div className="flex flex-col">
      <div>
        <div>
          <img
            className="rounded-full"
            src={image}
            width={40}
            height={40}
            alt=""
          ></img>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Post;
