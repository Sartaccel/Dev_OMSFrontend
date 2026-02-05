import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "@/api/axios";

/* ================= TYPES ================= */

interface User {
  id: string;
  name: string;
  email: string;
  token: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

/* ================= INITIAL STATE ================= */

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

/* ================= LOGIN THUNK ================= */

export const login = createAsyncThunk<
  User, // Success Return Type
  { email: string; password: string }, // Request Body Type
  { rejectValue: string } // Error Type
>("auth/login", async (data, thunkAPI) => {
  try {
    return {
      id: "1",
      name: "OMS User",
      email: data.email,
      token: "fake-jwt-token",
    };
  } catch (err: any) {
    return thunkAPI.rejectWithValue(
      err.response?.data?.message || "Login Failed"
    );
  }
});

/* ================= SLICE ================= */

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      /* LOGIN PENDING */
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      /* LOGIN SUCCESS */
      .addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
      })

      /* LOGIN FAILED */
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login Failed";
      });
  },
});

/* ================= EXPORTS ================= */

export const { logout } = authSlice.actions;
export default authSlice.reducer;
