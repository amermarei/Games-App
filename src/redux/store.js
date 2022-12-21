import { configureStore } from "@reduxjs/toolkit";
import mediaReducer from "./mediaSlice";
import countReducer from "./countSlice"
export let store = configureStore(
    {
        reducer: {
            movie: mediaReducer,
            count: countReducer
        }
    }
)