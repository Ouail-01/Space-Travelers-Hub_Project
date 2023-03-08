import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from '../components/Rockets';
import { fetchRockets } from '../redux/rockets/rocketSlice';
import './Rockets.css';

function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  const reRender = useRef(true);

  useEffect(() => {
    if (reRender.current) {
      if (rockets.length === 0) {
        dispatch(fetchRockets());
        reRender.current = false;
      }
    }
  }, [dispatch, rockets.length]);

  return (
    <div className="rocketsContainer">
      {rockets.map((item) => (
        <Rocket
          key={item.id}
          id={item.id}
          name={item.name}
          description={item.description}
          reserved={item.reserved}
          img={item.flickr_images}
        />
      ))}
    </div>
  );
}

export default Rockets;
