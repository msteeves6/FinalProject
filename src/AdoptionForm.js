// AdoptionForm.js
import React, { useState } from 'react';
import './AdoptionForm.css';

function AdoptionForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    animal: '', 
    message: '',
    animalName: '', 
    shelterLocation: '', 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    setFormData({
      name: '',
      email: '',
      animal: '',
      message: '',
      animalName: '',
      shelterLocation: '',
    });
  };

  return (
    <div className="adoption-form-container">
      <h2>Adopt an Animal</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Animal:
            <select
              name="animal"
              value={formData.animal}
              onChange={handleChange}
            >
              <option value="">Select an animal</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Animal Name:
            <input
              type="text"
              name="animalName"
              value={formData.animalName}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Shelter Location:
            <input
              type="text"
              name="shelterLocation"
              value={formData.shelterLocation}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AdoptionForm;
