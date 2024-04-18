import React from 'react'

const KompFire = (props) => {
    const{tombImg, tombclassName } = props
    const content = props.children;

  return (
    <div className={`tombBaggrund ${tombclassName}`} style={{tombImg: `url(${tombImg})`}}>
        {content}
    </div>
  )
}

export default KompFire