import React from 'react';
import { useSelector } from 'react-redux';

function MyProfile() {
  const missions = useSelector((state) => state.missions);
  const reservedMissions = missions.filter((item) => item.reserved === true);

  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((item) => item.reserved === true);

  if (reservedMissions.length === 0 && reservedRockets.length === 0) {
    return <div>No reserved rockets/missions</div>;
  }

  return (
    <div>
      <div>
        <h2>My Missions</h2>
        <ul>
          {reservedMissions.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>My Rockets</h2>
        <ul>
          {reservedRockets.map((rocket) => (
            <li key={rocket.id}>{rocket.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MyProfile;
