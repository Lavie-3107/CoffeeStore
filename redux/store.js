import { configureStore } from '@reduxjs/toolkit'
import WishListSlice from "./wishList/wishListSlice"
import ProductsDetailSlice from "./productsDetail/productsDetailSlice"
export const store = configureStore({
  reducer: {
    WishList: WishListSlice,
    ProductsDetail: ProductsDetailSlice
  },
})