import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    addProducts: []
};


const addProductSlice = createSlice({
    name: "addProducts",
    initialState,
    reducers: {
        addProduct: (state, action) => {
         state.addProducts.push(action.payload)
        },
        showProduct: (state, action) => {
            state.addProducts = action.payload
        }
    }
})

export const {addProduct, showProduct } = addProductSlice.actions;
export default addProductSlice.reducer;