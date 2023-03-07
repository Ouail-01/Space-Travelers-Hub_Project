import React from 'react';
import PropTypes from 'prop-types';

const MissionProps = (props) => {
  const {
    id, missionName, description,
  } = props;

  return (
    <tr id={id}>
      <td>{missionName}</td>
      <td>{description}</td>
      <td><p>NOT A MEMBER</p></td>
      <td><button type="button">Join Mission</button></td>
    </tr>
  );
};

MissionProps.propTypes = {
  id: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MissionProps;
