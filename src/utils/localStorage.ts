import { cartState } from "../features/CartSlice";

export const loadCart = (): cartState | undefined => {
  try {
    const serializedCart = localStorage.getItem("cart");
    if (serializedCart === null) {
      return undefined;
    }
    return JSON.parse(serializedCart);
  } catch (err) {
    return undefined;
  }
};

export const saveCart = (cart: cartState): void => {
  try {
    const serializedCart = JSON.stringify(cart);
    localStorage.setItem("cart", serializedCart);
  } catch (err) {
    console.log("error while saving cart to local storage", err);
  }
};
