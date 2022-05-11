import React from 'react'
import Image from "next/image"
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
import HeaderIcon from './HeaderIcon';


function Header() {
  return (
    <div>
        {/*Left*/}
        <div className='flex items-center'>
            <Image src="/fb.webp" height={40} width={40} layout="fixed"></Image>
            <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
                <SearchIcon className='h-6'></SearchIcon>
                <input className='flex ml-2 items-center bg-transparent outline-none placeholder-gray-500' type="text" placeholder='Search Facebook'></input>
            </div>
        </div>
        {/*Center*/}
        <div>
            <div className='flex justify-center flex-grow'>
                <HeaderIcon Icon={HomeIcon}></HeaderIcon>
                <HeaderIcon Icon={FlagIcon}></HeaderIcon>
                <HeaderIcon Icon={PlayIcon}></HeaderIcon>
                <HeaderIcon Icon={ShoppingCartIcon}></HeaderIcon>
                <HeaderIcon Icon={UserGroupIcon}></HeaderIcon>
            </div>
        </div>
        {/*Right*/}
        <div></div>
    </div>
  )
}

export default Header