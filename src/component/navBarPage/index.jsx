import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBarWarpper from './style';

import { NavBar } from 'antd-mobile';
const NavBarPage = memo((props) => {
    const { title } = props
    // 返回上一级
    const navigate = useNavigate()
    function back() {
        navigate(-1)
    }

    return (
        <NavBarWarpper>
            <NavBar style={{ backgroundColor: '#21b97a', color: '#fff' }} onBack={back}>{title}</NavBar>
        </NavBarWarpper>
    )
})

NavBarPage.propTypes = {
    title: PropTypes.string
}

export default NavBarPage