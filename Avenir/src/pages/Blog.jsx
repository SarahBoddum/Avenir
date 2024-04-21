import React from 'react'
import KompNi from '../components/KompNi';
import gronoje from '../assets/Images/soOje.jpg';
import lyserodpil from '../assets/Images/pil.svg';
import hm from '../assets/Images/hm.jpg';


const BlogPage = () => {
  return (
    <div className='Baredygtig'>
      <h1 className='topH1'>Blog</h1>

      <KompNi  LRclassName="deg180"
        LRimg={gronoje}
        LVclassName="torund rod"
        LilleHT="rosa">
            <h3>LOTTIE FILES - EN NY MÅDE AT EKSPORTERE VIDEO, DER FYLDER MINDRE</h3>
            <div className='casetext'>
                <p><span classname="regular">VIDEO</span> 12/04/2024</p>
                <img src={lyserodpil} alt="lyserød pil" className='lyserodpil'></img>
            </div>
      </KompNi>

      <KompNi  
        LRclassName="deg90"
        LRimg={gronoje}
        LVclassName="torund orange"
        LilleHT="lysgron">
            <h3>LÆR MERE OM FARVER OG DERES ENERGIFORBRUG</h3>
            <div className='casetext'>
                <p><span classname="regular">FARVER</span> 12/04/2024</p>
                <img src={lyserodpil} alt="lyserød pil" className='lyserodpil'></img>
            </div>
      </KompNi>

      <KompNi  
        LRclassName="deg0"
        LRimg={hm}
        LVclassName="torund neongron"
        LilleHT="rosa">
            <h3>GREEN WASHING: BLIVER DU SNYDT AF LØFTER OM BÆREDYGTIGHED?</h3>
            <div className='casetext'>
                <p><span classname="regular">BÆREDYGTIGHED</span> 12/04/2024</p>
                <img src={lyserodpil} alt="lyserød pil" className='lyserodpil'></img>
            </div>
      </KompNi>
      <div className='serviceStreg'></div>
    </div>
  )
}

export default BlogPage