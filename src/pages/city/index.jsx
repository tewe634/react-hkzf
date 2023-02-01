import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import NavBarPage from '../../component/navBarPage'
import { fetchCityDateAction } from '../../store/modules/city'

const City = memo(() => {
    // 获取数据
    const { hotList, areaList } = useSelector((state) => ({
        hotList: state.city.hotList,
        areaList: state.city.areaList,
    }), shallowEqual)
    console.log(hotList, areaList);
    // 发送请求
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCityDateAction())
    }, [dispatch])
    return (
        <div>
            <NavBarPage title={'城市列表'} />
        </div>
    )
})

export default City