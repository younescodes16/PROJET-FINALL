// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   products: [],
//   total: 0,
//   counter: 0,
// };

// export const counterSlice = createSlice({
//   name: "counter",
//   initialState,
//   reducers: {
//     increment: (state, action) => {
      
      
//       const productIndex = state.products.findIndex(
//         (product) => product.id === action.payload.id
//       );
//       console.log(productIndex);
      
//       if (productIndex !== -1) {
//         state.counter += 1;
        
        
//         state.total += action.payload.price;
        
        
//       }
//     },

    // reset: (state) => {
    //   state.counter = 0;
    //   console.log("Counter reset to:", state.counter);
    
    // },
}});

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
