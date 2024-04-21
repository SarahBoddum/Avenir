import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import database from './database'; // Import the initialized Firebase app from firebase.js
import KompTre from '../components/KompTre';
import coga from '../assets/Images/coga.jpg';
import Footer from '../components/Footer';
import pil from '../assets/Images/pil.svg';



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
        <KompTre
            KomptreClass="modsat"
            treimgSrc={coga}
            treimgClass="bordernone"
            >
          <h1>Book et møde hos <span className='Tlysg'>AVENIR</span></h1>
      <form onSubmit={handleSubmit} className='bookform'>
        <div className='todeltform'>
          <div>
            <input className='lilleinput' placeholder='Navn på kontaktperson'
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <input className='lilleinput' placeholder='Navn på virksomhed'
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
        </div>
        <div className='todeltform'>
          <div>
            <input placeholder='E-mail'
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input placeholder='Telefon nummer'
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
        </div>
        <div>
          <input placeholder='Ønskede mødetidspunkter'
            type="text"
            value={meetingTime}
            onChange={(e) => setMeetingTime(e.target.value)}
            required
          />
        </div>
        <div className='storinput'>
          <textarea placeholder='Skriv hvilke pakker du er interesseret i eller hvis du har andre kommentarer...'
            type="text"
            value={interestedPackages}
            onChange={(e) => setInterestedPackages(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send Booking <img src={pil}></img></button>
      </form>
      </KompTre>
      <Footer></Footer>
      
     

    </div>
  )
}

export default Kontakt;
