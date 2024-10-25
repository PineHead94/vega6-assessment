import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { imageInstance } from "../axios/imageInstance";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

const getImage = createAsyncThunk("getImage", async (query) => {
  try {
    let data = await imageInstance(
      `?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${query}&image_type=photo&pretty=true`
    );
    return data.data;
  } catch (error) {
    return error.message;
  }
});

const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getImage.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload.hits;
      state.loading = false;
    });
    builder.addCase(getImage.pending, (state, action) => {});
    builder.addCase(getImage.rejected, (state, action) => {});
  },
});

export { imageSlice, getImage };
