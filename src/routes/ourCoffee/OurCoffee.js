import {Component} from "react";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";

import beansLogoBlack from '../../img/beans-logo-black.svg';
import girlAndCoffee2x from "../../img/our-coffee-img/girl-and-coffee-2x.png"
import girlAndCoffee1x from "../../img/our-coffee-img/girl-and-coffee-1x.png"

class OurCoffee extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <main>
                    <div className="container">
                        <section className="section-first">
                            <div>
                                <picture>
                                    <source srcSet={girlAndCoffee2x} media="(min-width:768px)"/>
                                    <img src={girlAndCoffee1x} alt="girl and coffee"/>
                                </picture>
                            </div>
                            <div>
                                <h2>
                                    About our beans
                                </h2>
                                <img src={beansLogoBlack} alt="black logo"/>
                                <p>
                                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                </p>
                                <p>
                                    Afraid at highly months do things on at. Situation recommend objection do intention
                                    so questions.
                                    As greatly removed calling pleased improve an. Last ask him cold feel
                                    met spot shy want. Children me laughing we prospect answered followed. At it went
                                    is song that held help face.
                                </p>
                            </div>


                        </section>
                        <section className="section-second">
                            <div className="search-container">
                                <div className="search-container__item">
                                    <label htmlFor="looking-item">Looking for</label>
                                    <input type="text" placeholder="start typing here" id="looking-item"/>
                                </div>
                                <div className="search-container__item">
                                    <span>Or filter</span>
                                    <ul>
                                        <li>Brazil</li>
                                        <li>Kenia</li>
                                        <li>Columbia</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
                <Footer/>
            </div>
        )
    }
}

export default OurCoffee;