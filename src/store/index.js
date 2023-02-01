import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './modules/home'
import cityReducer from './modules/city'
const store = configureStore({
    reducer: {
        home: homeReducer,
        city:cityReducer
    }
})

export default store