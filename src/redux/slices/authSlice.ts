// src/redux/slices/authSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { server } from '../../../config';

// Define your auth state type
interface AuthState {
  user: any | null; // You can define a more specific type
  accessToken: string | null;
  refreshToken: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  loading: false,
  error: null,
};

// Async thunk for login
export const loginUser = createAsyncThunk<
  // Return type of the payload creator
  { user: any; accessToken: string; refreshToken: string },
  // First argument to the payload creator
  { email: string; password: string },
  { rejectValue: string }
>('auth/loginUser', async (credentials, thunkAPI) => {
  try {
    const response = await axios.post(
      `${server}/auth/login`,
      credentials,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );

    // Assuming the API returns user data along with tokens
    return {
      user: response.data.user,
      accessToken: response.data.accessToken,
      refreshToken: response.data.refreshToken,
    };
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || 'Login failed');
  }
});

// You can create similar thunks for token refresh, registration, or logout

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.error = null;
    },
    // You can add more reducers if you need to update the state
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<{ user: any; accessToken: string; refreshToken: string }>) => {
        state.loading = false;
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
