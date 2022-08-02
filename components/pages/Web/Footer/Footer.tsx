import React from 'react'
import Logo from '../../../../assets/Logo.png'
const Footer = () => {
  return (
    <div className='bg-black p-5  text-white'>
        <div className='container mx-auto px-8 flex justify-between items-center'>
            <img src={Logo.src}/>
            <div >
            <span className='mr-6'>Whitepaper</span>
            <span>Discord</span>
            </div>
        </div>
       
    </div>
  )
}

export default Footer