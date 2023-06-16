import { configureStore } from "@reduxjs/toolkit";
import searchSliceReducer from "./dataSlice"


export const store = configureStore({

    reducer: {
        searchCountries: searchSliceReducer,
    }

})