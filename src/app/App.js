import "./app.css"

import beansLogoWhite from '../img/beans-logo-white.svg';
import beansLogoBlack from '../img/beans-logo-black.svg';
import solimo from "../img/solimo-coffee-beans.png";
import presto from "../img/presto-coffee-beans.png";
import aromico from "../img/aromico-coffee-beans.png"


function App() {
    return (
        <div className="App">
            <header>
                <div className="header__container">
                    <nav className="header__nav">
                        <ul>
                            <li>
                                <a href="#">coffee house</a>
                            </li>
                            <li>
                                <a href="#">our coffee</a>
                            </li>
                            <li>
                                <a href="#">For your pleasure</a>
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
            <main>
                <div className="container">
                    <div className="container__section-first">
                        <h2>About us</h2>
                        <picture>
                            <img src={beansLogoBlack} alt="beans logo black"/>
                        </picture>
                        <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect an</p>
                        <p>Now residence dashwoods she excellent you. Shade being under his bed her, Much
                            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                            horrible but confined day end marriage. Eagerness furniture set preserved far
                            recommend. Did even but nor are most gave hope. Secure active living depend son
                            repair day ladies now.</p>
                    </div>
                    <div className="container__section-second">
                        <h2>Our best</h2>
                        <div className="container__cards">
                            <ul className="cards__wrapper">
                                <li className="card">
                                    <picture>
                                        <source/>
                                        <img src={solimo} alt=""/>
                                    </picture>
                                    <span>Solimo Coffee Beans 2 kg</span>
                                    <span>10.73$</span>
                                </li>
                                <li className="card">
                                    <picture>
                                        <source/>
                                        <img src={presto} alt=""/>
                                    </picture>
                                    <span>Presto Coffee Beans 1 kg</span>
                                    <span>15.99$</span>
                                </li>
                                <li className="card">
                                    <picture>
                                        <source/>
                                        <img src={aromico} alt=""/>
                                    </picture>

                                    <span>AROMISTICO Coffee 1 kg</span>
                                    <span>6.99$</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </main>
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
        </div>
    );
}

export default App;
