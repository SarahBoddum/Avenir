import { useState} from "react"
import { NavLink } from "react-router-dom";
import logo from '../assets/Images/logoAVENIR.png'

export default function Navigation() {    
    const [burgerActive, setBurgerActive] = useState(false); 
    const toggleBurger = () => {
        if(burgerActive) {
            setBurgerActive(false);    
        } else {
            setBurgerActive(true);
        }
    }
    const [krydsActive, setKrydsActive] = useState(false);
    const toggleKryds = () => {
        if(krydsActive) {
            setKrydsActive(false);
        } else {
            setKrydsActive(true);
        }
    }

    return (
        <nav className="navigation" id="navbar">
            <div className={krydsActive ? 'close' : null} onClick={() => {
  toggleBurger();
  toggleKryds();
}} id="burger-menu">
                <span></span>
            </div>
            <NavLink className={"navlink mobil"} id="Mlogolink" to="/"><img id="Mlogo" src={logo}></img>AVENIR</NavLink>
            <div id="menu" className={burgerActive ? 'overlay' : null}>
                <div id="xul">
                    <NavLink className={"navlink laptop"} id="logolink" to="/"><img id="logo" src={logo}></img> AVENIR</NavLink>
                    <div className="dropdown"><NavLink className={"navlink"} to="/Om">OM_OS</NavLink>
                    <div className="dropdown-content">
                        <NavLink className={"navlink"} to="/Om">Om Os</NavLink>
                        <NavLink className={"navlink"}>Vores principper</NavLink>
                        <NavLink className={"navlink"} to="/Team">Mød teamet</NavLink>
                    </div>
                    </div>
                    <NavLink className="navlink" to="/Services">SERVICES</NavLink>
                    <NavLink className="navlink" to="/Cases">CASES</NavLink>
                    <NavLink className="navlink" to="/Blog">BLOG</NavLink>
                    <NavLink className="navlink" id="Kontakt" to="/Om">KONTAKT</NavLink>
                </div>
            </div>
        </nav>
        
    )
}