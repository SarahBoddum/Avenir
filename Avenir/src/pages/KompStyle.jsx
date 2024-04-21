import React from 'react';
import pil from '../assets/Images/pil.svg';
import logo from '../assets/Images/gralogo.png';
import KompEt from '../components/KompEt';
import KompTo from '../components/KompTo';
import gronoje from '../assets/Images/soOje.jpg';
import KompTre from '../components/KompTre';
import KompFire from '../components/KompFire';
import KompFem from '../components/KompFem';
import KompSeks from '../components/KompSeks';
import KompSyv from '../components/KompSyv';
import KompOtte from '../components/KompOtte';
import KompNi from '../components/KompNi';
import lyserodpil from '../assets/Images/pil.svg';




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
        <KompEt
            aflangSrc={gronoje}>
            
            <h1>Vi tager hånd om <br/><span className="rosatxt">fremtidens<br/></span>webløsninger</h1>
            <p>AVENIR er et ungt bureau og vi har fremtiden foran os. Sammen skaber vi løsninger, der perfektionerer din digitale tilstedeværelse. Vi sætter os grundigt ind i din virksomheds udfordringer og potentiale, så vi sammen kan finde og udvikle den løsning, der skaber den bedste fremtid for din virksomhed.</p>
        </KompEt>
        <KompTo>
            {<div>
                <p>Vi tager dig i hånden når du tager dine første skridt mod en hjemmeside for en bedre fremtid. En fremtid hvor vi laver æstetiske, brugervenlige og højt konverterende hjemmesider,  der også følger bæredygtigheds principperne. Hos os er intet umuligt og alting muligt, så vi står klar til at hjælpe dig, præcis hvor du er og hvor du gerne vil ende henne.</p>
                <div className='btn'>Book et møde</div>
            </div>
            }
        </KompTo>

        <KompTre
            treimgSrc={aogs}
            treimgClass="bladimg"
            >
           <div className='komptretxt'>
                <h1>AVENIR teamet</h1>
                <p>AVENIR er et ungt webbureau sammensat af fire engagerede kvinder, som deler en passion for bæredygtige løsninger inden for livsstilsbranchen og bringer en mangfoldighed af baggrunde ind i vores arbejde. Vores ekspertise spænder bredt fra mode og makeup til smykker, musik og fotografi.  Vi mødtes under studierne og har opdaget, at vores forskellige erfaringer skaber et dynamisk og kreativt arbejdsmiljø, hvor vi kan skabe unikke og innovative webløsninger for vores kunder.</p>
                <div className='btn'>SE VORES CASES</div>
            </div>
        </KompTre>
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
        SRimg={gronoje}>
            <div>
                <h1 className='storH1'>Services</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className="btndiv leftalign">
                    <div className="btn storbtn">
                        PAKKELØSNINGER
                    </div>                
                    <div className='btnpil'>
                        PICK'N'MIX
                        <img className="pil" src={pil}></img>
                    </div>
                </div>
            </div>
        </KompFem>
        <KompSeks
            KompSeksclassName='laptop'
           >
            <h1>Om<br />AVENIR</h1>
        </KompSeks>
        <KompSyv
            LRimg={gronoje}
            LilleH='rosa'
            LVclassName='orange'>
            <h1>Vi ønsker at skabe en fremtid hvor <span id='Tlysgron'>bæredygtigt webdesign</span> er for de mange.</h1>
            <p>Med æstetikken og den gode brugeroplevelse i højsædet, er vores vision at vise vejen mod en mere bevidst digital tilstedeværelse, der kan inspirere og drive branchen mod en bedre fremtid.</p>
        </KompSyv>
        <KompOtte
            CTVclassName=""
            CTHclassName=""
            CBVclassNames=""
            CBHclassName="">
                <h1>.01</h1>
                <h2>Brugerne skal effektivt kunne finde frem til deres ønsker/løsninger</h2>
                <p>Desto mere data der anvendes, desto mere elektricitet strømmer der gennem kablerne, og brug af elektricitet resulterer i udledning af CO2. For at mindske mængden af data er det oplagt at overveje længden af brugerrejsen. Hvis en bruger i øjeblikket skal besøge fire undersider for at fuldføre brugerrejsen, kan en omstrukturering af rejsen til kun to undersider markant reducere CO2-aftrykket af deres besøg på sitet. Samtidig forbedrer dette også brugeroplevelsen ved at gøre vejen til målet hurtigere og mere direkte med færre klik.</p>
            
        </KompOtte>
        <KompNi
        LRclassName="deg180"
        LRimg={gronoje}
        LVclassName="torund rod"
        LilleHT="rosa">
            <h3>NEGLEMENTET</h3>
            <div className='casetext'>
                <p><span classname="regular">TIDY UP</span> 12/04/2024</p>
                <img src={lyserodpil} alt="lyserød pil" className='lyserodpil'></img>
            </div>
        </KompNi>
      
        

    </div>
  )
}
export default Forside