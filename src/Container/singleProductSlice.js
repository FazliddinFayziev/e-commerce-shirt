// SingleProduct.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";

const initialState = {
    single_loading: false,
    singleProduct: [],
    error: '',
}

export const fetchSingleProduct = createAsyncThunk('single/product/api', async (productId) => {
    return axios.get(`/single?singleId=${productId}`).then((res) => res.data)
})

const singleProductSlice = createSlice({
    name: "singleProduct",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchSingleProduct.pending, (state) => {
            state.single_loading = true
        })
        builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
            state.single_loading = false
            state.singleProduct = action.payload
            state.error = ''
        })
        builder.addCase(fetchSingleProduct.rejected, (state, action) => {
            state.single_loading = false
            state.singleProduct = []
            state.error = action.error.message
        })
    }
})

export default singleProductSlice.reducer;
