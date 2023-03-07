const FETCHMISSION = 'spacetravelers/missions/FETCHMISSION';
const JOINMISSION = 'spacetravelers/missions/JOINMISSION';
const LEAVEMISSION = 'spacetravelers/missions/LEAVEMISSION';

const missionReduce = (state = [], action) => {
  switch (action.type) {
    case FETCHMISSION:
      return action.mission;
    case JOINMISSION:
      return state.map((mission) => {
        if (mission.id !== action.payload) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
    case LEAVEMISSION:
      return state.map((mission) => {
        if (mission.id !== action.payload) {
          return mission;
        }
        return { ...mission, reserved: false };
      });
    default:
      return state;
  }
};

export const missionFetch = (mission) => ({
  type: FETCHMISSION,
  mission,
});

export const missionLoad = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await response.json();
  const missionsFetched = data.map((mission) => ({
    id: mission.mission_id,
    name: mission.mission_name,
    description: mission.description,
    reserved: false,
  }));
  dispatch(missionFetch(missionsFetched));
};

export const joinMission = (id) => ({
  type: JOINMISSION,
  payload: id,
});

export const leaveMission = (id) => ({
  type: LEAVEMISSION,
  payload: id,
});

export default missionReduce;
