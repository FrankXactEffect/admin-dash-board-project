import React from 'react'
import './tables.css'
import IMAGES from '../../assets/index'
import { DataGrid } from '@mui/x-data-grid';

const adminRows = [
    {
        id: 1,
        Name: "ClientBoard",
        img: IMAGES.imgFive,
        admin: 'Samanta',
        members: 3,
        status: 'inprogress',
        runtime: '6hours',
        finishdate: '6Mon'
    },
    {
        id: 2,
        Name: 'MeetingNotion',
        img: IMAGES.imgFour,
        admin: 'Bob P.',
        members: 4,
        status: 'Done',
        runtime: '2hours',
        finishdate: '7Tue'
    },
    {
        id: 3,
        Name: 'FirstHandoff',
        img: IMAGES.imgThree,
        admin: 'Kate O.',
        members: 10,
        status: 'inProgress',
        runtime: '3days',
        finishdate: '10Fri'
    },
    {
        id: 4,
        Name: 'ClientDraft',
        img: IMAGES.imgTwo,
        admin: 'Jack F.',
        members: 7,
        status: 'inProgress',
        runtime: '1week',
        finishdate: '19Sun'
    }
]

const adminColumns = [

    { field: "id", headerName: "ID", width: 70 },
    { field: "Name", headerName: "Name", width: 160 },
    {
        field: "admin", headerName: "Admin", width: 190, renderCell: (params) => {
            return (
                <div className='cellWithimg'>
                    <img className='cellImg' src={params.row.img} alt="" />
                    {params.row.admin}
                </div>
            )
        }
    },
    { field: 'members', headerName: 'Members', type: 'number', width: 100 },
    {
        field: 'status', headerName: 'Status', type: 'number', width: 140
    },
    { field: 'runtime', headerName: 'Runtime', type: 'number', width: 140 },
    { field: 'finishdate', headerName: 'Finishdate', type: 'number', width: 140 }

]

function Tables() {

    return (
        <div className='TableList'>
            <div className='Table-heading-content'>
                <div className='right-caption'>
                    <h1>Last tasks</h1>
                    <h6><span>117 total,</span>proceed to resolve them</h6>
                </div>
                <div className='mid-left-container'>
                    <div className='middle-caption'>
                        <h1>94</h1>
                        <h6>Done</h6>
                    </div>
                    <div className='left-caption'>
                        <h1>23</h1>
                        <h6>in progress</h6>
                    </div>
                </div>
            </div>
            <DataGrid className='data-layout'
                rows={adminRows}
                columns={adminColumns}
                checkboxSelection
            />
        </div>
    )
}

export default Tables

