import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../api/fetchingProducts";

const initialState = {
    isLoading: false,
    products: [],
    isError: null
};

// fetching products
export const fetchingProducts = createAsyncThunk("/products/fetchingProducts", 
    async (searchText) => {
       const products = await getProducts(searchText);
        return products;
    }
)

 const productsSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchingProducts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchingProducts.fulfilled, (state, action) => {
                state.isLoading = false,
                    state.products = action.payload
            })
            .addCase(fetchingProducts.rejected, (state, action) => {
                state.isLoading = false,
                    state.products = []
                state.isError = action.error.message
            })
        
    }
});


export default productsSlice.reducer;