import React from 'react'
import KompNi from '../components/KompNi';
import gronoje from '../assets/Images/soOje.jpg';
import lyserodpil from '../assets/Images/pil.svg';


const BlogPage = () => {
  return (
    <div className='casePage'>
      <h1 className='topH1'>Cases</h1>

      <KompNi  LRclassName="deg180"
        LRimg={gronoje}
        LVclassName="torund rod"
        LilleHT="rosa">
            <h3>NEGLEMENTET</h3>
            <div className='casetext'>
                <p><span classname="regular">TIDY UP</span> 12/04/2024</p>
                <img src={lyserodpil} alt="lyserød pil" className='lyserodpil'></img>
            </div>
      </KompNi>

      <KompNi  
        LRclassName="deg90"
        LRimg={gronoje}
        LVclassName="torund rod"
        LilleHT="rosa">
            <h3>WALTHERS <span className='mobil'><br/></span>VINTAGE</h3>
            <div className='casetext'>
                <p><span classname="regular">PICTURE PERFECT</span> 12/04/2024</p>
                <img src={lyserodpil} alt="lyserød pil" className='lyserodpil'></img>
            </div>
      </KompNi>

      <KompNi  
        LRclassName="deg0"
        LRimg={gronoje}
        LVclassName="torund rod"
        LilleHT="rosa">
            <h3>IGEN</h3>
            <div className='casetext'>
                <p><span classname="regular">OPTIMZE</span> 12/04/2024</p>
                <img src={lyserodpil} alt="lyserød pil" className='lyserodpil'></img>
            </div>
      </KompNi>
      <div className='serviceStreg'></div>
    </div>
  )
}

export default BlogPage