// src/components/P5History.js

import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
// Dummy P5 history data
const p5History = [
  { id: 1, dateTime: '2024-08-24 12:00', p5Given: 100, userName: 'Test User A' },
  { id: 2, dateTime: '2024-08-24 12:30', p5Given: 20, userName: 'Test User B' },
];

const P5History = () => {
  const { id } = useParams();
  
  return (
    <div>
      <h1>P5 History</h1>
      <Link to={`/${id}/rewards/new`}>Create New Reward</Link>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Date-Time</th>
            <th>P5 Given</th>
            <th>User Name</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {p5History.map((entry, index) => (
            <tr key={entry.id}>
              <td>{index + 1}</td>
              <td>{entry.dateTime}</td>
              <td>{entry.p5Given}</td>
              <td>{entry.userName}</td>
              <td><button>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default P5History;
