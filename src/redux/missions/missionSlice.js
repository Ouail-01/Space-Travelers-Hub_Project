const FETCHMISSION = 'spacetravelers/missions/FETCHMISSION';

const missionReduce = (state = [], action) => {
  switch (action.type) {
    case FETCHMISSION:
      return action.mission;
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

export default missionReduce;
