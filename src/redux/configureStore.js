import { configureStore } from '@reduxjs/toolkit';
import missionReduce from './missions/missionSlice';

const store = configureStore({
  reducer: {
    missions: missionReduce,
  },
});

export default store;
