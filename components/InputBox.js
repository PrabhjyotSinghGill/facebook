import React from 'react';
import Image from "next/image";
import {EmojiHappyIcon} from "@heroicons/react/outline";
import {CameraIcon, VideoCameraIcon} from "@heroicons/react/solid";
import {useRef} from "react";



function InputBox() {
    const inputRef = useRef(null);
    const sendPost = e => {
        e.preventDefault();

        if(!inputRef.current.value) return;
    };

    const addImageToPost = (e) => {};

    return <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
        <div className='flex space-x-4 p-4 items-center'>
            <Image className="rounded-full" src="/gill.jpg" width={40} height={40} layout="fixed" alt=""></Image>
            <form className='flex flex-1'>
                <input className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none" type="text" ref={inputRef} placeholder={`What's on your mind?`}></input>
                <button hidden type="submit" onClick={sendPost}>Submit</button>
            </form>
        </div>
        <div className='flex justify-evenly p-3 border-top '>
            <div className='inputIcon'>
                <VideoCameraIcon className='h-7 text-red-500'></VideoCameraIcon>
                <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
            </div>
            <div className='inputIcon'>
                <CameraIcon className='h-7 text-green-400'></CameraIcon>
                <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
                <input onChange={addImageToPost} type="file" hidden></input>
            </div>
            <div className='inputIcon'>
                <EmojiHappyIcon className='h-7 text-yellow-300'></EmojiHappyIcon>
                <p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p>
            </div>
        </div>
    </div>;
}

export default InputBox;