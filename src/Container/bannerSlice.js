import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";

const initialState = {
    loading: false,
    banner: [],
    error: '',
}

export const fetchBanner = createAsyncThunk('banner/api', () => {
    return axios.get("/getbanner").then((res) => res.data)
})

const bannerSlice = createSlice({
    name: "banner",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchBanner.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchBanner.fulfilled, (state, action) => {
            state.loading = false
            state.banner = action.payload
            state.error = ''
        })
        builder.addCase(fetchBanner.rejected, (state, action) => {
            state.loading = false
            state.banner = []
            state.error = action.error.message
        })
    }
})

export default bannerSlice.reducer