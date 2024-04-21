import React from "react";
import tiktok from '../assets/Images/tiktok.svg'
import fb from '../assets/Images/fb.svg'
import insta from '../assets/Images/insta.svg'
import gronlogo from '../assets/Images/logoAVENIR.png'

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
                <h1>Vi tager hånd om <span className='Trosa'>fremtidens</span> webløsninger</h1><br></br>
                <p>
                Tlf: +45 47 98 09 25<br></br>
                Info@avenirstudios.dk
                </p>
            </div>
            <div className='footer3'>
                <img src={gronlogo}></img>
                <h1>AVENIR</h1>
            </div>

        </div>
    )
}

export default Footer