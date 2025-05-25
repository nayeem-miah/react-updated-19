import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
};


const addProductSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload)
        },
        showProduct: (state, action) => {
            state.products = action.payload
        },
        deleteProduct: (state, action) => {
            const id = action.payload;
            state.products = state.products.filter((product) => product._id !== id);
        }
    }
});

export const { addProduct, showProduct, deleteProduct } = addProductSlice.actions;
export default addProductSlice.reducer;