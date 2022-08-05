import React from 'react'
import BDButton , {ButtonType} from '../../atoms/BDButton/BDButton'
import ProjectList from '../../organisms/ProjectList/ProjectList'
import styles from './index.module.css'
const MainContent = () => {
  return (
    <div className='p-6 grid grid-cols-8 h-full' style={{backgroundColor:"#F8F8F8"}}>
        <div className='col-span-6 p-6'>
            
                <div  className={styles.mainContent_hero}>
                    <div className='col-span-5'>
                        <p className='text-4xl font-bold'> Buidl and launch<br/> in decentralised world</p>
                        <div className='flex mt-6'>
                            <BDButton className='px-6 rounded-full'><span className='text-white'>Create </span></BDButton>
                        </div>
                    </div>
                    <div className='col-span-5'>
                        <p className='text-white font-light leading-8 text-lg'>
                        Platform which helps buidlers to launch their projects in crypto space. Creators gets rewarded for their creations.
                        </p>
                    </div>
                </div>
                <div className='mt-16'>
                    <ProjectList/>
                </div>
        </div>
        <div className='col-span-2'>
            BLOG PAGE
        </div>
    </div>
  )
}

export default MainContent