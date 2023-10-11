import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRequest } from '../../../services/apiService';

export const fetchFacilitators = createAsyncThunk('facilitators/fetchFacilitators', async () => {
  const response = await getRequest('facilitators');
  return response || [];
});

const initialState = {
  facilitators: [],
  loading: false,
  error: null,
};

const FacilitatorsSlice = createSlice({
  name: 'facilitators',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFacilitators.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFacilitators.fulfilled, (state, action) => {
        state.facilitators = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchFacilitators.rejected, (state) => {
        state.loading = false;
        state.error = 'Failed to login from the API.';
      });
  },
});

export default FacilitatorsSlice.reducer;
