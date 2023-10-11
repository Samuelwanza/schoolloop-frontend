import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser } from '../../../services/apiService';

export const fetchUser = createAsyncThunk('user/fetchUser', async (data) => {
  const response = await loginUser('login', data);
  return response || {};
});

const initialState = {
  user: {
    userid: null,
    role: null,
    message: null,
  },
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.loading = false;
        state.error = 'Failed to login from the API.';
      });
  },
});

export default userSlice.reducer;
