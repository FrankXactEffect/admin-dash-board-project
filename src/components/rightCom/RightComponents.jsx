import React from 'react'
import "./rightComponents.css"
import Searchbar from '../searchBar/Searchbar'
// import { Table } from '@mui/material'
import Tables from '../table/Tables'

function RightComponents() {
  return (
      <div className='home-right-components'>
          <Searchbar/>
          <div className='listContainer'>
            <Tables />
          </div>
          <div></div>
      </div>
  )
}

export default RightComponents