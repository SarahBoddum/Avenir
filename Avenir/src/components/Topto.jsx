import React from 'react'

const Topto = (props) => {
    const content = props.children;
    const storForm = props.stor;
    return (
    <div className='flex'>
        <div className={storForm}></div>
        <div className='h1-p'>
            {content}
        </div>
    </div>
  )
}

export default Topto