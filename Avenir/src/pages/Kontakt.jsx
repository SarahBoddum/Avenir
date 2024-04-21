import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import database from './database'; // Import the initialized Firebase app from firebase.js



const Kontakt = () => {
  // State variables to store form data
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [meetingTime, setMeetingTime] = useState('');
  const [interestedPackages, setInterestedPackages] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Get a reference to the Firebase database
      //const database = Firebase.firestore(); // Correct access to Firebase database
      const newDoc = await addDoc(collection(database, "Booking"), {
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

      // Optionally, show a success message to the user
      alert('Booking submitted successfully!');
    } catch (error) {
      // Handle any errors that occur during submission
      console.error('Error submitting booking:', error);
      // Optionally, show an error message to the user
      alert('An error occurred while submitting the booking. Please try again later.');
    }
  };


  return (
    <div className='bookbox'>
      <h1>Book et møde hos AVENIR</h1>
      <form onSubmit={handleSubmit} className='bookform'>
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
  )
}

export default Kontakt;
