import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
// eslint-disable-next-line import/no-named-as-default
import Rockets from './pages/Rockets';
import Missions from './pages/Mission';
import MyProfile from './pages/MyProfile';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/Missions" element={<Missions />} />
      <Route path="/MyProfile" element={<MyProfile />} />
    </Routes>
  </Router>
);

export default App;
