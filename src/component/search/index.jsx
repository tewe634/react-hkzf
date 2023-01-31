import React, { memo } from 'react'
import { SearchWarpper } from './style'
import { SearchBar } from 'antd-mobile'
import { GlobalOutline } from 'antd-mobile-icons'

const Search = memo(() => {
    return (
        <SearchWarpper>
            <div className='search'>
                <SearchBar placeholder='请输入小区或地址' style={{
                    '--border-radius': '3px',
                    '--background': '#ffffff',
                    '--height': '34px',
                    '--padding-left': '30px',
                    '--placeholder-color': '#9c9fa1',
                    '--font-size': '13px'
                }} />
            </div>
            <i className='iconfont'>
                <GlobalOutline />
            </i>
        </SearchWarpper>
    )
})

export default Search