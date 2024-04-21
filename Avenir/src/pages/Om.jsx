import React from 'react';
import KompSeks from '../components/KompSeks';
import OmAogTeam from '../assets/Images/Romavenir.jpg';
import KompEt from '../components/KompEt';
import gronoje from '../assets/Images/soOje.jpg';
import aoje from '../assets/Images/AnOje.jpg';
import KompSyv from '../components/KompSyv';
import KompTo from '../components/KompTo';
import Footer from '../components/Footer';

const OmPage = () => {
  return (
    <div className='OmPage'>
      <KompSeks
        OmBilledeclassName="OmBillede objPos"
        omavenirImg={OmAogTeam}>
      <h1>Om<br />AVENIR</h1>
      </KompSeks>
      <KompEt
            className="row"
            aflangSrc={gronoje}>
            
            <h1>Vi tager hånd om <br/><span className="rosatxt">fremtidens<br/></span>webløsninger</h1>
            <p>AVENIR er et ungt bureau og vi har fremtiden foran os. Sammen skaber vi løsninger, der perfektionerer din digitale tilstedeværelse. Vi sætter os grundigt ind i din virksomheds udfordringer og potentiale, så vi sammen kan finde og udvikle den løsning, der skaber den bedste fremtid for din virksomhed.</p>
        </KompEt>
        <h1 className='friH1'>AVENIR BETYDER FREMTID.</h1>

        <KompSyv
            LRimg={aoje}
            LilleH='rosa'
            LVclassName='orange'>
            <h1>Vi ønsker at skabe en fremtid hvor <span id='Tlysgron'>bæredygtigt webdesign</span> er for de mange.</h1>
            <p>Med æstetikken og den gode brugeroplevelse i højsædet, er vores vision at vise vejen mod en mere bevidst digital tilstedeværelse, der kan inspirere og drive branchen mod en bedre fremtid.</p>
        </KompSyv>
        <KompTo
        textTilAbaggKompto="VORES MISSION ER AT HJÆLPE VORES KUNDER TIL AT FORENE LÆKKERT DESIGN MED OMTANKE FOR MILJØET">
           {<div>
                <p>Vi tager dig i hånden når du tager dine første skridt mod en hjemmeside for en bedre fremtid. En fremtid hvor vi laver æstetiske, brugervenlige og højt konverterende hjemmesider,  der også følger bæredygtigheds principperne. Hos os er intet umuligt og alting muligt, så vi står klar til at hjælpe dig, præcis hvor du er og hvor du gerne vil ende henne.</p>
                <div className='btn'>Book et møde</div>
            </div>
            }
        </KompTo>
        <Footer></Footer>
    </div>
  )
}

export default OmPage