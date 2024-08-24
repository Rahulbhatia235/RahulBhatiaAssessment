// src/components/RewardHistory.js

import React from 'react';
import { useParams } from 'react-router-dom';
// Dummy reward history data
const rewardHistory = [
  { id: 1, dateTime: '2024-08-24 13:00', rewardsReceived: 50, userName: 'Test user A' },
  { id: 2, dateTime: '2024-08-24 13:30', rewardsReceived: 75, userName: 'Test User B' },
];

const RewardHistory = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Reward History</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Date-Time</th>
            <th>Rewards Received</th>
            <th>User Name</th>
          </tr>
        </thead>
        <tbody>
          {rewardHistory.map((entry, index) => (
            <tr key={entry.id}>
              <td>{index + 1}</td>
              <td>{entry.dateTime}</td>
              <td>{entry.rewardsReceived}</td>
              <td>{entry.userName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RewardHistory;
