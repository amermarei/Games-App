import { createSlice } from "@reduxjs/toolkit";


let initialState = { count: 20 }
let mediaSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increase: (state) => { state.count += 20 }
    }

})
export let { increase } = mediaSlice.actions;
export default mediaSlice.reducer;