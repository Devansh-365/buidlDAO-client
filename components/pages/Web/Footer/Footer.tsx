import Link from 'next/link'
import React from 'react'
import Logo from '../../../../assets/Logo.png'
const Footer = () => {
  return (
    <div className='bg-black p-5  text-white'>
        <div className='container mx-auto px-8 flex justify-between items-center'>
            <img src={Logo.src}/>
            <div >
            <span className='mr-6'><Link href="https://nonstop-heart-099.notion.site/BuidlDAO-af37e2689cd347cb9be4c2343d156493">Whitepaper</Link></span>
            <span><span className='ml-6'><Link href="https://t.me/+_drxvcsKyypkMmQ1">Telegram</Link></span></span>
            </div>
        </div>
       
    </div>
  )
}

export default Footer