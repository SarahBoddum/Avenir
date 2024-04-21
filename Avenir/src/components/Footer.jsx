import React from "react";
import tiktok from '../assets/Images/tiktok.svg'
import fb from '../assets/Images/fb.svg'
import insta from '../assets/Images/insta.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer1'>
                <div className='ikonboks'>
                    <img src={fb}></img>
                    <img src={insta}></img>
                    <img src={tiktok}></img>
                </div>
                    <div className='infoboks'>
                        <p>Ringvej Syd 104 <br></br>
                        8260 Viby, Danmark <br></br>
                        CVR: 86407836</p>
                    </div>
            </div>
            <div className='footer2'>
            
            </div>
            <div className='footer3'>

            </div>

        </div>
    )
}

export default Footer