import PropTypes from 'prop-types';
import React, { memo, useEffect, useState } from 'react';
import IndexWarpper from './style';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { changeAreaObjInfoAction } from '../../../../store/modules/city';
import { useNavigate } from 'react-router-dom';
import { IndexBar, Cell } from 'react-vant';

const IndexBarPage = memo((props) => {
    // 获取store的数据
    const { areaObj } = useSelector((state) => ({
        areaObj: state.city.areaObj
    }), shallowEqual)
    // 接收的数据
    const { areaList, hotList } = props
    // 定义的数据
    const [city, setCity] = useState({})
    const [list, setList] = useState([])
    const [newList, setNewList] = useState([])
    // 数据处理
    useEffect(() => {
        const newCity = {}
        const indexList = []
        const list = ['#', '热']
        const charCodeOfA = 'A'.charCodeAt(0)
        for (let i = 0; i < 26; i += 1) {
            indexList.push(String.fromCharCode(charCodeOfA + i))
        }
        const newlist = [...list, ...indexList]
        indexList.forEach(item => {
            newCity[item] = []
            areaList?.forEach(ele => {
                // 获取城市首字母转换成大写
                const fristZm = ele.short.substring(0, 1).toUpperCase()
                if (item === fristZm) {
                    newCity[item].push(ele.label)
                }
            })
        })
        setList(indexList)
        setNewList(newlist)
        setCity(newCity)
    }, [areaList])
    // 点击后数据处理完成提交仓库在路由跳转
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function goCity(val) {
        const value = areaList.find(item => item.label === val)
        dispatch(changeAreaObjInfoAction(value))
        navigate(-1)
    }

    return (
        <IndexWarpper>
            <div>
                <IndexBar indexList={newList}>
                    <IndexBar.Anchor index='当前城市' />
                    < Cell title={areaObj?.label} />
                    <IndexBar.Anchor index='热门城市' />
                    {
                        hotList.map((item, index) => {
                            return (
                                < Cell title={item.label} key={index} onClick={() => goCity(item.label)} />
                            )
                        })
                    }
                    {
                        list.map(item => (
                            <div key={item}>
                                <IndexBar.Anchor index={item} />
                                {
                                    city[item].length ? city[item].map((ele) => {
                                        return < Cell title={ele} key={ele} onClick={() => goCity(ele)} />
                                    }) : <Cell title='暂无城市' />
                                }
                            </div>
                        ))
                    }
                </IndexBar>
            </div>
        </IndexWarpper>
    )
})

IndexBarPage.propTypes = {
    areaList: PropTypes.array,
    hotList: PropTypes.array
}

export default IndexBarPage