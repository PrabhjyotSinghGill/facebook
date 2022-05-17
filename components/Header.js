import React from "react";
import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";

function Header() {
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-lg">
      {/*Left*/}
      <div className="flex items-center">
        <Image src="/fb.webp" height={40} width={40} layout="fixed" alt=""></Image>
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600"></SearchIcon>
          <input
            className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
            type="text"
            placeholder="Search Facebook"
          ></input>
        </div>
      </div>
      {/*Center*/}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon}></HeaderIcon>
          <HeaderIcon Icon={FlagIcon}></HeaderIcon>
          <HeaderIcon Icon={PlayIcon}></HeaderIcon>
          <HeaderIcon Icon={ShoppingCartIcon}></HeaderIcon>
          <HeaderIcon Icon={UserGroupIcon}></HeaderIcon>
        </div>
      </div>
      {/*Right*/}
      <div className="flex items-center sm:space-x-2 justify-end">
        {/* Profile Pic */}
        <Image className="rounded-full cursor-pointer" src="/gill.jpg" width="40" height="40" layout="fixed" alt=""></Image>
        <p className="whitespace-nowrap font-semibold pr-3">
          Prabhjyot Singh Gill
        </p>
        <ViewGridIcon className="icon"></ViewGridIcon>
        <ChatIcon className="icon"></ChatIcon>
        <BellIcon className="icon"></BellIcon>
        <ChevronDownIcon className="icon"></ChevronDownIcon>
      </div>
    </div>
  );
}

export default Header;
