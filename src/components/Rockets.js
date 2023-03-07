import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  cancelReservation,
  reserveRocket,
} from '../redux/rockets/rocketSlice';

function Rocket(props) {
  const dispatch = useDispatch();
  const {
    id, name, description, img, reserved,
  } = props;
  return (
    <div className="rocketContainer">
      <img src={img} alt={name} />
      <div className="rocketInfo">
        <h2 className="rocketTitle">{name}</h2>
        <p className="rocketDesc">
          {reserved && <span className="reserved">Reserved</span>}
          {description}
        </p>
        {reserved ? (
          <button
            className="cancelReservation"
            type="button"
            onClick={() => {
              dispatch(cancelReservation(id));
            }}
          >
            Cancel Reservation
          </button>
        ) : (
          <button
            className="reserveRocket"
            type="button"
            onClick={() => {
              dispatch(reserveRocket(id));
            }}
          >
            Reserve Rocket
          </button>
        )}
      </div>
    </div>
  );
}

Rocket.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  reserved: PropTypes.bool,
}.isRequired;

export default Rocket;
