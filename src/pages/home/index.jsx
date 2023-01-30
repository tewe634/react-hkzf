import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'

const Home = memo(() => {
    return (
        <div>
            <Outlet />
            Home
        </div>
    )
})

export default Home