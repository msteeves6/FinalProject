// src/LocationsToAdopt.js

import React, { useState } from 'react';
import locationData from './location.json';
import './AdoptionLocation.css';

function LocationsToAdopt() {
  const [category, setCategory] = useState('dog_shelters');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const dogShelters = locationData.dog_shelters;
  const catShelters = locationData.cat_shelters;
  const dogBreeders = locationData.dog_breeders;
  const catBreeders = locationData.cat_breeders;

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleAddLocation = () => {
    const newLocation = {
      name: name,
      address: address,
      email: email,
      phone_number: phoneNumber,
    };

    locationData[category].push(newLocation);

    setName('');
    setAddress('');
    setEmail('');
    setPhoneNumber('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddLocation();
    }
  };

  return (
    <div className="locations-container">
      <h2>Locations to Adopt</h2>

      <div className="location-group">
        <h3>Dog Shelters</h3>
        <div className="location-cards">
          {dogShelters.map((shelter, index) => (
            <div key={index} className="location-card">
              <strong>{shelter.name}</strong>
              <p>{shelter.address}</p>
              <p>Email: {shelter.email}</p>
              <p>Phone Number: {shelter.phone_number}</p>
            </div>
          ))}
        </div>
        <h3>Cat Shelters</h3>
        <div className="location-cards">
          {catShelters.map((shelter, index) => (
            <div key={index} className="location-card">
              <strong>{shelter.name}</strong>
              <p>{shelter.address}</p>
              <p>Email: {shelter.email}</p>
              <p>Phone Number: {shelter.phone_number}</p>
            </div>
          ))}
        </div>
        <h3>Dog Breeders</h3>
        <div className="location-cards">
          {dogBreeders.map((shelter, index) => (
            <div key={index} className="location-card">
              <strong>{shelter.name}</strong>
              <p>{shelter.address}</p>
              <p>Email: {shelter.email}</p>
              <p>Phone Number: {shelter.phone_number}</p>
            </div>
          ))}
        </div>
        <h3>Cat Breeders</h3>
        <div className="location-cards">
          {catBreeders.map((shelter, index) => (
            <div key={index} className="location-card">
              <strong>{shelter.name}</strong>
              <p>{shelter.address}</p>
              <p>Email: {shelter.email}</p>
              <p>Phone Number: {shelter.phone_number}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="add-location">
        <h3>Add New Location</h3>
        <div>
          <label htmlFor="category">Category:</label>
          <select id="category" value={category} onChange={handleCategoryChange}>
            <option value="dog_shelters">Dog Shelters</option>
            <option value="cat_shelters">Cat Shelters</option>
            <option value="dog_breeders">Dog Breeders</option>
            <option value="cat_breeders">Cat Breeders</option>
          </select>
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            onKeyPress={handleKeyPress} 
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={handleAddressChange}
            onKeyPress={handleKeyPress} 
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
            onKeyPress={handleKeyPress} 
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            onKeyPress={handleKeyPress} 
          />
        </div>
        <button onClick={handleAddLocation}>Add Location</button>
      </div>
    </div>
  );
}

export default LocationsToAdopt;
