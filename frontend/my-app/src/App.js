
import './App.css';
import Users from './components/Users'
import AddUser from './components/AddUser';
import UserView from './components/UserView';
import P5History from './components/P5History';
import RewardHistory from './components/RewardHistory';
import NewReward from './components/NewReward';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Users />} />
        <Route path="/new" element={<AddUser />} />
        <Route path="/:id" element={<UserView />} />
        <Route path="/:id/p5" element={<P5History />} />
        <Route path="/:id/rewards" element={<RewardHistory />} />
        <Route path="/:id/rewards/new" element={<NewReward />} />
      </Routes>
    </Router>
  );
}

export default App;
