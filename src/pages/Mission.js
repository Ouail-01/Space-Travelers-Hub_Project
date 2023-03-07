import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { missionLoad } from '../redux/missions/missionSlice';
import MissionProps from './MissionProps';
import './Mission.css';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(missionLoad());
    }
  });

  return (
    <>
      <table className="missionTable">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <MissionProps
              key={mission.id}
              id={mission.id}
              missionName={mission.name}
              description={mission.description}
              reserved={mission.reserved}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Missions;
