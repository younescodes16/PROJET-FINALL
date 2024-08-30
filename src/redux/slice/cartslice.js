import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],  // Chaque produit aura une propriété `quantity`
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProductIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (existingProductIndex === -1) {
      //   // Si le produit existe déjà, incrémente la quantité
      //   state.products[existingProductIndex].quantity += 1;
      // } else {
        // Sinon, ajoute le produit avec une quantité initiale de 1
        state.products.push({ ...action.payload, quantity: 1 });
        state.total += action.payload.price;
      }
      
    },
    remove: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productIndex !== -1) {
        // Si la quantité est plus de 1, décrémente la quantité
        if (state.products[productIndex].quantity > 1) {
          state.products[productIndex].quantity -= 1;
          state.total -= action.payload.price;
        } else {
          // Sinon, retire le produit du panier
          state.products = state.products.filter(
            (product) => product.id !== action.payload.id
          );
          state.total -= action.payload.price;
        }
      }
    },
    // Ajoute une action pour modifier la quantité
    setQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const productIndex = state.products.findIndex(
        (product) => product.id === id
      );
      if (productIndex !== -1) {
        state.total += (quantity - state.products[productIndex].quantity) * state.products[productIndex].price;
        state.products[productIndex].quantity = quantity;
      }
    },
  },
});

export const { addToCart, remove, setQuantity } = cartSlice.actions;
export default cartSlice.reducer;
