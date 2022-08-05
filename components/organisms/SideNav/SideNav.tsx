import { Divider } from 'antd'
import React from 'react'
import Logo from '../../../assets/Logo.png'
import HomeIcon from '../../../assets/HomeIcon.png'
import HeartIcon from '../../../assets/HeartIcon.png'
import { useRouter } from 'next/router'
const SideNav = () => {

    const router = useRouter();
  return (
    <div className='flex flex-col items-center justify-between h-full p-3 border-r-2 border-solid'>
        <div>
            <img src={Logo.src}/>
        </div>
        <div>
            <img src={HomeIcon.src} className="mb-6 cursor-pointer" onClick={() => router.push("/dashboard")}/>
            <img src={HeartIcon.src} className="mb-6 cursor-pointer" onClick={() => router.push("/product")}/>
        </div>
        
        <div>
            {/* <Divider/>
            Three */}
        </div>
    </div>
  )
}

export default SideNav