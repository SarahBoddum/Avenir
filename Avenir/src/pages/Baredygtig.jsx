import React from 'react';
import KompFem from '../components/KompFem';
import aoje from '../assets/Images/AnOje.jpg';
import KompOtte from '../components/KompOtte';
import Footer from '../components/Footer';
import KompFire from '../components/KompFire';
import al from '../assets/Images/grafik1.svg';
import cn from '../assets/Images/grafik2.svg';
import sb from '../assets/Images/grafik4.svg';
import sk from '../assets/Images/grafik3.svg';

export const BaredygtigPage = () => {
  return (
    <div className='Baredygtig'>
      <KompFem
        SRmidtclassName="flip"
        SRlilleflip="rosa rundHT"
        SRimg={aoje}>
            <div>
                <h1 className='storH1'>Vores bæredygtigheds
                principper </h1>
                <p>Hos AVENIR er vores arbejde baseret på vores fire centrale bæredygtigheds principper.  Vi tror på, at det er muligt at integrere vores principper i designprocessen uden at kompromittere æstetik og identitet, sådan at vi sammen kan skabe en bedre fremtid. </p>
                
            </div>
        </KompFem>
        <div className='KompFire'>
            <KompFire
            tombImg={sb}
            tombclassName="tombBaggrundEt grafik1">
            <div className='tombtxt'>
                <div className='teamKompfire'>
                   <h2>.01</h2>
                   <p>KOMPRIMERING</p>
                </div>  
            </div>

            </KompFire>
            <KompFire
            tombImg={cn}
            tombclassName="tombBaggrundTo grafik2">
            <div className='tombtxt'>
                <div className='teamKompfire'>
                   <h2>.02</h2>
                   <p>NAVIGATION</p>
                </div> 
            </div>

            </KompFire>
            <KompFire
            tombImg={al}
            tombclassName="tombBaggrundTre grafik3">
            <div className='tombtxt'>
                <div className='teamKompfire'>
                   <h2>.03</h2>
                   <p>HONEST</p>
                </div> 
            </div>

            </KompFire>
            <KompFire
            tombImg={sk}
            tombclassName="tombshapeEt tombBaggrundFire grafik4">
            <div className='tombtxt'>
                <div className='teamKompfire'>
                   <h2>.04</h2>
                   <p>KODE/HOSTING</p>
                </div> 
            </div>

            </KompFire>
            </div>

        <KompOtte
            CTVclassName="colorunset"
            CTHclassName="colorunset"
            CBVclassNames=""
            CBHclassName="colorunset">
                <h1>.01</h1>
                <h2>Effektiv data transfer med komprimering og tilpasning af indholdet</h2>
                <p>Alt indhold på et website fylder og udleder 
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
 <br/><br/>
 
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
<br/><br/>
Sidst så har bør man også overveje 
fontvalget. Det giver mening at anvende præ-
installerede fonte, såsom Helvetica, Arial, 
Times New Roman mv. Disse fonte kræver 
nemlig ingen dataoverførsler eller server 
anmodninger, og fontene er nærmest gratis
</p>
            
        </KompOtte>

        <KompOtte
            CTVclassName="colorunset"
            CTHclassName=""
            CBVclassNames=""
            CBHclassName="colorunset">
                <h1>.02</h1>
                <h2>Brugerne skal effektivt kunne finde frem til deres ønsker/løsninger</h2>
                <p>Desto mere data der anvendes, desto mere elektricitet strømmer der gennem kablerne, og brug af elektricitet resulterer i udledning af CO2. For at mindske mængden af data er det oplagt at overveje længden af brugerrejsen. Hvis en bruger i øjeblikket skal besøge fire undersider for at fuldføre brugerrejsen, kan en omstrukturering af rejsen til kun to undersider markant reducere CO2-aftrykket af deres besøg på sitet. Samtidig forbedrer dette også brugeroplevelsen ved at gøre vejen til målet hurtigere og mere direkte med færre klik.</p>
            
        </KompOtte>

        <KompOtte
            CTVclassName="colorunset"
            CTHclassName=""
            CBVclassNames=""
            CBHclassName="">
                <h1>.03</h1>
                <h2>Fortæl om hvad du gør - Intet mere, intet mindre</h2>
                <p>Desværre er greenwashing og greenhushing begreber vi er blevet ret bekendte med når det kommer til virksomheders påstande om at være ´bæredygtig`. Begreberne omfatter at flere virksomheder gerne vil brande sig for at være ”bæredygtige”, dog opleves det ofte, at de ikke efterlever det de lover forbrugeren og altså tager munden lidt for fuld. Derfor er det vigtigt, at der formidles ærligt, når man påstår at være bæredygtig. For at fremstå troværdig, er det altså vigtig at man er ærlig, omend det er de store- eller små bæredygtige tiltag, man gør sig. </p>
            
        </KompOtte>

        <KompOtte
            CTVclassName=""
            CTHclassName=""
            CBVclassNames=""
            CBHclassName="">
                <h1>.04</h1>
                <h2>Alt det du ikke kan se</h2>
                <p>En god kode er også afgørende for at mindske CO2 udledningen på et website. En kortere og mere præcis kode, skåner serveren for at indlæse unødvendigt og overflødigt data. Det vil resultere i et lavere strømforbrug, hvilket bidrager til et mere bæredygtigt webdesign. Det man kan gøre, er at strømline filer og undgå duplikation af funktioner, reducere antallet og kompleksiteten af forespørgsler der skal til for at levere en bestemt funktionalitet, at kode websites uden plugins, der indeholder funktioner, som er unødvendige. </p>
            
        </KompOtte>
        <Footer></Footer>
    </div>
  )
}

export default BaredygtigPage
