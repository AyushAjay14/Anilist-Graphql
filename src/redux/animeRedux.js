import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    animePage : null,
    popularPage: null,
    alltimePage: null,
    top100Page: null,
    animeDesc: null,
    characters: null
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
        },
        getAnimeDesc: (state , action) =>{
            state.animeDesc = action.payload;
        },
        getCharacters: (state , action) =>{
            state.characters = action.payload;
        }
    }
})
export const {getAnimePage , getPopularPage , getAlltimePage , getTop100Page , getAnimeDesc,getCharacters} = animeSlice.actions;
export default animeSlice.reducer;