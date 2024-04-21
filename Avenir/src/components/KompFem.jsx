import React from 'react'

const KompFem = (props) => {
    const content = props.children;
    const{SRlilleflip, SRmidtclassName, SRimg} = props; 
  return (
    <div className='KompTre'>
        <div className='storRamme'>
            <div className='SR'>
                <div className='rundHT rosa'></div>
                <div className='rundHB rod'></div>
                <div className='rundVT neongron'></div>
            </div>
            <div className={`SRmidt ${SRmidtclassName}`}>
                <div className={`SRmidtlille ${SRlilleflip}`}></div>
                <img src={SRimg}  alt="Aflang billede" className='SRimg' />
            </div>
            <div className='SR'>
                <div className='rundHT neongron'></div>
                <div className='rundVB lysgron'></div>
                <div className='rundVT orange'></div>
            </div>
        </div>
        <div className='h1-p'>
            {content}
        </div>
    </div>
  )
}

export default KompFem