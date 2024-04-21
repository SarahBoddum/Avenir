import React, { useState } from 'react';
import firebase from './firebase'; // Import Firebase from the firebase.js file
import 'firebase/database';

const Kontakt = () => {
  // State variables to store form data
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [meetingTime, setMeetingTime] = useState('');
  const [interestedPackages, setInterestedPackages] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyDbZ-IVJSkQEENI0mlNbYu8WGTCTopN6ZU",
      authDomain: "avenir-4f05a.firebaseapp.com",
      projectId: "avenir-4f05a",
      storageBucket: "avenir-4f05a.appspot.com",
      messagingSenderId: "628420128652",
      appId: "1:628420128652:web:f843b4138482f31ff2b0a9"
    };

    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    // Get a reference to the Firebase database
    const database = firebase.database();

    // Push booking data to Firebase database
    database.ref('bookings').push({
      name,
      companyName,
      email,
      phoneNumber,
      meetingTime,
      interestedPackages
    });

    // Clear form fields after submission
    setName('');
    setCompanyName('');
    setEmail('');
    setPhoneNumber('');
    setMeetingTime('');
    setInterestedPackages('');
  };

  return (
    <div>
      <h1>Kontakt os</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Navn:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Navn på virksomhed:</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div>
          <label>E-mail:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Telefon nummer:</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Ønskede møde tidspunkt:</label>
          <input
            type="text"
            value={meetingTime}
            onChange={(e) => setMeetingTime(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Skriv hvilke pakker du er interesseret i:</label>
          <input
            type="text"
            value={interestedPackages}
            onChange={(e) => setInterestedPackages(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send Booking</button>
      </form>
    </div>
  );
};

export default Kontakt;
