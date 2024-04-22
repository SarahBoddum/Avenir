import React from 'react'

const KompEt = (props) => {
    const content = props.children
    const { className, figurrammeClass, aflangSrc, aflangClass, tosmaClass, enrundClass, torundClass } = props;
   

  return (
    <div className={`KompEt ${className}`}>
        <div className={`figurramme ${figurrammeClass}`}>
            <img src={aflangSrc} alt="Aflang billede" className={`aflang ${aflangClass}`}  loading="lazy"/>
            <div className={`tosma ${tosmaClass}`}>
                <div className={`enrund rosa ${enrundClass}`}></div>
                <div className={`torund orange ${torundClass}`}></div>
            </div>
        </div>
        <div className='h1-p'>
            {content}
        </div>
    </div>
  )
}

export default KompEt