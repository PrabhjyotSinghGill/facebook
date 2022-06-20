import React from "react";
import Image from "next/image";

function Post({ name, message, email, timestamp, image, postImage }) {
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <Image
            className="rounded-full"
            src={image}
            width={40}
            height={40}
            alt=""
          ></Image>
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-xs text-gray-400">
               {
                timestamp
               } 
            </p>
          </div>
        </div>
        <p className="pt-4">{message}</p>
        <div className="relative h-56 md:h-96 bg-white ">
            <Image src={postImage} objectFit='cover' layout="fill"></Image>
        </div>
      </div>
    </div>
  );
}

export default Post;
