import React from 'react';
import Image from "next/image";

function InputBox() {
    const sendPost = e => {
        e.preventDefault();
    };

    return <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
        <div className='flex space-x-4 p-4 items-center'>
            <Image className="rounded-full" src="/gill.jpg" width={40} height={40} layout="fixed" alt=""></Image>
            <form className='flex flex-1'>
                <input className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none" type="text" placeholder={`What's on your mind?`}></input>
                <button hidden type="submit" onClick={sendPost}>Submit</button>
            </form>
        </div>
    </div>;
}

export default InputBox;