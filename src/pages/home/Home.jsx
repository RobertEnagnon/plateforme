import React from 'react'
import  './Home.css'
import Banner from '../../components/banner/Banner'
import Feed from '../../components/feed/Feed'
import QuickPremium from '../../components/quickPremium/QuickPremium'
import TutorielFeed from '../../components/tutorielFeed/TutorielFeed'
const Home = () => {
  return (
    <div className='home mainBg'>
        <Banner/>
        <Feed/>
        <QuickPremium/>
        <TutorielFeed/>  
    </div>
  )
}

export default Home