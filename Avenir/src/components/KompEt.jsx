import React from 'react'

const KompEt = (props) => {
    const content = props.children

  return (
    <div className='KompEt reversrow'>
        <div className='figurramme'>
            <div className='aflang neongron'></div>
            <div className='tosma'>
                <div className='enrund rosa'></div>
                <div className='torund orange'></div>
            </div>
        </div>
        <div className='h1-p'>
            {content}
        </div>
    </div>
  )
}

export default KompEt