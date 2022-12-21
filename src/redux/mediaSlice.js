import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export let fetchApi = createAsyncThunk("games/fetchApi", async ({ type, game }) => {
    let response = await axios.request({
        method: 'GET',
        url: `https://free-to-play-games-database.p.rapidapi.com/api/games?${type}=${game}`,
        headers: {
            'X-RapidAPI-Key': '91cc06f888msh3a4bde8db8c2f39p1e9a7ajsndb3d5ec672a1',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    });
    return response.data;
})

let initialState = { getMovie: [], loading: false }
let mediaSlice = createSlice({
    name: "movie",
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchApi.fulfilled, (state, action) => {
            state.getMovie = action.payload;
            state.loading = false
        })
        builder.addCase(fetchApi.pending, (state, action) => {
            state.loading = true
        })
    },

})
export default mediaSlice.reducer;