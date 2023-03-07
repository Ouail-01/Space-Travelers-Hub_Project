import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v4/rockets';

const rockets = [];

export const fetchRockets = createAsyncThunk('rocket/fetch', async () => {
  const response = await axios.get(url);
  if (response.data) {
    return response.data;
  }
  return [];
});

const rocketsSlice = createSlice({
  name: 'rocket',
  initialState: rockets,
  reducers: {
    reserveRocket(state, action) {
      return state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return { ...rocket };
        }
        return { ...rocket, reserved: true };
      });
    },
    cancelReservation(state, action) {
      return state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return { ...rocket };
        }
        return { ...rocket, reserved: false };
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      const newState = action.payload.map((rocket) => ({
        id: rocket.id,
        name: rocket.name,
        description: rocket.description,
        flickr_images: rocket.flickr_images,
        reserve: false,
      }));
      state.push(...newState);
    });
  },
});

export const { reserveRocket, cancelReservation } = rocketsSlice.actions;
export default rocketsSlice.reducer;
