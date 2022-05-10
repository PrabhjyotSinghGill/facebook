import React from 'react'
import Image from "next/image"


function Header() {
  return (
    <div>
        {/*Left*/}
        <div>
            <Image src="/fb.webp" width={40} height={40}></Image>
        </div>
        {/*Center*/}
        <div></div>
        {/*Right*/}
        <div></div>
    </div>
  )
}

export default Header