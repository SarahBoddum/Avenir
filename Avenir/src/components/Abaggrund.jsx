import React from 'react'
import logobagg from '../assets/Images/logoOgbagg.png'

export const Abaggrund = (props) => {
    const content = props.children
  return (
    <div className='Abaggrund' style={{backgroundImage: `url(${logobagg})`}}>
        {content}
    </div>
  )
}
export default Abaggrund
