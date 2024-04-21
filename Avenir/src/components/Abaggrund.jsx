import React from 'react'
import logobagg from '../assets/Images/logoOgbagg.png'

export const Abaggrund = ({text}) => {
   
  return (
    <div className='Abaggrund' style={{backgroundImage: `url(${logobagg})`}}>
        <h3>{text}</h3>
    </div>
  )
}
export default Abaggrund
