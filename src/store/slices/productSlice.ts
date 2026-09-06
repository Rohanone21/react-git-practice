import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

import { Product, ProductState } from "../../types/product.types";
import { getProducts } from "../../api/productApi";

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk<
  Product[],
  void,
  { rejectValue: string }
>(
  "products/fetchProducts",
  async (_, thunkAPI) => {
    try {
      return await getProducts();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "Failed to fetch products"
      );
    }
  }
);

const productSlice = createSlice({
  name: "products",

  initialState,

  reducers: {
    clearProducts: (state) => {
      state.products = [];
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })

      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload ?? "Something went wrong";
      });
  },
});

export const { clearProducts } = productSlice.actions;

export default productSlice.reducer;