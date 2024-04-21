import React from 'react'
import logobagg from '../assets/Images/logoOgbagg.png'
import Abaggrund from './Abaggrund'

const KompTo = (props) => {
  const content = props.children
  const {textTilAbaggKompto} = props;
   
  return (
    <div className='KompTo'>
        <Abaggrund
        text={textTilAbaggKompto}>
        </Abaggrund>
        <div className='komptoTxt'>
           {content}
        </div>
    </div>
  )
}

export default KompTo