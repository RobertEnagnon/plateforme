import React from 'react'
import  './Home.css'
import Banner from '../../components/banner/Banner'
import Feed from '../../components/feed/Feed'
import QuickPremium from '../../components/quickPremium/QuickPremium'
const Home = () => {
  return (
    <div className='home'>
        <Banner/>
        <Feed/>
        <QuickPremium/>
    </div>
  )
}

export default Home