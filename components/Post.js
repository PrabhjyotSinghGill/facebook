import React from "react";
import Image from "next/image";
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";

function Post({ name, message, email, timestamp, image, postImage }) {
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <Image
            className="rounded-full"
            objectFit="cover"
            src={image}
            width={40}
            height={40}
            alt=""
          ></Image>
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-xs text-gray-400">{timestamp}</p>
          </div>
        </div>
        <p className="pt-4">{message}</p>
        {postImage && (
          <div className="relative h-56 md:h-96 bg-white ">
            <Image
              src={postImage}
              objectFit="cover"
              layout="fill"
              alt=""
            ></Image>
          </div>
        )}
        <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
          <div className="inputIcon rounded-none rounded-bl-2xl">
            <ThumbUpIcon className="h-4"></ThumbUpIcon>
            <p className="text-xs sm:text-base">Like</p>
          </div>
          <div className="inputIcon rounded-none">
            <ChatAltIcon className="h-4"></ChatAltIcon>
            <p className="text-xs sm:text-base">Comment</p>
          </div>
          <div className="inputIcon rounded-none rounded-br-2xl">
            <ShareIcon className="h-4"></ShareIcon>
            <p className="text-xs sm:text-base">Share</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
