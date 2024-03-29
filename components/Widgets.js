import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";

const contacts = [
  { src: "/gill.jpg", name: "Prabhjyot Singh Gill" },
  { src: "/jf.jpg", name: "Jeff Bezoz" },
  { src: "/el.jpg", name: "Elon Musk" },
  { src: "/bg.webp", name: "Bill Gates" },
  { src: "/mk.jpg", name: "Mark Zuckerberg" },
];

function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>
      {contacts.map((contact) => (
        <Contact
          key={contact.src}
          src={contact.src}
          name={contact.name}
        ></Contact>
      ))}
    </div>
  );
}

export default Widgets;
