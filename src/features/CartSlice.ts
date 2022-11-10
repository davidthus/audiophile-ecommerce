import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/Product";
import { loadCart } from "../utils/localStorage";

export interface cartState {
  items: { product: Product; quantity: number }[];
  totalQuantity: number;
}

const persistedState = loadCart();

const initialState: cartState = { items: [], totalQuantity: 0 };

const CartSlice = createSlice({
  name: "cart",
  initialState: persistedState ? persistedState : initialState,
  reducers: {
    increaseQuantity: (state, action) => {
      const indexOfItem = state.items.findIndex(
        (item) => item.product.slug === action.payload.item
      );
      state.totalQuantity += 1;
      state.items[indexOfItem].quantity += 1;
    },
    removeAll: (state) => {
      return initialState;
    },
    decreaseQuantity: (state, action) => {
      const indexOfItem = state.items.findIndex(
        (item) => item.product.slug === action.payload.item
      );
      state.totalQuantity -= 1;
      if (state.items[indexOfItem].quantity === 1) {
        state.items.splice(indexOfItem, 1);
      } else {
        state.items[indexOfItem].quantity -= 1;
      }
    },
    addItemToCart: (state, action) => {
      const { product, quantity } = action.payload;
      state.totalQuantity += quantity;
      if (state.items.some((item) => item.product.slug === product.slug)) {
        const indexOfItem = state.items.findIndex(
          (item) => item.product.slug === product.slug
        );
        state.items[indexOfItem].quantity += quantity;
      } else {
        state.items.push({
          product,
          quantity,
        });
      }
    },
  },
});

export const { increaseQuantity, decreaseQuantity, removeAll, addItemToCart } =
  CartSlice.actions;
export default CartSlice.reducer;
