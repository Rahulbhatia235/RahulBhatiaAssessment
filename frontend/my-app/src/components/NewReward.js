// src/components/NewReward.js

import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Dummy function to simulate saving a reward
const createReward = (reward) => {
  console.log('Reward created:', reward);
};

const NewReward = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [users, setUsers] = useState(['John Doe', 'Jane Smith']); // Exclude self in actual implementation

  const handleSubmit = (e) => {
    e.preventDefault();
    createReward({ id, amount });
    navigate(`/${id}/rewards`);
  };

  const handleCancel = () => {
    navigate(`/${id}/rewards`);
  };

  return (
    <div>
      <h1>Create New Reward</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Select User:</label>
          <select required>
            {users.map(user => <option key={user} value={user}>{user}</option>)}
          </select>
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="1"
            max="100"
            required
          />
        </div>
        <div>
          <p>Current P5 Balance: {/* Fetch and display current user's balance */}</p>
        </div>
        <button type="submit" disabled={amount > 100}>Submit</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default NewReward;
