import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    cart: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
          state.cart.push(action.payload)
        },
        plusQuantity:(state,action)=>{
          state.cart.forEach(el=>{
            if(el == action.payload){
                console.log(1);
                el.quantity = el.quantity + 1
            }
          })
        }
    },
})

// Action creators are generated for each case reducer function
export const { addToCart,plusQuantity} = cartSlice.actions

export default cartSlice.reducer