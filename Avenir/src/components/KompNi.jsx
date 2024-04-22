import React from 'react'

const KompNi = (props) => {
    const content = props.children
    const{LRclassName, LRimg, LVclassName, LilleHT} = props;
    
  return (
    <div className='KompNi'>
        
        <div className={`Lilleramme ${LRclassName}`}>
            <img src={LRimg} className='LSaflangRotate' loading="lazy"></img>
            <div className='LSramme'>
                <div className={`LilleV ${LVclassName}`}></div>
                <div className={`LilleHT ${LilleHT}`}></div>
            </div>
      </div>
      <div className='komp9text'>
        {content}
      </div>
    </div>
  )
}

export default KompNi