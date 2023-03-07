import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketSlice';

const Rocket = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  return (
    <div>
      <h1>Space rockets</h1>
    </div>
  );
};

export default Rocket;
