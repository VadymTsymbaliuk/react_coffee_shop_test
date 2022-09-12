import {Component} from "react";
import {Link} from "react-router-dom";
import './header.css'
import beansLogoWhite from "../img/beans-logo-white.svg";

class Header extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <header>
                <div className="header__container">
                    <nav className="header__nav">
                        <ul>
                            <li>
                                <Link to="/">Coffee house</Link>
                            </li>
                            <li>
                                <Link to="/our-coffee">Our coffee</Link>
                            </li>
                            <li>
                                <Link to="/for-your-pleasure">For your pleasure</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="container__title">
                        <h1>Everything You Love About Coffee</h1>

                        <img src={beansLogoWhite} alt="beans logo"/>
                        <p>We makes every day full of energy and taste <br/>
                            Want to try our beans?
                        </p>
                        <button type="button">more</button>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header