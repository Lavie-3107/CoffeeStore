import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    productsDetailSlice: []
}

export const productsDetailSlice = createSlice({
    name: 'productsDetail',
    initialState,
    reducers: {
        pushDataProductsDetail: (state, action) => {
            state.productsDetailSlice.push(action.payload)
        },
    },
})

// Action creators are generated for each case reducer function
export const { pushDataProductsDetail } = productsDetailSlice.actions

export default productsDetailSlice.reducer