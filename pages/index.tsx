import type { NextPage } from 'next'
import { PageLayout } from '../components/templates/PageLayout/PageLayout';
import HeroSection from '../components/pages/Web/HeroSection/HeroSection';
import AboutUs from '../components/pages/Web/AboutUs/AboutUs';
import FAQ from '../components/pages/Web/FAQ/FAQ';
import MeetOurFounders from '../components/pages/Web/MeetOurFouders/MeetOurFounders';
import Footer from '../components/pages/Web/Footer/Footer';

const Home: NextPage = () => {
  return (
    <PageLayout>
      <>
        <div className=''>
            <HeroSection/>
            <AboutUs/>
            <MeetOurFounders/>
            <FAQ/>
            <Footer/>
        </div>
      </>
    </PageLayout>
  )
}

export default Home
