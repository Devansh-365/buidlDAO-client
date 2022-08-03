import React from 'react'
import BDButton, {ButtonType} from '../../../atoms/BDButton/BDButton'
import BuidlDAOHeroImg from '../../../../assets/BuidlDAO_Hero_Img.png'
import styles from './index.module.css'
const AboutUs = () => {
  return (
    <div className={`container mx-auto px-8 py-20 flex ${styles.aboutUs} items-center`}>
    <div className='grid grid-cols-1 lg:grid-cols-2 '>
       
        <div className='flex justify-start'>
            <img src={BuidlDAOHeroImg.src} />
        </div>
        <div className='mt-10 lg:mt-0 flex justify-center flex-col lg:w-9/12	'>
            <h1 className='text-4xl font-bold'>Introducing <span className='text-blue-500'>Buidl Token</span>, which powers BuidlDAO</h1>
            <p className='mt-3  opacity-40 text-lg'>Buidl Token is ERC-20 token on Polygon, used buy BuidlDAO to operate over chain.</p>
          
        </div>
    </div>
    </div>
  )
}

export default AboutUs