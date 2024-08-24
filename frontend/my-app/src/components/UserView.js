// src/components/UserView.js

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { users } from '../data';
import axios from 'axios';
// Dummy user data


const UserView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    // Fetch users from the backend
    const fetchUsers = async () => {
      try {
        console.log(id)
        const response = await axios.get(`http://localhost:5000/api/users/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);


  const handleSave = () => {
    // Save logic here
    navigate('/');
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>View User</h1>
      <div>
        <label>Name: {user.name}</label>
      </div>
      <button onClick={() => navigate(`/${id}/p5`)}>View P5 Balance: {user.p5Balance}</button>
      <button onClick={() => navigate(`/${id}/rewards`)}>View Reward Balance: {user.rewardBalance}</button>
      <button onClick={handleSave}>Save</button>
      <button onClick={() => navigate('/')}>Cancel</button>
    </div>
  );
};

export default UserView;
