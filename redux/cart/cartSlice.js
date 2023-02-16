import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    cart: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
          const index = state.cart.findIndex(el=>el.items.id === action.payload.items.id&&el.chooseIce === action.payload.chooseIce&&el.chooseSugar === action.payload.chooseSugar&el.size === action.payload.size)
          if(index < 0){
             state.cart.push(action.payload)
          }else{
            state.cart[index].quantity += action.payload.quantity
          }
          
        },
        plusQuantity:(state,action)=>{
          state.cart.forEach(el=>{
            if(el.items.id === action.payload.items.id&&el.chooseIce === action.payload.chooseIce&&el.chooseSugar === action.payload.chooseSugar&&el.size === action.payload.size){
              el.quantity += 1
          }
          })
        },
        minusQuantity:(state,action)=>{
          state.cart.forEach(el=>{
            if(el.items.id === action.payload.items.id&&el.chooseIce === action.payload.chooseIce&&el.chooseSugar === action.payload.chooseSugar&&el.size === action.payload.size){
              el.quantity -= 1
          }
          })
        },
        removeProductOnCart:(state,action)=>{
         action.payload.forEach(element=>{
          const index=state.cart.findIndex((el)=>el.items.id === element.items.id&&el.chooseIce === element.chooseIce&&el.chooseSugar === element.chooseSugar&&el.size === element.size)
          state.cart.splice(index,1)
         })
        }
    },
})

// Action creators are generated for each case reducer function
export const { addToCart,plusQuantity,minusQuantity,removeProductOnCart} = cartSlice.actions

export default cartSlice.reducer