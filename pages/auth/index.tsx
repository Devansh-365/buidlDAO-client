import { PageHeader } from 'antd'
import React, { useContext } from 'react'
import BuidlDAO_Logo from '../../assets/BuidlDAO_Logo.png';
import BDButton, { ButtonType } from '../../components/atoms/BDButton/BDButton';
import Footer from '../../components/pages/Web/Footer/Footer';
import Metamask from '../../assets/metamask-icon.png';
import { AppContext } from '../../components/context/AppContext';
import { useRouter } from 'next/router';
const AuthPage = () => {

    const ctx = useContext(AppContext)
   const router = useRouter();
     

  return (
    <div className='h-screen'>
        <PageHeader 
        className="site-page-header bg-white "
        onBack={() => null}
        backIcon={null}
        title={(<div className='relative'><img src={BuidlDAO_Logo.src}  /></div>)}

        />
        <div className='h-5/6'
        >
            <div className='flex justify-center items-center h-full'>
                <BDButton onClick={async () => {
                    try {
                        console.log("Connecting wallet")
                        if (ctx !== null) {
                            await ctx.connectWallet()
                        }
                        router.push("/dashboard")
                    }catch(err) {
                        alert(err);
                    }
                    
                }} buttonType={ButtonType.PrimaryGradient}><div className='flex flex-row items-center'>Login Using Metamask <img src={Metamask.src} style={{maxHeight:20}} className="ml-2"/></div></BDButton>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default AuthPage