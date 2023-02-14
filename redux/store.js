import { configureStore } from '@reduxjs/toolkit'
import WishListSlice from "./wishList/wishListSlice"
import ProductsDetailSlice from "./productsDetail/productsDetailSlice"
import CartSlice from "./cart/cartSlice"
export const store = configureStore({
  reducer: {
    WishList: WishListSlice,
    ProductsDetail: ProductsDetailSlice,
    Cart:CartSlice
  },
})