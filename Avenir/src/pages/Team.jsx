import React from 'react';
import KompSeks from '../components/KompSeks';
import KompTre from '../components/KompTre';
import Team from '../assets/Images/team.jpg';
import KompFire from '../components/KompFire';
import al from '../assets/Images/al.webp';
import cn from '../assets/Images/cn8.webp';
import sb from '../assets/Images/sb.webp';
import sk from '../assets/Images/sk.jpg';
import aogc from '../assets/Images/aogc.jpg';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';


const TeamPage = () => {
  return (
    <div className='casePage'>
      <KompSeks
      
      omavenirImg={Team}>
      <h1>Mød<br />teamet</h1>
      </KompSeks>

      <div className='Teamdiv'>
        <div className='TeamdivLeft'>
          <h1>Vi tager hånd <br/>om <span className='Trosa'>fremtidens</span>
            <br/>web løsninger</h1>
        </div>
        <div className='TeamdivRigth'>
          <p>Hos AVENIR skaber vi web løsninger,  som matcher jeres ønsker og behov og sammen skræddersyer vi den perfekte løsning.  Vores bæredygtigheds principper inkorporeres i processen, så vi i fællesskab tager hånd om fremtidens web løsninger. </p>
          <Link className='btn' to="/baredygtig">LÆS MERE</Link>
        </div>
      </div>

      <div className='KompFire'>
            <KompFire
            tombImg={al}
            tombclassName="tombBaggrundEt">
            <div className='tombtxt'>
                <div className='teamKompfire'>
                   <p>ANNA HEJNDORF</p>
                   <p>CEO</p>
                </div>  
            </div>

            </KompFire>
            <KompFire
            tombImg={cn}
            tombclassName="tombBaggrundTo">
            <div className='tombtxt'>
                <div className='teamKompfire'>
                   <p>CECILIE BRODERSEN</p>
                   <p>CREATIVE DIRECTOR</p>
                </div> 
            </div>

            </KompFire>
            <KompFire
            tombImg={sb}
            tombclassName="tombBaggrundTre">
            <div className='tombtxt'>
                <div className='teamKompfire'>
                   <p>SARAH BODDUM</p>
                   <p>BRAND SPECIALIST</p>
                </div> 
            </div>

            </KompFire>
            <KompFire
            tombImg={sk}
            tombclassName="tombshapeEt tombBaggrundFire">
            <div className='tombtxt'>
                <div className='teamKompfire'>
                   <p>SOPHIE KILLEEN</p>
                   <p>COO</p>
                </div> 
            </div>

            </KompFire>
            </div>
            <KompTre
            treimgSrc={aogc}
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

export default TeamPage