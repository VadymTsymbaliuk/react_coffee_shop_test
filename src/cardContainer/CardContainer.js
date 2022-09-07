import {Component} from "react";
import './cardContainer.css'
import solimoS from "../img/solimo-coffee-beans-1x.png";
import solimoL from "../img/solimo-coffee-beans-2x.png";
import prestoS from "../img/presto-coffee-beans-1x.png";
import prestoL from "../img/presto-coffee-beans-2x.png";
import aromicoS from "../img/aromico-coffee-beans-1x.png";
import aromicoL from "../img/aromico-coffee-beans-2x.png";

class CardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coffeeItems: [
                {
                    name: "Aromico",
                    weight: 1,
                    country: "Brazil",
                    thumbnailL: "../img/aromico-coffee-beans-2x.png",
                    thumbnailS: "../img/aromico-coffee-beans-1x.png",

                },
                {
                    name: "Solimo",
                    weight: 2,
                    country: "USA",
                    thumbnailL: "../img/solimo-coffee-beans-2x.png",
                    thumbnailS: "../img/solimo-coffee-beans-1x.png",
                },
                {
                    name: "Presto",
                    weight: 1,
                    country: "Kenia",
                    thumbnailL: "../img/presto-coffee-beans-2x.png",
                    thumbnailS: "../img/presto-coffee-beans-1x.png",
                },
                {
                    name: "Aromico",
                    weight: 1,
                    country: "Brazil",
                    thumbnailL: "../img/aromico-coffee-beans-2x.png",
                    thumbnailS: "../img/aromico-coffee-beans-1x.png",

                },
                {
                    name: "Solimo",
                    weight: 2,
                    country: "USA",
                    thumbnailL: "../img/solimo-coffee-beans-2x.png",
                    thumbnailS: "../img/solimo-coffee-beans-1x.png",
                },
                {
                    name: "Presto",
                    weight: 1,
                    country: "Kenia",
                    thumbnailL: "../img/presto-coffee-beans-2x.png",
                    thumbnailS: "../img/presto-coffee-beans-1x.png",
                },
                {
                    name: "Aromico",
                    weight: 1,
                    country: "Brazil",
                    thumbnailL: "../img/aromico-coffee-beans-2x.png",
                    thumbnailS: "../img/aromico-coffee-beans-1x.png",

                },
                {
                    name: "Solimo",
                    weight: 2,
                    country: "USA",
                    thumbnailL: "../img/solimo-coffee-beans-2x.png",
                    thumbnailS: "../img/solimo-coffee-beans-1x.png",
                },
                {
                    name: "Presto",
                    weight: 1,
                    country: "Kenia",
                    thumbnailL: "../img/presto-coffee-beans-2x.png",
                    thumbnailS: "../img/presto-coffee-beans-1x.png",
                },
            ]
        }
    }

    renderCards(arr) {
        const items = arr.map((item, i) => {
            return (
                <li
                    className="card"
                    key={i}
                >
                    <picture>
                        <source srcSet={item.thumbnailS} media="(max-width:768px)"/>
                        <img src={item.thumbnailL} alt={item.name}/>
                    </picture>
                    <span className="card__name">{item.name} {item.weight} kg</span>
                    <span className="card__price">{item.price}$</span>
                </li>
            )
        })
        return (
            <ul className="cards__wrapper">
                {items}
            </ul>
        )
    }

    render() {
        // const content = this.renderCards(this.state.coffeeItems)
        return (
            <div className="container__cards">
                {this.renderCards(this.state.coffeeItems)}
            </div>
        )
    }
}

export default CardContainer;