import {configureStore} from '@reduxjs/toolkit'
import animeReducer from './animeRedux'

export const store = configureStore({
    reducer:{
        anime : animeReducer,
    }
});