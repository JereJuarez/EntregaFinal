import Nav from "./Nav";
import '../../styles/componentes/layout/Header.css';

const Header = (props) => {
    return (
        <header>
            <div class="holder">
                <img src="img/logo2.png" width="100" alt="MenteSana"/>
                    <h1>MenteSana</h1>
            </div>

        </header>
    );

}

export default Header;