import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSwiperList } from "../../API/home";

// 异步请求
export const fetchHomeDateAction = createAsyncThunk('fetchDate', (payload,{dispatch,getState}) => {
    getSwiperList().then(res => {
        dispatch(changeSwipweInfoAction(res.data.body))
    }).catch(err => {
        console.log(err);
    })
})

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        swiperList:[]
    },
    reducers: {
        changeSwipweInfoAction(state, { payload }) {
            state.swiperList = payload
        }
    }
})
export const {changeSwipweInfoAction} = homeSlice.actions
export default homeSlice.reducer