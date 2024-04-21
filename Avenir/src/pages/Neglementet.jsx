import React from 'react';
import servicetop from '../assets/Images/Servicetop.jpg';

const Neglementet = () => {
  return (
    <div className='Service'>
        <KompFem
          SRlilleflip="SRmidtL orange"
          SRimg={servicetop}>
              <div>
                  <h1 className='storH1'>Services</h1>
                  <p>Som en del af vores services inkorporerer vi vores bæredygtigsheds principper i vores web løsninger.  Vi imødekommer dine behov omend det er en af vores pakkeløsninger - eller vores Pick’n’Mix løsning. </p>
                  <div className="btndiv leftalign">
                      <div className="btn storbtn">
                          PAKKELØSNINGER
                      </div>                
                      <div className='btnpil'>
                          PICK'N'MIX
                          <img className="pil" src={pil}></img>
                      </div>
                  </div>
              </div>
        </KompFem>
    </div>
  )
}

export default Neglementet