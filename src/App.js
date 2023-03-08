import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
// eslint-disable-next-line import/no-named-as-default
import Rockets from './pages/Rockets';
import Missions from './components/Mission';
import MyProfile from './components/MyProfile';

const App = () => (
  <Router>
    <Nav />
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/Missions" element={<Missions />} />
      <Route path="/MyProfile" element={<MyProfile />} />
    </Routes>
  </Router>
);

export default App;
