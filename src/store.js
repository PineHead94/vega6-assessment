import { configureStore } from "@reduxjs/toolkit";
import { imageSlice } from "./redux/imageSlice";

const store = configureStore({
  reducer: {
    image: imageSlice.reducer,
  },
});

export { store };
