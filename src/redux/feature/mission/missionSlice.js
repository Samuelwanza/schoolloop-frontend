import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRequest } from '../../../services/apiService';

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    const response = await getRequest('v3/missions');
    return response || {};
  },
);

const initialState = {
  missions: [],
  loading: false,
  missionInProcess: null,
  error: null,
};

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission(state, action) {
      state.missions = state.missions.map((mission) => ({
        ...mission, reserved: mission.reserved || mission.mission_id === action.payload,
      }));
    },
    leaveMission(state, action) {
      state.missions = state.missions.map((mission) => ({
        ...mission, ...(mission.mission_id === action.payload ? { reserved: false } : {}),
      }));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.missions = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchMissions.rejected, (state) => {
        state.loading = false;
        state.error = 'Failed to fetch missions from the API.';
      });
  },
});

export const { joinMission, leaveMission } = missionSlice.actions;
export default missionSlice.reducer;
