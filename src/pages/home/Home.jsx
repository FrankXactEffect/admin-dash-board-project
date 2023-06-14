import React from 'react'
import "./home.css"
import Sidebar from '../../components/sidebar/Sidebar'
import RightComponents from '../../components/rightCom/RightComponents'
function Home() {
  return (
    <div className='home'>
        <Sidebar/>
        <RightComponents/>
    </div>
  )
}

export default Home