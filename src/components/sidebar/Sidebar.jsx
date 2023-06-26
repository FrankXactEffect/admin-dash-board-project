import React from 'react'
import "./sidebar.css"
import IMAGES from '../../assets/index.js'
import { RiDashboardFill } from 'react-icons/ri';
import { RxPieChart } from 'react-icons/rx';
import { FaListAlt } from 'react-icons/fa';
import { BsFront } from 'react-icons/bs';
import { BiBell } from 'react-icons/bi';
import { SiGooglechat } from 'react-icons/si';
import { SiCapacitor } from 'react-icons/si';

function Sidebar() {


  return (
    <div className='home-side-bar'>
      <div className='top'>
        <SiCapacitor className='capa' />

        <span className='logo'>XACT</span>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <li id='one'>
            <RiDashboardFill className='icon-one' />
            <span>Dashboard</span>
          </li>
          <li id='two'>
            <RxPieChart className='icon-one' />
            <span>Projects</span>
          </li>
          <li id='three'>
            <FaListAlt className='icon-one' />
            <span>Task list</span>
          </li>
          <li id='four'>

            <BsFront className='icon-one' />
            <span>Services</span>
          </li>
          <li id='five'>
            <BiBell className='icon-one' />
            <span>Notifications</span>
            <span className='number-four'><p>4</p></span>
          </li>
          <li id='six'>
            <SiGooglechat className='icon-one' />
            <span>Chat</span>
          </li>
        </ul>
      </div>
      <div className='profile-content'>
        <div className='circle-bg'>
          <img className='img-circle' src={IMAGES.imgOne} alt="" />

        </div>
        <div className='indicator'></div>
        <div className='profile-text'>
          <h3>Emmy Jonson</h3>
          <p>jonson@xact.com</p>
        </div>
      </div>

    </div>
  )
}

export default Sidebar