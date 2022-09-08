import {Component} from "react";
import './cardContainer.css'

class CardContainer extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     coffeeItems: [
        //         {
        //             name: "Aromico",
        //             weight: 1,
        //             country: "Brazil",
        //             thumbnailL: "../img/aromico-coffee-beans-2x.png",
        //             thumbnailS: "../img/aromico-coffee-beans-1x.png",
        //
        //         },
        //         {
        //             name: "Solimo",
        //             weight: 2,
        //             country: "USA",
        //             thumbnailL: "../img/solimo-coffee-beans-2x.png",
        //             thumbnailS: "../img/solimo-coffee-beans-1x.png",
        //         },
        //         {
        //             name: "Presto",
        //             weight: 1,
        //             country: "Kenia",
        //             thumbnailL: "../img/presto-coffee-beans-2x.png",
        //             thumbnailS: "../img/presto-coffee-beans-1x.png",
        //         },
        //         {
        //             name: "Aromico",
        //             weight: 1,
        //             country: "Brazil",
        //             thumbnailL: "../img/aromico-coffee-beans-2x.png",
        //             thumbnailS: "../img/aromico-coffee-beans-1x.png",
        //
        //         },
        //         {
        //             name: "Solimo",
        //             weight: 2,
        //             country: "USA",
        //             thumbnailL: "../img/solimo-coffee-beans-2x.png",
        //             thumbnailS: "../img/solimo-coffee-beans-1x.png",
        //         },
        //         {
        //             name: "Presto",
        //             weight: 1,
        //             country: "Kenia",
        //             thumbnailL: "../img/presto-coffee-beans-2x.png",
        //             thumbnailS: "../img/presto-coffee-beans-1x.png",
        //         },
        //         {
        //             name: "Aromico",
        //             weight: 1,
        //             country: "Brazil",
        //             thumbnailL: "../img/aromico-coffee-beans-2x.png",
        //             thumbnailS: "../img/aromico-coffee-beans-1x.png",
        //
        //         },
        //         {
        //             name: "Solimo",
        //             weight: 2,
        //             country: "USA",
        //             thumbnailL: "../img/solimo-coffee-beans-2x.png",
        //             thumbnailS: "../img/solimo-coffee-beans-1x.png",
        //         },
        //         {
        //             name: "Presto",
        //             weight: 1,
        //             country: "Kenia",
        //             thumbnailL: "../img/presto-coffee-beans-2x.png",
        //             thumbnailS: "../img/presto-coffee-beans-1x.png",
        //         },
        //     ]
        // }
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
        // console.log(this.props.bestCoffee)
        const content = this.renderCards(this.props.bestCoffee)
        return (
            <div className="container__cards">
                {content}
            </div>
        )
    }
}

export default CardContainer;