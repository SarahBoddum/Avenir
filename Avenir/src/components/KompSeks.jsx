import React from 'react';
import grastjerne from '../assets/Images/logoms.png'


const KompSeks = (props) => {
    const {omBagg, OmBilledeclassName, omavenirImg, KompSeksclassName, children } = props;
  return (
    <div className={`KompSeks ${KompSeksclassName}`}>
        <img src={grastjerne} alt="AVENIR logo med sjterne" className='gralogoStj'/>
        <div className='OmbilledeR' style={{backgroundImage: `url(${omBagg})`}}>
          <img src={omavenirImg} alt="Avenir webbureau" className={`OmBillede ${OmBilledeclassName}`}/>
        </div>
        <div className='omH1'>
            {children}
        </div>
    </div>
  )
}

export default KompSeks