import React from 'react'
import Logo from '../../../../assets/Logo.png'
const Footer = () => {
  return (
    <div className='bg-black p-10 flex justify-between text-white'>
        <div className='container mx-auto px-8'>
            <img src={Logo.src}/>
        </div>
        <div >
            <span className='mr-6'>Whitepaper</span>
            <span>Discord</span>
        </div>
    </div>
  )
}

export default Footer