import React, { memo } from 'react';
import FooterWarpper from './style';
import { TabBar } from 'antd-mobile';
import { useNavigate } from 'react-router-dom'

import {
    AppOutline,
    SearchOutline,
    FileOutline,
    UserOutline,
} from 'antd-mobile-icons'
const Footer = memo(() => {
    const tabs = [
        {
            key: 'home',
            title: '首页',
            icon: <AppOutline />,
        },
        {
            key: 'list',
            title: '找房',
            icon: <SearchOutline />,
        },
        {
            key: 'news',
            title: '资讯    ',
            icon: <FileOutline />,
        },
        {
            key: 'profile',
            title: '我的',
            icon: <UserOutline />,
        },
    ]
    // 编程式导航，点击时候路由跳转
    const navigate = useNavigate()
    function setRouteActive(val) {
        console.log(val);
        navigate(`/home/${val}`)
    }
    return (
        <FooterWarpper>

            <TabBar onChange={value => setRouteActive(value)}>
                {tabs.map(item => (
                    <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
                ))}
            </TabBar>

        </FooterWarpper>
    )
})

export default Footer