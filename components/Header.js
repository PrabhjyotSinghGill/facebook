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


function Header() {
  return (
    <div>
        {/*Left*/}
        <div className='flex items-center'>
            <Image src="/fb.svg" height={40} width={100} layout="fixed"></Image>
            <div className='flex ml-2 items-center rounded-full'>
                <SearchIcon className='h-6'></SearchIcon>
                <input type="text" placeholder='Search Facebook'></input>
            </div>
        </div>
        {/*Center*/}
        <div></div>
        {/*Right*/}
        <div></div>
    </div>
  )
}

export default Header