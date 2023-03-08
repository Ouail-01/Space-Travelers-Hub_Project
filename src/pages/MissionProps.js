import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missionSlice';

const MissionProps = (props) => {
  const {
    id, missionName, description, reserved,
  } = props;

  const dispatch = useDispatch();
  const join = () => {
    dispatch(joinMission(id));
  };
  const leave = () => {
    dispatch(leaveMission(id));
  };

  return (
    <tr id={id}>
      <td>{missionName}</td>
      <td>{description}</td>
      <td>
        {reserved
          ? <p className="leavePar">Active Member</p>
          : <p>NOT A MEMBER</p>}
      </td>
      <td>
        {!reserved
          ? <button className="join" type="button" onClick={join}>Join Mission</button>
          : <button className="leave" type="button" onClick={leave}>Leave Mission</button>}
      </td>
    </tr>
  );
};

MissionProps.propTypes = {
  id: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default MissionProps;
