import React from 'react';
import grastjerne from '../assets/Images/logoms.png';
import LazyLoad from 'react-lazyload';


const KompSeks = (props) => {
  const { omBagg, OmBilledeclassName, omavenirImg, KompSeksclassName, children } = props;

  return (
    <div className={`KompSeks ${KompSeksclassName}`}>
      <LazyLoad height={200} once>
        <img src={grastjerne} alt="AVENIR logo med sjterne" className='gralogoStj' />
      </LazyLoad>
      <div className='OmbilledeR' style={{ backgroundImage: `url(${omBagg})` }}>
        <LazyLoad height={200} once>
          <img src={omavenirImg} alt="Avenir webbureau" className={`OmBillede ${OmBilledeclassName}`} />
        </LazyLoad>
      </div>
      <div className='omH1'>
        {children}
      </div>
    </div>
  )
}

export default KompSeks;