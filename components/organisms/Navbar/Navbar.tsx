import { Button, Drawer, PageHeader } from 'antd';
import Link from 'next/link';
import React, { useState } from 'react';
import BuidlDAO_Logo from '../../../assets/BuidlDAO_Logo.png';
import BDButton, {ButtonType} from '../../atoms/BDButton/BDButton';
const Navbar: React.FC  = () => {
    const [visible, setVisible] = useState(false);

    return (
        <PageHeader
        className="site-page-header fixed w-screen bg-white z-50 top-0 "
        onBack={() => null}
        backIcon={null}
        extra={(
             <>
             <div className='hidden lg:block'>
                <div className='flex justify-between items-center '>
        
                <div>
                <BDButton buttonType={ButtonType.SecondaryGradient}><>Coming soon</></BDButton>
                </div>
                </div>
             </div>
             <div className='block lg:hidden'>
                <BDButton onClick={() => setVisible(true)} buttonType={ButtonType.SecondaryGradient}><>Menu</></BDButton>
                 <Drawer visible={visible} onClose={() => setVisible(false)}>
                 <div >
                    
                    <div className='text-black font-semibold '>
                        <p className='mb-6 '>About Us</p>
                        <p className='mb-6'><Link href="https://nonstop-heart-099.notion.site/BuidlDAO-af37e2689cd347cb9be4c2343d156493">Whitepaper</Link></p>
                        <p className='mb-6' ><Link href="https://t.me/+_drxvcsKyypkMmQ1">Telegram</Link></p>
                        <BDButton buttonType={ButtonType.SecondaryGradient}><>Coming soon</></BDButton>

                    </div>
                </div>
                 </Drawer>
             </div>
             </>
            )}
            title={(<div className='relative'><img src={BuidlDAO_Logo.src}  /></div>)}
            subTitle={(
               <div className='hidden lg:block'>
                 <div className='flex justify-between items-center'>
                    <div className='text-black font-semibold'>
                        <span className='ml-6 '>About Us</span>
                        <span className='ml-6'><Link href="https://nonstop-heart-099.notion.site/BuidlDAO-af37e2689cd347cb9be4c2343d156493">Whitepaper</Link></span>
                        <span className='ml-6'><Link href="https://t.me/+_drxvcsKyypkMmQ1">Telegram</Link></span>
                    </div>
                </div>
               </div>
            )}
            
        />
    )
}

export default Navbar