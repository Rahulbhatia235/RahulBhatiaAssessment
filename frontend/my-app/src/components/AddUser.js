

import axios from 'axios';
import React, {useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
const AddUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: '',
    name: ''
  });
  
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
        if (id) {
            // Update existing user
            await axios.put(`http://localhost:5000/api/users/${formData._id}`, {
                name:formData.name
            });
          } else {
            console.log("Creating New User", formData)
            // Create new user
            await axios.post('http://localhost:5000/api/users', {
            sNo:formData.id,
              name:formData.name
            });
          }
    }
    navigate('/');
  };


  return (
    <div>
      <h1>{id ? 'Edit User' : 'Create New User'}</h1>
      <form onSubmit={handleSubmit}>
      <div>
          <label>ID:</label>
          <input type="text" name="id" value = {formData.id} onChange= {handleChange} required />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value = {formData.name} onChange = {handleChange} required />
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
      <button type="submit" id="cancel" onClick = {handleSubmit}>Cancel</button>
    </div>
  );
};

export default AddUser;
