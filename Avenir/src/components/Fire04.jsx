import React from 'react';
import gronoje from '../assets/Images/soOje.jpg';
import { Link } from 'react-router-dom';

const Fire04Page = () => {
 

  return (
    <div className='Baredygtig'>
      <div className='KompEt'>
        <div className='figurramme'>
          <img src={gronoje} alt="Aflang billede" className='aflang' loading="lazy"/>
          <div className='tosma'>
            <div className='enrund rosa'></div>
            <div className='torund orange'></div>
          </div>
        </div>
        <div className='h1-p'>
          <h1>Looking for something?</h1>
          <h1>.404</h1>
          <Link className='btn' to="/">TIL FORSIDE</Link>
        </div>
      </div>
    </div>
  );
};

export default Fire04Page;