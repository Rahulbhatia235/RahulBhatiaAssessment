// src/components/UserView.js

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { users } from '../data';
import axios from 'axios';
import AddUser from './AddUser';
// Dummy user data


const UserView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    id: '',
    name: ''
  });
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
  const handleChange = (e) => {
    console.log(formData)
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('==>',e.target.id)
    if(e.target.id != 'cancel') {
        // Logic to save user goes here
        await axios.put(`http://localhost:5000/api/users/${user._id}`, {
                name:formData.name
            });
    }
    navigate('/');
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>View User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value = {formData.name ? formData.name:user.name } onChange = {handleChange} required />
        </div>
        {/* <div>
          <label>P5 Balance:</label>
          <input type="number" name="p5Balance" required />
        </div>
        <div>
          <label>Reward Balance:</label>
          <input type="number" name="rewardBalance" required />
        </div> */}
        <button type="submit" id="save">Save</button>
        
      </form>
      <button onClick={() => navigate(`/${id}/p5`)}>View P5 Balance: {user.p5Balance}</button>
      <button onClick={() => navigate(`/${id}/rewards`)}>View Reward Balance: {user.rewardPoint}</button>
      <button onClick={() => navigate('/')}>Cancel</button>
    </div>
  );
};

export default UserView;
