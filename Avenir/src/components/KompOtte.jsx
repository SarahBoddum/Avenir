import React from 'react'
import hvidstjerne from '../assets/Images/stjerne.png';


const KompOtte = (props) => {
    const content = props.children
    const {skjulStjerneCirkler, CTVclassName, CTHclassName, CBVclassName, CBHclassName } = props;

  return (
    <div className='KompOtte'>
        <div className='streg'></div>
        <div className='flextext'>
            {content}
        </div>
        <div className={`StjerneCirkler ${skjulStjerneCirkler}`}>
            <img src={hvidstjerne} className='StjerneOtte'></img>
            <div className='cirkelramme'>
                <div className='cirkeltop'>
                    <div className={`CTV ${CTVclassName}`}></div>
                    <div className={`CTH ${CTHclassName}`}></div>
                </div>
                <div className='cirkeltop'>
                    <div className={`CBV ${CBVclassName}`}></div>
                    <div className={`CBH ${CBHclassName}`}></div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default KompOtte