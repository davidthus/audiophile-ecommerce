import { createSlice } from "@reduxjs/toolkit";

interface stateShape {
  modalOpen: boolean;
  modalType: "" | "navbar" | "checkout" | "cart";
}

const initialState: stateShape = {
  modalOpen: false,
  modalType: "",
};

const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.modalOpen = true;
      state.modalType = action.payload.type;
    },
    closeModal: (state) => {
      state.modalOpen = false;
      state.modalType = "";
    },
  },
});

export const { openModal, closeModal } = ModalSlice.actions;
export default ModalSlice.reducer;
