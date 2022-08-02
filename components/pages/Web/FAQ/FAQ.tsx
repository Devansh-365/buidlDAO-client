import React from 'react'

const FAQ = () => {
  return (
    <div className='container mx-auto px-8 py-20 flex items-center'>
    <div className='grid grid-cols-2 '>
        <div className='flex justify-center flex-col'>
            <h1 className='text-2xl font-bold'><span className='text-blue-500'>Frequently</span> asked questions</h1>
            <p className='mt-3  opacity-40 text-lg'>Can’t find the answer you’re looking for? DM us!</p>
          
        </div>
        <div className=' flex flex-col justify-center'>
            <div className='my-8'>
                <h5 className='font-bold text-xl'>Which token BuidlDAO uses?</h5>
                <p className='text-lg'>Buidl Token is used as goverence as well currency for for BuidlDAO operations.</p>
            </div>
            <div className='my-8'>
                <h5 className='font-bold text-xl'>Do I need to stake some amount for launching a project?</h5>
                <p className='text-lg'>Yes, you would need to stake some amount for launching where your product will be reviewed by DAO.</p>
            </div>
            <div className='my-8'>
                <h5 className='font-bold text-xl'>Is it all open source?</h5>
                <p className='text-lg'>Yes, ser!</p>
            </div>
        </div>
        
    </div>
    </div>
  )
}

export default FAQ