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
  token: string | null;
  isAuthenticated: boolean;
}

/* ================= INITIAL STATE ================= */
const token = localStorage.getItem("token");

const initialState: AuthState = {
  user: null,
  token: token,
  isAuthenticated: !!token,
  loading: false,
  error: null
}

/* ================= LOGIN THUNK ================= */

export const login = createAsyncThunk<
  User,
  { email: string; password: string },
  { rejectValue: string }
>("auth/login", async (data, thunkAPI) => {
  try {

    const res = await axios.post("/auth/login", data);

    return res.data;

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
       const token = action.payload.token || "dummy-token-123";

  state.token = token;
        state.isAuthenticated = true;
       localStorage.setItem("token", action.payload.token);

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
