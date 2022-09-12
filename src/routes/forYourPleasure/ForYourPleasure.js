import {Component} from "react";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import girlAndCoffee2x from "../../img/our-coffee-img/girl-and-coffee-2x.png";
import girlAndCoffee1x from "../../img/our-coffee-img/girl-and-coffee-1x.png";
import beansLogoBlack from "../../img/beans-logo-black.svg";
import CardContainer from "../../cardContainer/CardContainer";
import aromico2x from "../../img/aromico-coffee-beans-2x.png";
import aromico1x from "../../img/aromico-coffee-beans-1x.png";
import presto2x from "../../img/presto-coffee-beans-2x.png";
import presto1x from "../../img/presto-coffee-beans-1x.png";
import solimo2x from "../../img/solimo-coffee-beans-2x.png";
import solimo1x from "../../img/solimo-coffee-beans-1x.png";

class ForYourPleasure extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coffeeItems: [
                {
                    name: "AROMISTICO Coffee",
                    weight: 1,
                    country: "Brazil",
                    thumbnailL: aromico2x,
                    thumbnailS: aromico1x,
                    price: 6.99

                },
                {
                    name: "Presto Coffee Beans",
                    weight: 1,
                    country: "Kenia",
                    thumbnailL: presto2x,
                    thumbnailS: presto1x,
                    price: 15.99
                },
                {
                    name: "Solimo Coffee Beans",
                    weight: 2,
                    country: "USA",
                    thumbnailL: solimo2x,
                    thumbnailS: solimo1x,
                    price: 10.73
                },
                {
                    name: "AROMISTICO Coffee",
                    weight: 1,
                    country: "Brazil",
                    thumbnailL: aromico2x,
                    thumbnailS: aromico1x,
                    price: 6.99

                },
                {
                    name: "Presto Coffee Beans",
                    weight: 1,
                    country: "Kenia",
                    thumbnailL: presto2x,
                    thumbnailS: presto1x,
                    price: 15.99
                },
                {
                    name: "Solimo Coffee Beans",
                    weight: 2,
                    country: "USA",
                    thumbnailL: solimo2x,
                    thumbnailS: solimo1x,
                    price: 10.73
                }
            ]
        }

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
                            <CardContainer bestCoffee={this.state.coffeeItems}/>
                        </section>
                    </div>
                </main>
                <Footer/>
            </div>
        )
    }
}

export default ForYourPleasure