import React from 'react'
import grastjerne from '../assets/Images/logoms.png'

export const KompSeksB = () => {
    const {backgroundImage, children } = props;
  return (
    <div className='KompSeksB' style={{backgroundImage: `url(${backgroundImage})`}}>
         <img src={grastjerne} alt="AVENIR logo med sjterne" className='gralogoStj'/>
        <div className='omH1'>
            {children}
        </div>
    </div>
  )
}
