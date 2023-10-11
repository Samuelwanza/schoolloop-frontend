import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRequest } from '../../../services/apiService';

export const fetchAdminrequests = createAsyncThunk(
  'adminrequests/fetchAdminrequests',
  async () => {
    const response = await getRequest('tasks/comment');
    return response || [];
  },
);

const initialState = {
  adminrequests: [],
  loading: false,
  error: null,
};

const adminrequestsSlice = createSlice({
  name: 'adminrequests',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminrequests.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdminrequests.fulfilled, (state, action) => {
        state.adminrequests = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchAdminrequests.rejected, (state) => {
        state.loading = false;
        state.error = 'Failed to fetch Admin Requests from the API.';
      });
  },
});

export default adminrequestsSlice.reducer;
