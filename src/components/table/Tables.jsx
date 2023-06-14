import React from 'react'
import './tables.css'
// import IMAGES from '../../assets/index.js'
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
import { DataGrid} from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID',  width: 40 },
  { field: 'name', headerName: 'Name', type: 'number' ,width: 140 },
  { field: 'admin', headerName: 'Admin', type: 'number', width: 80 },
  { field: 'members', headerName: 'Members',type: 'number', width: 60 },
  { field: 'status', headerName: 'Status', type: 'number', width: 140 },
  { field: 'runtime', headerName: 'Runtime', type: 'number', width: 140 },
  { field: 'finishdate', headerName: 'Finishdate', type: 'number', width: 140}


];
const rows = [
  {
    id: 1, name: "ClientOnboarding-Circle",
    admin: "Samanta J.",
    members: 3,
    status: "Inprogress",
    runtime: "6 hours",
    finishdate: " sixMon"
  },
  {
    id: 2,
    name: "Meeting with Notion",
    admin: "Bob P.",
    members: 4,
    status: 'Done',
    runtime: "2hours",
    finishdate: "sevenMon"
  },
  {
    id: 3,
    name: "First Handoff with Engineers",
    admin: "Kate O.",
    members: 10,
    status: 'Inprogress',
    runtime: "3 days",
    finishdate: " tenFri"
  },
  {
    id: 4,
    name: "Client Drafting (2) with Lawrence",
  
    admin: "Jack F.",
    members: 7,
    status: 'Inprogress',
    runtime: "1 week",
    finishdate: "nineteenSun"
  },

];
function Tables() {
  
  return (
    <div className='TableList'>
      <div className='Table-heading-content'>
                 <div className='right-caption'>
                   <h1>Last tasks</h1>
                   <p><span>117 total,</span>proceed to resolve them</p>
                 </div>
                 <div className='mid-left-container'>
                   <div className='middle-caption'>
                     <h1>94</h1>
                     <p>Done</p>
                   </div>
                   <div className='left-caption'>
                     <h1>23</h1>
                     <p>in progress</p>
                   </div>
                 </div>
             </div>
      <DataGrid className='data-layout'
        rows={rows}
        columns={columns}
        // initialState={{
        //   pagination: {
        //     paginationModel: { page: 0, pageSize: 5 },
        //   },
        // }}
        // pageSizeOptions={[5, 10]}
        checkboxSelection
      />
   </div>
  )
}

export default Tables

