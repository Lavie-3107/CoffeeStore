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
    },
})

// Action creators are generated for each case reducer function
export const { handleWishListSlice } = wishListSlice.actions

export default wishListSlice.reducer