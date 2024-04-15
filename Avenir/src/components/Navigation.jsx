import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <nav className="navigation">
            <NavLink className="navlink" id="logo" to="/">AVENIR</NavLink>
            <NavLink className="navlink" to="/Om">OM OS</NavLink>
            <NavLink id="1234" className="navlink" to="/contact">SERVICES</NavLink>
            <NavLink className="navlink"to="/Om">CASES</NavLink>
            <NavLink className="navlink"to="/Om">BLOG</NavLink>
            <NavLink className="navlink" id="kontakt" to="/Om">KONTAKT</NavLink>
        </nav>
    )
}