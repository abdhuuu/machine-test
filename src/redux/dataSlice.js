import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"


export const fetchDatas = createAsyncThunk ("flags/fetchDatas",async () => {
    return await axios.get("https://restcountries.com/v2/all?fields=name,region,flag").then(res => {
        return res.data
    })
    
}) 

const INITIAL_STATE = {
    countries: [],
    loading:false
}

const searchSlice = createSlice({
    name: "countrySearch",
    initialState: INITIAL_STATE,
    extraReducers: {
        [fetchDatas.pending] : (state,action) => {
            state.loading = true
        },
        [fetchDatas.fulfilled] : (state,action) => {
            state.loading = false;
            state.countries = action.payload
        },
        [fetchDatas.rejected] : (state,action) => {
            state.loading = true
        }

    }
})



export default searchSlice.reducer