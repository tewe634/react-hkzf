import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchHomeDateAction } from '../../store/modules/home';
import SwiperPage from '../../component/swiper';
import Search from '../../component/search';
import GridPage from './component/gridPage';
import { HomeWarpper } from './style';
import GroupPage from './component/groupPage';

const Home = memo(() => {
    // 获取数据
    const { swiperList, groupList } = useSelector((state) => ({
        swiperList: state.home.swiperList,
        groupList: state.home.groupList
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
            <div className="gridPage">
                <GridPage />
            </div>
            <div className="group">
                <GroupPage infoDate={groupList} />
            </div>
        </HomeWarpper>
    )
})

export default Home