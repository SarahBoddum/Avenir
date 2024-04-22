import React from 'react'


const KompTre = (props) => {
    const content =props.children;
    const{KomptreClass, treimgSrc, treimgClass} = props;
  

  return (
    <div className={`KompTre ${KomptreClass}`}>
        <div className='h1-p'>
            {content}
        </div>
        <img src={treimgSrc} alt="Aflang billede" className={`treimg ${treimgClass}`}  loading="lazy"/>
    </div>
  )
}

export default KompTre