import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAreaCity, GetHotCity } from "../../API/city";

// 异步请求
export const fetchCityDateAction = createAsyncThunk('fetchCity', (payload,{dispatch,getState}) => {
    getAreaCity(1).then(res => {
        dispatch(changeAreaListInfoAcation(res.data.body))
    }).catch(err => {
        console.log(err);
    })
    GetHotCity().then(res => {
        dispatch(changeAreaIdInfoAction(res.data.body))
    }).catch(err => {
        console.log(err);
    })
})

const citySlice = createSlice({
    name: 'city',
    initialState: {
        areaObj: {
            label: "北京",
            value: "AREA|88cff55c-aaa4-e2e0"
        },
        areaList: [],
        hotList:[]
    },
    reducers: {
        changeAreaIdInfoAction(state, { payload }) {
            state.hotList = payload
        },
        changeAreaListInfoAcation(state, { payload }) {
            state.areaList = payload  
        },
        changeAreaObjInfoAction(state, { payload }) {
            state.areaObj = payload
        }
    }
})
export const {
    changeAreaIdInfoAction,
    changeAreaListInfoAcation,
    changeAreaObjInfoAction
} = citySlice.actions
export default citySlice.reducer