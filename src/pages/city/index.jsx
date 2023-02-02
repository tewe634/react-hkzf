import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import NavBarPage from '../../component/navBarPage'
import IndexBarPage from './component/indexBarPage'
import { fetchCityDateAction } from '../../store/modules/city'
const City = memo(() => {
    // 获取数据
    const { hotList, areaList } = useSelector((state) => ({
        hotList: state.city.hotList,
        areaList: state.city.areaList,
    }), shallowEqual)
    // 发送请求
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCityDateAction())
    }, [dispatch])
    return (
        <div>
            <NavBarPage title={'城市列表'} />
            <IndexBarPage hotList={hotList} areaList={areaList} />
        </div>
    )
})

export default City