import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';
import LayoutWarpper from './style';
import Footer from '../../component/footer';
const Layout = memo(() => {
    return (
        <LayoutWarpper>
            <div className="layout">
                <Outlet />
                <div className="am-tab-bar">
                    <Footer />
                </div>
            </div>
        </LayoutWarpper>
    )
})

export default Layout