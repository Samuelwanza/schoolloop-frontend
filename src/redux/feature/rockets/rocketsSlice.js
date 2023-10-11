import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRequest } from '../../../services/apiService';

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async () => {
    const response = await getRequest('v3/rockets');
    return response || {};
  },
);

const initialState = {
  rockets: [],
  loading: false,
  rocketsInProcess: null,
  error: null,
  fetched: false,
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRockets(state, action) {
      state.rockets = state.rockets.map((rocket) => ({
        ...rocket,
        reserved: rocket.reserved || rocket.id === action.payload,
      }));
    },
    leaveRockets(state, action) {
      state.rockets = state.rockets.map((rocket) => ({
        ...rocket,
        ...(rocket.id === action.payload ? { reserved: false } : {}),
      }));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.rockets = action.payload;
        state.loading = false;
        state.error = null;
        state.fetched = true;
      })
      .addCase(fetchRockets.rejected, (state) => {
        state.loading = false;
        state.error = 'Failed to fetch Rockets from the API.';
      });
  },
});

export const { reserveRockets, leaveRockets } = rocketsSlice.actions;
export default rocketsSlice.reducer;
