import { combineReducers, configureStore } from '@reduxjs/toolkit';
import rocketsSlice from './rockets/rocketSlice';
import missionReduce from './missions/missionSlice';

const reducer = combineReducers({
  rockets: rocketsSlice,
  missions: missionReduce,
});

const store = configureStore({
  reducer,
});

export default store;
