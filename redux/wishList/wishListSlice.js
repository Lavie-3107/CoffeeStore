import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    wishList: []
}

export const wishListSlice = createSlice({
    name: 'wishList',
    initialState,
    reducers: {
        handleWishListSlice: (state, action) => {
            const index = state.wishList.findIndex((el) => el.id === action.payload.id)
            if (index >= 0) {
                state.wishList.splice(index, 1)
            } else {
                state.wishList.push(action.payload)
            }
        },
        handleRemoveMulti: (state, action) => {
            action.payload.forEach(element => {
                let index = state.wishList.findIndex(el => el.id === element)
                state.wishList.splice(index, 1)
            });
        }
    },
})

// Action creators are generated for each case reducer function
export const { handleWishListSlice, handleRemoveMulti } = wishListSlice.actions

export default wishListSlice.reducer