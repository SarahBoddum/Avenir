import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <nav className="navigation">
            <NavLink to="/">Forside</NavLink>
            <NavLink to="/Om">Om os</NavLink>
            <NavLink to="/contact">Kontakt</NavLink>
        </nav>
    )
}