import { configureStore } from '@reduxjs/toolkit'
import cartreduser from "./slice/cartslice"

export const store = configureStore({
  reducer: {
    cart:cartreduser,
   
  },
})

