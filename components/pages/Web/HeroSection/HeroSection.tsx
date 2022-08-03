import React from 'react'
import BDButton, {ButtonType} from '../../../atoms/BDButton/BDButton'
import BuidlDAOHeroImg from '../../../../assets/BuidlDAO_Hero_Img.png'
import styles from './index.module.css'
const HeroSection = () => {
  return (
    <div className={`container mx-auto px-8 h-screen flex items-center ${styles.heroSection}`}>
        <div className='grid lg:grid-cols-2 grid-cols-1'>
            <div className='flex justify-center flex-col'>
                <h1 className='text-6xl font-bold'><span className='text-blue-500'>Buidl</span> and launch <br/>in decentralised world</h1>
                <p className='mt-3  opacity-40 text-lg'>Platform which helps buidlers to launch their projects in crypto space. Creators gets rewarded for their creations.</p>
                <div className='mt-8'>
                    <BDButton buttonType={ButtonType.PrimaryGradient}><span>Coming Soon</span></BDButton>
                </div>
            </div>
            <div className='flex lg:justify-end justify-center mt-16 lg:mt-0'>
                <img src={BuidlDAOHeroImg.src} />
            </div>
        </div>
    </div>
  )
}

export default HeroSection