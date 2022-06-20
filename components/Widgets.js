import React from 'react';
import {SearchIcon} from "@heroicons/react/outline";
import {DotsHorizontalIcon, VideoCameraIcon} from "@heroicons/react/solid";
import Contact from "./Contact";

const contacts = [
    {src:"/a.jpg" , name:"Jeff Bezoz"},
    {src:"/b.jpg" , name:"Elon Musk"},
    {src:"/c.jpg" , name:"Bill Gates"},
    {src:"/d.jpg" , name:"Maek Zuckerberg"},
    {src:"/e.jpg" , name:"Harry Potter"},
    {src:"/f.jpg" , name:"The Queen"},
    {src:"/h.jpg" , name:"James Bond"},
];


function Widgets() {
    return <div className='hidden lg:flex flex-col w-60 p-2 mt-5' >
        <div className='flex justify-between items-center text-gray-500 mb-5'>
            <h2 className="text-xl">Contacts</h2>
            <div className="flex space-x-2">
                <VideoCameraIcon className="h-6"/>
                <SearchIcon className="h-6"/>
                <DotsHorizontalIcon className="h-6" />
            </div>
        </div>
        {contacts.map(contact => (<Contact key={contact.src} src={contact.src} name={contact.name}></Contact>))}
    </div>;
}

export default Widgets;