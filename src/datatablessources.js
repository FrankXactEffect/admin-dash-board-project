

export const columns =[
    
    { field: 'id', headerName: 'ID', width: 70 },
    {field: "user", headerName:"User",width: 230, renderCell: (params)=>{
        return (
            <div>
                <img className="cellImg" src={params.row.img} alt="image"/>
                {params.row.username}
            </div>
        )
    }}
    

    
]



