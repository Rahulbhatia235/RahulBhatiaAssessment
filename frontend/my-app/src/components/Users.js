// src/components/UserTable.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import { users } from '../data';
import axios from 'axios';
const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // Fetch users from the backend
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users');
        console.log(response.data)
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);
  return (
    <div>
      <h1>Users List View</h1>
      <button>
        <Link to="/new">Create New User</Link>
      </button>
      <table>
        <thead>
          <tr>
            <th>SrNo.</th>
            <th>Name</th>
            <th>P5 Balance</th>
            <th>Reward Balance</th>
            <th>Login</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.p5Balance}</td>
              <td>{user.rewardPoint}</td>
              <td>
                <Link to={`/${user.sNo}` } >Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
