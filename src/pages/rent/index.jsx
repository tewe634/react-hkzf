import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'


const Rent = memo(() => {
    return (
        <div>Rent
            <Outlet />
        </div>
    )
})

export default Rent