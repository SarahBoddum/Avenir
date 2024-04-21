import React from 'react';
import neglementet from '../assets/Images/NeglementetEtB.jpg';
import pil from '../assets/Images/pil.svg';
import KompFem from '../components/KompFem';
import { Link } from 'react-router-dom';
import KompNi from '../components/KompNi';
import Footer from '../components/Footer';
import negleto from '../assets/Images/Negleto.jpg'

const NeglementetPage = () => {
  return (
    <div className='Service'>
        <KompFem
        SRmidtclassName="flip"
        SRlilleflip="rosa rundHT"
          SRimg={neglementet}>
              <div>
                  <h1 className='storH1'>Neglementet</h1>
                  <p>Hos Avenir havde vi fornøjelsen af at samarbejde med neglestudiet Neglementet, hvor vi optimerede deres hjemmeside med vores pakkenløsning “tidy up”. </p>
                  <div className="btndiv leftalign">
                  <a className='btn' href="https://neglementet.outofmyhand.dk/" target="_blank">SE SITET</a>
                                   
                      <Link className='btnpil' to="/services">
                          SE PAKKEN
                          <img className="pil" src={pil}></img>
                      </Link>
                  </div>
              </div>
        </KompFem>

        <KompNi  
        LRclassName="deg180"
        LRimg={negleto}
        LVclassName="torund rod"
        LilleHT="rosa">
            <div className='negleflex'>
            <h2 className='negleH2'>Vi har allesammen brug for at få ryddet op en gang imellem</h2>
            <p className='neglep'>Alt indhold på et website fylder og udleder 
CO2. Derfor giver det enormt god mening 
at optimere alt indhold, så det er mest muligt 
bæredygtigt. En nem måde, at imødekomme 
dette på er ved at vælge den rigtige filtype til 
alt billede- og video indhold. Her kan man 
blandt andet bruge JPEGs til billeder og 
illustrationer, der indeholder meget skygge, 
bruge GIF eller SVG til stregtegninger og 
illustrationer og sidst bruge PNG eller GIF til 
simple billeder, som kun bruger få farver som 
fx ikoner og logoer. Disse justeringer kan ikke 
ses med det blotte øje, når man kaster sit 
blik på et site, dog ændrer det noget i det 
store billede, da CO2 udledningen mindskes.  
 
 
Farvevalget har også en betydning for CO2 
udledningen på et website. Mørke farver og 
særligt sort, er de mest effektive farver at 
anvende, da der bruges mindre strøm til at 
oplyse disse farver. For eksempel bruger blå 
farver mere strøm end både grøn og rød, og 
den mest energikrævende farve er hvid. 
Derfor tilbyder nogle apps/website at vise 
siden i darkmode. Som eksempel har google 
maps denne funktion. 
 
Sidst så har bør man også overveje 
fontvalget. Det giver mening at anvende præ-
installerede fonte, såsom Helvetica, Arial, 
Times New Roman mv. Disse fonte kræver 
nemlig ingen dataoverførsler eller server 
anmodninger, og fontene er nærmest gratis
</p>
            </div>
           
      </KompNi>
      <Footer></Footer>
    </div>
  )
}

export default NeglementetPage