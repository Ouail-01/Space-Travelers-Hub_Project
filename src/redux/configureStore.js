import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import missionReduce from './missions/missionSlice';
import rocketReducer from './rockets/rocketSlice';

const store = configureStore({
  reducer: {
    missions: missionReduce,
    rockets: rocketReducer,
  },
  middleware: [thunk],
});

export default store;
