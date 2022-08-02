import React from 'react'
import BDButton, {ButtonType} from '../../../atoms/BDButton/BDButton'
import BuidlDAOHeroImg from '../../../../assets/BuidlDAO_Hero_Img.png'
const HeroSection = () => {
  return (
    <div className='container mx-auto px-8 h-screen flex items-center'>
        <div className='grid grid-cols-2 '>
            <div className='flex justify-center flex-col'>
                <h1 className='text-6xl font-bold'><span className='text-blue-500'>Buidl</span> and launch <br/>in decentralised world</h1>
                <p className='mt-3  opacity-40 text-lg'>Platform which helps buidlers to launch their projects in crypto space. Creators gets rewarded for their creations.</p>
                <div className='mt-8'>
                    <BDButton buttonType={ButtonType.PrimaryGradient}><>Coming Soon</></BDButton>
                </div>
            </div>
            <div className='flex justify-end'>
                <img src={BuidlDAOHeroImg} />
            </div>
        </div>
    </div>
  )
}

export default HeroSection