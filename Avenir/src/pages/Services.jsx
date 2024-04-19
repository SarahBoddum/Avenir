import React from 'react';
import KompFem from '../components/KompFem';
import gronoje from '../assets/Images/soOje.jpg';
import pil from '../assets/Images/pil.svg';
import KompEt from '../components/KompEt';
import KompOtte from '../components/KompOtte';

const ServicesPage = () => {
  return (
    <div className='Service'>
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
       
        <KompEt aflangSrc={gronoje}>
            
            <h1>Vi tager hånd om <br/><span className="rosatxt">fremtidens<br/></span>webløsninger</h1>
            <p>AVENIR er et ungt bureau og vi har fremtiden foran os. Sammen skaber vi løsninger, der perfektionerer din digitale tilstedeværelse. Vi sætter os grundigt ind i din virksomheds udfordringer og potentiale, så vi sammen kan finde og udvikle den løsning, der skaber den bedste fremtid for din virksomhed.</p>
        </KompEt>

        <div className='serviceDiv'>
            <div className='txtLeft'>
                <h1 className='Trosa'>From Scratch</h1>
                <p>Pakken “From Scratch” er for dig der ikke har en eksisterende hjemmeside. Vi hjælper dig derfor med at få alt startet op fra bunden. Her vil det variere meget alt efter hvor meget du har i forvejen og hvor meget hjælp du gerne vil have fra os til f.eks. målgruppe, brugerundersøgelser og indhold. Uanset hvad finder vi frem til den bedste løsning for dig, hvor du starter din hjemmeside og visuelle identitet op med de allerbedste forudsætninger med udgangspunkt i vores bæredygtigheds principper. 
                </p>
                <div className='btnpil'>
                  BOOK ET MØDE
                  <img className="pil" src={pil}></img>
                </div>
            </div>
            <div className='txtRight'>
              <h3>INKLUDERET I PAKKEN</h3>
              <p>
              - Helt ny hjemmeside opbygget ud fra dit indhold<br/><br/>
              - Udvikling af en visuel identitet baseret på din målgruppe<br/><br/>
              - Logodesign - både primary, secondary og ikon<br/><br/>
              - Brandguide til din helt nye visuelle identitet<br/><br/>
              - Brugerundersøgelser foretaget for den bedste brugeroplevelse til din nye side<br/><br/>
              - Udvikling af grafiske elementer f.eks. vektorgrafik, animationer el.l.<br/><br/>
              - Redigering, tilpasning og komprimering af dit indhold til siden<br/><br/>
              - En hjemmeside opbygget ud fra vores bæredygtigheds principper helt fra bunden af<br/><br/>
              - Informationsarkitekturs opbygning ud fra brugervenlighed<br/><br/>

              </p>
            </div>
        </div>

        <div className='serviceDiv'>
            <div className='txtLeft'>
                <h1 className='Tneong'>Tidy up</h1>
                <p>Vi har allesammen brug for lige at få ryddet ud i vores ting en gang imellem, da der hurtigt kan samle sig alt mulig rod, man egentlig slet ikke får brugt. Det samme gælder for de fleste hjemmesider.
                Og ikke nok med at en deep clean af din hjemmeside vil gøre den endnu hurtigere, fylde mindre og dermed rangere bedre på søgemaskiner, så vil det også bidrage til en mindre CO2 udledning i forbindelse med brug af jeres hjemmeside.

                </p>
                <div className='btnpil'>
                  BOOK ET MØDE
                  <img className="pil" src={pil}></img>
                </div>
            </div>
            <div className='txtRight'>
              <h3>INKLUDERET I PAKKEN</h3>
              <p>
              - Oprydning i alle filer der ikke bruges herunder billeder og video
              <br/><br/>
              - Sortering og simplificering af kode
              <br/><br/>
              - Komprimering og optimering af billeder og video på siden
              <br/><br/>
              - Fjerne unødvendigt indhold der bare fylder
              </p>
            </div>
        </div>

        <div className='serviceDiv'>
            <div className='txtLeft'>
                <h1 className='Tlysg'>Picture Perfect</h1>
                <p>Hvis du lige har kørt din hjemmeside igennem en hjemmeside der måler, hvor meget CO2 din hjemmeside udleder pr page load, og det er gået op for dig at dine billeder og video er det der fylder allermest, så er “Picture perfect” pakken en nem og overskuelig måde hurtig at formindske din CO2 udledning på. Her ville det primære fokus være at optimere, tilpasse, vælge og oprydde både billeder og video på din side. Derudover vil der også være mulighed for at vælge en mere grafisk måde at spice din hjemmeside op, enten med din farvepalette, fonts eller grafiske elementer.
                </p>
                <div className='btnpil'>
                  BOOK ET MØDE
                  <img className="pil" src={pil}></img>
                </div>
            </div>
            <div className='txtRight'>
              <h3>INKLUDERET I PAKKEN</h3>
              <p>
              - Oprydning i alle filer der ikke bruges herunder billeder og video<br/><br/>
              - Komprimering og optimering af billeder og video på siden<br/><br/>
              - Fjerne unødvendigt indhold der bare fylder<br/><br/>
              - Sortering i antallet af billeder - lidt men godt<br/><br/>
              - Små ændringer i enten farvepalette, fonts eller grafiske elementer<br/><br/>
              </p>
            </div>
        </div>

        <div className='serviceDiv'>
            <div className='txtLeft'>
                <h1 className='Torange'>Optimize</h1>
                <p>Hvis din hjemmeside har brug for den helt store makeover, så er “Optimize me” pakken den perfekte løsning til dig, der ønsker at give din hjemmeside et glow up med masser af muligheder. Med denne pakke gennemgår vi alle elementerne sammen og finder frem til et resultat, hvor du både kan bibeholde det du holder af, få helt nye elementer tilføjet, forbedret brugeroplevelsen og optimeret hele sidens overordnede page load time, så din hjemmeside er i tråd med vores bæredygtigheds principper, men hvor du stadig får rig mulighed for at skille dig ud med.
                <br/><br/>
                Pssst… vores egen hjemmeside er opbygget ud fra principperne i denne pakke. 

                </p>
                <div className='btnpil'>
                  BOOK ET MØDE
                  <img className="pil" src={pil}></img>
                </div>
            </div>
            <div className='txtRight'>
              <h3>INKLUDERET I PAKKEN</h3>
              <p>
              - Oprydning i alle filer der ikke bruges herunder billeder og video<br/><br/>
              - Sortering og simplificering af kode<br/><br/>
              - Komprimering og optimering af billeder og video på siden<br/><br/>
              - Fjerne unødvendigt indhold der bare fylder<br/><br/>
              - Sortering i antallet af billeder<br/><br/>
              - Tilføjelse af vektor filer enten som billeder eller animationer<br/><br/>
              - Opdatering af farvepaletten<br/><br/>
              - Visuel identitet tilpasses og udvikles i tråd med siden<br/><br/>
              - Ny og forbedret user experience på baggrund af undersøgelser<br/><br/>
              - Opdateret informationsarkitektur<br/><br/>
              - Forbedring af page load time og dermed højere søgemaskine rangering og brugeroplevelse<br/><br/>
              </p>
            </div>
        </div>

        <div className='serviceDiv'>
            <div className='txtLeft'>
                <h1 className='Trosa'>From Scratch</h1>
                <p>Pakken “From Scratch” er for dig der ikke har en eksisterende hjemmeside. Vi hjælper dig derfor med at få alt startet op fra bunden. Her vil det variere meget alt efter hvor meget du har i forvejen og hvor meget hjælp du gerne vil have fra os til f.eks. målgruppe, brugerundersøgelser og indhold. Uanset hvad finder vi frem til den bedste løsning for dig, hvor du starter din hjemmeside og visuelle identitet op med de allerbedste forudsætninger med udgangspunkt i vores bæredygtigheds principper. 
                </p>
                <div className='btnpil'>
                  BOOK ET MØDE
                  <img className="pil" src={pil}></img>
                </div>
            </div>
            <div className='txtRight'>
              <h3>INKLUDERET I PAKKEN</h3>
              <p>
              - Oprydning i alle filer der ikke bruges herunder billeder og video
              <br/><br/>
              - Sortering og simplificering af kode
              <br/><br/>
              - Komprimering og optimering af billeder og video på siden
              <br/><br/>
              - Fjerne unødvendigt indhold der bare fylder
              </p>
            </div>
        </div>
        <KompEt aflangSrc={gronoje}>
            
            <h1>Vi tager hånd om <br/><span className="rosatxt">fremtidens<br/></span>webløsninger</h1>
            <p>AVENIR er et ungt bureau og vi har fremtiden foran os. Sammen skaber vi løsninger, der perfektionerer din digitale tilstedeværelse. Vi sætter os grundigt ind i din virksomheds udfordringer og potentiale, så vi sammen kan finde og udvikle den løsning, der skaber den bedste fremtid for din virksomhed.</p>
        </KompEt>
        <KompOtte
            skjulStjerneCirkler="displayNone"
            CTVclassName=""
            CTHclassName=""
            CBVclassNames=""
            CBHclassName="">
                <h1 className='Trosa'>.01</h1>
                <h2>Font</h2>
                <p>Optimering af fonts kan både være at genoverveje dine skrifttyper - de fonttyper, der er indlejret i browseren og derfor ikke fylder ekstra. 
                  <br /><br />
                  Hvis du stadig ønsker at importere din unikke font, sørger vi for at den er så lightweight som muligt.</p>
        </KompOtte>
        <KompOtte
            skjulStjerneCirkler="displayNone"
            CTVclassName=""
            CTHclassName=""
            CBVclassNames=""
            CBHclassName="">
                <h1 className='Tneong'>.02</h1>
                <h2>Farver</h2>
                <p>Hvis du ønsker at opdatere din farvepalette, kan det gøres på en måde hvor du kan formindske din hjemmesides energiforbrug på de skærme den vises. Det er f.eks. ved at bruge mørkere farver, men vi tilpasser selvfølgelig efter dine ønsker. </p>
        </KompOtte>
        <KompOtte
            skjulStjerneCirkler="displayNone"
            CTVclassName=""
            CTHclassName=""
            CBVclassNames=""
            CBHclassName="">
                <h1 className='Tlysg'>.03</h1>
                <h2>Billeder</h2>
                <p>Optimering af billeder er det punkt, der har størst indflydelse på et sites CO2 udslip. Vi tilbyder en bred vifte af muligheder lige fra at erstatte med illustrationer til komprimering af størrelse og filformater eller ny visuel identitet til dine billeder.</p>
        </KompOtte>
        <KompOtte
            skjulStjerneCirkler="displayNone"
            CTVclassName=""
            CTHclassName=""
            CBVclassNames=""
            CBHclassName="">
                <h1 className='Torange'>.04</h1>
                <h2>Video</h2>
                <p>Video er en af de tungeste filer på et site, hvis det er noget man har implementeret. Vi hjælper med at komprimere filerne, sortere i dem og gøre så de også hurtigere bliver loadet, hvilket også giver en bedre brugeroplevelse for kunden.</p>
        </KompOtte>
        <KompOtte
            skjulStjerneCirkler="displayNone"
            CTVclassName=""
            CTHclassName=""
            CBVclassNames=""
            CBHclassName="">
                <h1 className='Trod'>.05</h1>
                <h2>Kode</h2>
                <p>Når du ser et site, tænker du ikke nødvendigvis over hvor meget kode der ligger bagved. Men genbrug af kode, oprydning af kode og generelt bruge de rigtige kodesprog har også en betydning for hvor meget energi og data der bliver brugt på din hjemmeside. </p>
        </KompOtte>
    </div>
  )
}

export default ServicesPage