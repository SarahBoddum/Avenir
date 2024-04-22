import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/Images/logoAVENIR.png';

export default function Navigation() {    
    const [burgerActive, setBurgerActive] = useState(false); 
    const toggleBurger = () => {
        setBurgerActive(!burgerActive);
    }

    const [krydsActive, setKrydsActive] = useState(false);
    const toggleKryds = () => {
        setKrydsActive(!krydsActive);
    }

    const [linkActive, setLinkActive] = useState(false);
    const toggleDropdown = () => {
        setLinkActive(!linkActive);
    }

    return (
        <nav className="navigation" id="navbar">
            <div className={krydsActive ? 'close' : null} onClick={() => {
                toggleBurger();
                toggleKryds();
            }} id="burger-menu">
                <span></span>
            </div>
            <NavLink className={"navlink mobil"} id="Mlogolink" to="/" onClick={toggleBurger}><img id="Mlogo" src={logo} alt="Logo" loading="lazy"></img>AVENIR</NavLink>
            <div id="menu" className={burgerActive ? 'overlay' : null}>
                <div id="xul">
                    <NavLink className={"navlink laptop"} id="logolink" to="/" onClick={toggleBurger}><img id="logo" src={logo} alt="Logo"></img> AVENIR</NavLink>
                    <div className="dropdown">
                        <div className={"navlink"} onClick={toggleDropdown}>OM_OS</div>
                        <div className={`dropdown-content ${linkActive ? 'active' : null}`}>
                            <NavLink className={"navlink"} to="/Om" onClick={toggleBurger}>Om Os</NavLink>
                            <NavLink className={"navlink"} to="/Baredygtig" onClick={toggleBurger}>Vores principper</NavLink>
                            <NavLink className={"navlink"} to="/Team" onClick={toggleBurger}>Mød teamet</NavLink>
                        </div>
                    </div>
                    <NavLink className="navlink" to="/Services" onClick={toggleBurger}>SERVICES</NavLink>
                    <NavLink className="navlink" to="/Cases" onClick={toggleBurger}>CASES</NavLink>
                    <NavLink className="navlink" to="/Blog" onClick={toggleBurger}>BLOG</NavLink>
                    <NavLink className="navlink" id="kontakt" to="/Kontakt" onClick={toggleBurger}>KONTAKT</NavLink>
                </div>
            </div>
        </nav>   
    );
}