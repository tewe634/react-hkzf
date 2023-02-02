import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchWarpper } from './style';
import { GlobalOutline, DownFill, SearchOutline } from 'antd-mobile-icons'
import { shallowEqual, useSelector } from 'react-redux';

const Search = memo(() => {
    // 路由跳转
    const navigate = useNavigate()
    // 获取store的数据
    const { areaObj } = useSelector((state) => ({
        areaObj: state.city.areaObj
    }), shallowEqual)
    return (
        <SearchWarpper>
            <div className='search'>
                <div className="location" onClick={() => navigate('/city')}>
                    <span className='name'>{areaObj?.label}</span>
                    <i className='iconfont'>
                        <DownFill />
                    </i>
                </div>
                <div className="form">
                    <i className='icon-seach'>
                        <SearchOutline />
                    </i>
                    <span className='text'>请输入小区或地址</span>
                </div>

            </div>
            <i className='iconfont' onClick={() => navigate('/map')}>
                <GlobalOutline />
            </i>
        </SearchWarpper>
    )
})

export default Search