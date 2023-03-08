import React from 'react';
import { useSelector } from 'react-redux';
import './MyProfile.css';

function MyProfile() {
  const missions = useSelector((state) => state.missions);
  const reservedMissions = missions.filter((item) => item.reserved === true);

  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((item) => item.reserved === true);

  if (reservedMissions.length === 0 && reservedRockets.length === 0) {
    return <div className="empty">No reserved Rockets/Missions</div>;
  }

  return (
    <div className="profileHandler">
      <div className="missions">
        <h2>My Missions</h2>
        <ul>
          {reservedMissions.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
      <div className="rockets">
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
