import React from 'react';
import pil from '../assets/Images/pil.svg';
import logo from '../assets/Images/gralogo.png';
import KompEt from '../components/KompEt';
import KompTo from '../components/KompTo';
import gronoje from '../assets/Images/soOje.jpg';
import KompFire from '../components/KompFire';
import KompFem from '../components/KompFem';
import aogs from '../assets/Images/aogs.jpg'
import KompTre from '../components/KompTre';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import aoje from '../assets/Images/Servicetop.jpg'



export const Forside = () => {

  return (
    <div>
        <div id='forsidetop'>
            

    <iframe className='blad' src="https://lottie.host/embed/537f0d85-6157-4009-a86e-0bc58ff3901f/Uk4Yqd1H7h.json"></iframe>
            <div id='ramme' style={{backgroundImage: `url(${logo})`}}>
                <h1>AVENIR</h1>
                <h3 className='laptop'>VI DESIGNER FREMTIDENS <br />DIGITALE WEB <br />LØSNINGER</h3>
                <h3 className='mobil'>VI DESIGNER <br />FREMTIDENS DIGITALE <br />WEBLØSNINGER</h3>
                <div className="btndiv">
                    <Link className="btn" to="/Services">
                        VORES SERVICES
                    </Link>                
                    <Link className='btnpil' to="/Kontakt">
                        BOOK ET MØDE
                        <img className="pil" src={pil}></img>
                    </Link>
                </div>
            </div>
            
        </div>
        <KompEt
            className="reverserow"
            aflangSrc={gronoje}>
            
            <h1>Vi tager hånd om <br/><span className="rosatxt">fremtidens<br/></span>webløsninger</h1>
            <p>AVENIR er et ungt bureau og vi har fremtiden foran os. Sammen skaber vi løsninger, der perfektionerer din digitale tilstedeværelse. Vi sætter os grundigt ind i din virksomheds udfordringer og potentiale, så vi sammen kan finde og udvikle den løsning, der skaber den bedste fremtid for din virksomhed.</p>
        </KompEt>
        <KompTo
        textTilAbaggKompto="HVIS INTERNETTET VAR ET LAND, VILLE DET VÆRE DET 6. MEST FORURENENDE LAND PÅ VERDENSPLAN">
            {<div>
                <p>Vi tager dig i hånden når du tager dine første skridt mod en hjemmeside for en bedre fremtid. En fremtid hvor vi laver æstetiske, brugervenlige og højt konverterende hjemmesider,  der også følger bæredygtigheds principperne. Hos os er intet umuligt og alting muligt, så vi står klar til at hjælpe dig, præcis hvor du er og hvor du gerne vil ende henne.</p>
                <Link className='btn' to="/Kontakt">BOOK ET MØDE</Link>
            </div>
            }
        </KompTo>

        <div className='KompFire'>
            <KompFire
            tombclassName="tombshapeEt">
            <div className='tombtxt'>
                <div>
                    <h1>01.</h1>
                    <h3>PRINCIP</h3>
                </div>
                <p>Effektiv data transfer med komprimering og tilpasning af indholdet</p>
            </div>

            </KompFire>
            <KompFire
            tombclassName="tombshapeEt tsTo">
            <div className='tombtxt'>
                <div>
                    <h1>02.</h1>
                    <h3>PRINCIP</h3>
                </div>
                <p>Brugerne skal effektivt kunne finde frem til deres ønsker/løsninger</p>
            </div>

            </KompFire>
            <KompFire
            tombclassName="tombshapeEt tsTre">
            <div className='tombtxt'>
                <div>
                    <h1>03.</h1>
                    <h3>PRINCIP</h3>
                </div>
                <p> Fortæl om hvad du gør - Intet mere, intet mindre</p>
            </div>

            </KompFire>
            <KompFire
            tombclassName="tombshapeEt tsFire">
            <div className='tombtxt'>
                <div>
                    <h1>04.</h1>
                    <h3>PRINCIP</h3>
                </div>
                <p>Alt det du ikke kan se</p>
            </div>

            </KompFire>

        </div>

        <KompFem
        SRlilleflip="SRmidtL orange"
        SRimg={aoje}>
            <div>
                <h1 className='storH1'>Services</h1>
                <p>Som en del af vores services inkorporerer vi vores bæredygtigsheds principper i vores web løsninger.  Vi imødekommer dine behov omend det er en af vores pakkeløsninger - eller vores Pick’n’Mix løsning. </p>
                <div className="btndiv leftalign">
                    <Link className="btn storbtn" to="/Services">
                        PAKKELØSNINGER
                    </Link>                
                    <Link className='btnpil' to="/Services">
                        PICK'N'MIX
                        <img className="pil" src={pil}></img>
                    </Link>
                </div>
            </div>
        </KompFem>

        <KompTre
            treimgSrc={aogs}
            treimgClass="bladimg"
            >
           <div className='komptretxt'>
                <h1>AVENIR teamet</h1>
                <p>AVENIR er et ungt webbureau sammensat af fire engagerede kvinder, som deler en passion for bæredygtige løsninger inden for livsstilsbranchen og bringer en mangfoldighed af baggrunde ind i vores arbejde. Vores ekspertise spænder bredt fra mode og makeup til smykker, musik og fotografi.  Vi mødtes under studierne og har opdaget, at vores forskellige erfaringer skaber et dynamisk og kreativt arbejdsmiljø, hvor vi kan skabe unikke og innovative webløsninger for vores kunder.</p>
                <Link className='btn' to="/cases">SE VORES CASES</Link>
            </div>
        </KompTre>

        <Footer></Footer>
    </div>
  )
}
export default Forside