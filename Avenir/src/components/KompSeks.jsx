import React from 'react';
import grastjerne from '../assets/Images/logoms.png'


const KompSeksB = (props) => {
    const {KompSeksclassName, backgroundImage, children } = props;
  return (
    <div className={`KompSeks ${KompSeksclassName}`} style={{backgroundImage: `url(${backgroundImage})`}}>
        <img src={grastjerne} alt="AVENIR logo med sjterne" className='gralogoStj'/>
        <div className='omH1'>
            {children}
        </div>
    </div>
  )
}

export default KompSeksB