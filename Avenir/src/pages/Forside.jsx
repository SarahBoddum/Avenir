import React from 'react'
import pil from '../assets/Images/pil.svg'
import logo from '../assets/Images/gralogo.png'
import KompEt from '../components/KompEt'



export const Forside = () => {
  return (
    <div>
        <div id='forsidetop'>
            <div className='blad'></div>
            <div id='ramme' style={{backgroundImage: `url(${logo})`}}>
                <h1>AVENIR</h1>
                <h3 className='laptop'>VI DESIGNER FREMTIDENS <br />DIGITALE WEB <br />LØSNINGER</h3>
                <h3 className='mobil'>VI DESIGNER <br />FREMTIDENS DIGITALE <br />WEBLØSNINGER</h3>
                <div className="btndiv">
                    <div className="btn">
                        VORES SERVICES
                    </div>                
                    <div className='btnpil'>
                        BOOK ET MØDE
                        <img className="pil" src={pil}></img>
                    </div>
                </div>
            </div>
            
        </div>
        <KompEt>
            <h1>Vi tager hånd om <br/><span className="rosatxt">fremtidens<br/></span>webløsninger</h1>
            <p>AVENIR er et ungt bureau og vi har fremtiden foran os. Sammen skaber vi løsninger, der perfektionerer din digitale tilstedeværelse. Vi sætter os grundigt ind i din virksomheds udfordringer og potentiale, så vi sammen kan finde og udvikle den løsning, der skaber den bedste fremtid for din virksomhed.</p>
        </KompEt>
        </div>
  )
}
export default Forside