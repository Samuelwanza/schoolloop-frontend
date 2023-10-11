import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRequest } from '../../../services/apiService';

export const fetchRequests = createAsyncThunk(
  'requests/fetchRequests',
  async () => {
    const response = await getRequest('requests/comment');
    return response || {};
  },
);

const initialState = {
  requests: [],
  loading: false,
  error: null,
};

const requestsSlice = createSlice({
  name: 'requests',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRequests.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRequests.fulfilled, (state, action) => {
        state.requests = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchRequests.rejected, (state) => {
        state.loading = false;
        state.error = 'Failed to fetch Requests from the API.';
      });
  },
});

export default requestsSlice.reducer;
