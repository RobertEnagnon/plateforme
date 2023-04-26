import React from 'react'
import  './Home.css'
import Banner from '../../components/banner/Banner'
import Feed from '../../components/feed/Feed'
const Home = () => {
  return (
    <div className='home'>
        <Banner/>
        <Feed/>
    </div>
  )
}

export default Home