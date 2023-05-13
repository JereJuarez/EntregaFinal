import { Link } from "react-router-dom";
import '../../styles/componentes/layout/Nav.css';
import { NavLink } from "react-router-dom";


const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "activo":
                        undefined }>Inicio</ NavLink></li>
                    <li><NavLink to="/psicoeducacion"className={({ isActive }) => isActive ? "activo":
                        undefined }>Psicoeducación</ NavLink></li>
                    <li><NavLink to="/profesionales"className={({ isActive }) => isActive ? "activo":
                        undefined }>Profesionales</ NavLink></li>
                    <li><NavLink to="/chat" className={({ isActive }) => isActive ? "activo":
                        undefined }>Contacto</ NavLink></li>
                    <li><NavLink to="/acerca" className={({ isActive }) => isActive ? "activo":
                        undefined }>Acerca</ NavLink></li>
              
                </ul>
            </div>
        </nav>

    )
}

export default Nav;