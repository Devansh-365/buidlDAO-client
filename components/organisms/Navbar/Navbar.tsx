import { Button, PageHeader } from 'antd';
import React from 'react';
import BuidlDAO_Logo from '../../../assets/BuidlDAO_Logo.svg';
import BDButton, {ButtonType} from '../../atoms/BDButton/BDButton';
const Navbar: React.FC  = () => {
    return (
        <PageHeader
        className="site-page-header fixed w-screen bg-white z-50"
        onBack={() => null}
        backIcon={null}
        extra={(<div className='flex justify-between items-center '>
        
        <div>
           <BDButton buttonType={ButtonType.SecondaryGradient}><>Coming soon</></BDButton>
        </div>
    </div>)}
        title={(<div className='relative'><img src={BuidlDAO_Logo}  /></div>)}
        subTitle={(
            <div className='flex justify-between items-center'>
                <div className='text-black font-semibold'>
                    <span className='ml-6 '>About Us</span>
                    <span className='ml-6'>Whitepaper</span>
                    <span className='ml-6'>Discord</span>
                </div>
            </div>
        )}
        
    />
    )
}

export default Navbar