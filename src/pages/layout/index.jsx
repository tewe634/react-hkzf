import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';
const Layout = memo(() => {
    return (
        <div>
            Layout
            <Outlet />
        </div>
    )
})

export default Layout