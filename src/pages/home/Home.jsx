import React from 'react'
import  './Home.css'
import Banner from '../../components/banner/Banner'
import Feed from '../../components/feed/Feed'
import QuickPremium from '../../components/quickPremium/QuickPremium'
import TutorielFeed from '../../components/tutorielFeed/TutorielFeed'
import HomeFooter from '../../components/homeFooter/HomeFooter'
const Home = () => {
  return (
    <div className='home'>
        <Banner/>
        <Feed/>
        <QuickPremium/>
        <TutorielFeed/>
        <HomeFooter/>
    </div>
  )
}

export default Home