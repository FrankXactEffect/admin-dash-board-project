import React from 'react'
import "./rightComponents.css"
import Searchbar from '../searchBar/Searchbar'
// import { Table } from '@mui/material'
import Tables from '../table/Tables'
import SlideComponet from '../slides/SlideComponet'
// import GraphChart from '../graphs/GraphChart'
import admindata from "../../Data.json"
import PlaneChart from '../planegraph/PlaneChart'



function RightComponents() {
  // const [adminRows, setRecords] = useState([])

  // const handleFilter = (event) => {
  //   const newData = adminRows.filter(row => row.Name.toLowerCase().includes(event.target.value.toLowerCase()))
  //   setRecords(newData);
  // }
  return (
    <div className='home-right-components'>
      <Searchbar placeholder="Search" data={admindata.admindata} />

      <div className='listContainer'>
        <Tables />
      </div>
      <div className="container-chart-slide">
        <div className='chart-container'>
          <PlaneChart />
        </div>
        <div className='silde-container'>
          <SlideComponet />
        </div>
      </div>
    </div>
  )
}

export default RightComponents