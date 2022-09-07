import "./app.css"

import beansLogoWhite from '../img/beans-logo-white.svg';
import beansLogoBlack from '../img/beans-logo-black.svg';

import Footer from "../footer/Footer";
import Header from "../header/Header";

import CardContainer from "../cardContainer/CardContainer";


function App() {
    return (
        <div className="App">
          <Header />
            <main>
                <div className="container">
                    <section className="section-first">
                        <h2>About us</h2>
                        <picture>
                            <img src={beansLogoBlack} alt="beans logo black"/>
                        </picture>
                        <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.
                        </p>
                        <br/>
                        <p>Now residence dashwoods she excellent you. Shade being under his bed her, Much
                            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                            horrible but confined day end marriage. Eagerness furniture set preserved far
                            recommend. Did even but nor are most gave hope. Secure active living depend son
                            repair day ladies now.</p>
                    </section>
                    <section className="section-second">
                        <h2>Our best</h2>
                        <CardContainer />
                    </section>

                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
