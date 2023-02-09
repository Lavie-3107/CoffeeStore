import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    wishList: []
}

export const wishListSlice = createSlice({
    name: 'wishList',
    initialState,
    reducers: {
        addToWishList: (state, action) => {
            state.wishList = state.wishList.push(action.payload)
        },
        removeFromWishList: (state, action) => {

        },
    },
})

// Action creators are generated for each case reducer function
export const { addToWishList, removeFromWishList } = wishListSlice.actions

export default wishListSlice.reducer