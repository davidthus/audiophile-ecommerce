import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import CartSlice from "../features/CartSlice";
import ModalSlice from "../features/ModalSlice";

export const store = configureStore({
  reducer: {
    cart: CartSlice,
    modal: ModalSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
