// SingleQRCode.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";

const initialState = {
    loading: false,
    singleQRCode: [],
    error: '',
}

export const fetchSingleQRCode = createAsyncThunk('single/qrcode/api', async (qrId) => {
    return axios.get(`/singleqrcode?qrId=${qrId}`).then((res) => res.data)
})

const singleQRCodeSlice = createSlice({
    name: "singleQRCode",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchSingleQRCode.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchSingleQRCode.fulfilled, (state, action) => {
            state.loading = false
            state.singleQRCode = action.payload
            state.error = ''
        })
        builder.addCase(fetchSingleQRCode.rejected, (state, action) => {
            state.loading = false
            state.singleQRCode = []
            state.error = action.error.message
        })
    }
})

export default singleQRCodeSlice.reducer;
