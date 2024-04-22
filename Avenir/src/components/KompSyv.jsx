import React from 'react'
import hvidstjerne from '../assets/Images/stjerne.png';



export const KompSyv = (props) => {
    const content = props.children;
    const{LRclassName, LRimg, LVclassName, LilleH} = props;
  return (
    <div className='KompSyv'>
      <div className='SyvText'>
        {content}
      </div>
      <img src={hvidstjerne} alt="AVENIR logo med sjterne" className='hvidstjerne' loading="lazy"/>
      <div className={`Lilleramme ${LRclassName}`}>
        <img src={LRimg} className='LSaflang' loading="lazy"></img>
        <div className='LSramme'>
          <div className={`LilleV ${LVclassName}`}></div>
          <div className={`LilleH ${LilleH}`}></div>
        </div>
      </div>
    </div>
  )
}
export default KompSyv