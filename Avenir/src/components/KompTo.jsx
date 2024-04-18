import React from 'react'
import logobagg from '../assets/Images/logoOgbagg.png'
import Abaggrund from './Abaggrund'

const KompTo = (props) => {
    const content = props.children 
   
  return (
    <div className='KompTo'>
        <Abaggrund>
           {
                <h3>HVIS INTERNETTET VAR <br/>ET LAND, VILLE DET <br/>VÆRE DET 6. MEST<br/>FORURENENDE LAND<br/> PÅ VERDENSPLAN</h3>
            }
        </Abaggrund>
        <div className='komptoTxt'>
           {content}
        </div>
    </div>
  )
}

export default KompTo