import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    animePage : null,
    popularPage: null,
    alltimePage: null,
    top100Page: null,
}
const animeSlice = createSlice({
    name : "anime",
    initialState,
    reducers: {
        getAnimePage: (state , action) =>{
            state.animePage = action.payload;
        },
        getPopularPage: (state , action) =>{
            state.popularPage = action.payload;
        },
        getAlltimePage: (state , action) => {
            state.alltimePage = action.payload;
        },
        getTop100Page: (state , action) => {
            state.top100Page = action.payload;
        }
    }
})
export const {getAnimePage , getPopularPage , getAlltimePage , getTop100Page} = animeSlice.actions;
export default animeSlice.reducer;