import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSwiperList,getGroupArea } from "../../API/home";

// 异步请求
export const fetchHomeDateAction = createAsyncThunk('fetchHome', (payload, { dispatch, getState }) => {
    getSwiperList().then(res => {
        dispatch(changeSwipweInfoAction(res.data.body))
    }).catch(err => {
        console.log(err);
    })
    getGroupArea(getState().city.areaObj.value).then(res => {
        dispatch(changeGroupInfoAction(res.data.body))
    }).catch(err => {
        console.log(err);
    })
})

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        swiperList: [],
        groupList:[]
    },
    reducers: {
        changeSwipweInfoAction(state, { payload }) {
            state.swiperList = payload
        },
       
        changeGroupInfoAction(state, { payload }) {
            state.groupList = payload
        }
    }
})
export const {
    changeSwipweInfoAction,
    changeGroupInfoAction
} = homeSlice.actions
export default homeSlice.reducer