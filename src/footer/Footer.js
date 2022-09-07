import {Component} from "react";

import './footer.css'
import beansLogoBlack from "../img/beans-logo-black.svg";

class Footer extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <footer>
                <div className="container">
                    <ul className="footer__nav">
                        <li>
                            <a href="#">our coffee</a>
                        </li>
                        <li>
                            <a href="#">coffee house</a>
                        </li>
                        <li>
                            <a href="#">For your pleasure</a>
                        </li>
                    </ul>
                    <picture>
                        <img src={beansLogoBlack} alt="beans logo black"/>
                    </picture>
                </div>
            </footer>
        )
    }
}
export default Footer