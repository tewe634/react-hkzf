import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchHomeDateAction } from '../../store/modules/home';
import SwiperPage from '../../component/swiper';
import Search from '../../component/search';
import { HomeWarpper } from './style';

const Home = memo(() => {
    // 获取数据
    const { swiperList } = useSelector((state) => ({
        swiperList: state.home.swiperList
    }), shallowEqual)
    // 发送请求
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchHomeDateAction())
    }, [dispatch])
    return (
        <HomeWarpper>
            <div className="am-flexbox">
                <Search />
            </div>
            <div className="swipers">
                <SwiperPage infoDate={swiperList} />
            </div>
        </HomeWarpper>
    )
})

export default Home