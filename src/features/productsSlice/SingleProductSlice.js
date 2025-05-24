import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSingleProduct } from "../../api/fetchingProducts";

const initialState = {
    isLoading: false,
    product: {},
    isError: null
};

// single fetch product
export const fetchSingleProduct = createAsyncThunk("product/fetchSingleProduct",
    async (id) => {
        const product = await getSingleProduct(id);
        return product.data;
    }
);

const singleProductSlice = createSlice({
    name: "product",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchSingleProduct.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchSingleProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.product = action.payload
            })
            .addCase(fetchSingleProduct.rejected, (state, action) => {
                state.isLoading = false
                state.product = {}
                state.isError = action.error.message
            })
    }
});


export default singleProductSlice.reducer;