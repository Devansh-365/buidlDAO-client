import React from 'react'
import NFT from '../../../../assets/NFT.png'
const MeetOurFounders = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h2 className='text-2xl'>Meet Our Founders</h2>
        <div className='mt-16 flex flex-col justify-center items-center'>
            <img src={NFT.src} className='rounded-full my-6' width="200"/>
            <p className='font-semibold'>lakshya.eth</p>
        </div>
    </div>
  )
}

export default MeetOurFounders