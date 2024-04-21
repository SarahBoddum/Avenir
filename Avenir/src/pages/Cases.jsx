import React from 'react'
import KompNi from '../components/KompNi';
import lyserodpil from '../assets/Images/pil.svg';
import negleforside from '../assets/Images/NeglementetEt.jpg';
import igen from '../assets/Images/igenCase.jpg';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import walther from '../assets/Images/walther.jpg';


const CasePage = () => {
  return (
    <div className='Baredygtig'>
      <h1 className='topH1'>Cases</h1>

      <KompNi  LRclassName="deg180"
        LRimg={negleforside}
        LVclassName="torund rod"
        LilleHT="rosa">
            <h3>NEGLEMENTET</h3>
            <Link className='casetext' to="/neglementet">
                <p><span classname="regular">TIDY UP</span> 12/04/2024</p>
                <img src={lyserodpil} alt="lyserød pil" className='lyserodpil'></img>
            </Link>
      </KompNi>

      <KompNi  
        LRclassName="deg90"
        LRimg={walther}
        LVclassName="torund lysgron"
        LilleHT="orange">
            <h3>WALTHERS <span className='mobil'><br/></span>VINTAGE</h3>
            <div className='casetext'>
                <p><span classname="regular">PICTURE PERFECT</span> 12/04/2024</p>
                <img src={lyserodpil} alt="lyserød pil" className='lyserodpil'></img>
            </div>
      </KompNi>

      <KompNi  
        LRclassName="deg0"
        LRimg={igen}
        LVclassName="torund neongron"
        LilleHT="rosa">
            <h3>IGEN</h3>
            <div className='casetext'>
                <p><span classname="regular">OPTIMZE</span> 12/04/2024</p>
                <img src={lyserodpil} alt="lyserød pil" className='lyserodpil'></img>
            </div>
      </KompNi>
      <div className='serviceStreg'></div>
      <Footer></Footer>
    </div>
  )
}

export default CasePage