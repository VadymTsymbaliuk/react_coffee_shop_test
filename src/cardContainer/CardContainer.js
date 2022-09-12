import {Component} from "react";
import './cardContainer.css'

class CardContainer extends Component {
    constructor(props) {
        super(props);
    }

    renderCards(arr) {
        const items = arr.map((item, i) => {
            return (
                <li
                    className="card"
                    key={i}
                >
                    <picture>
                        <source srcSet={item.thumbnailL} media="(min-width:768px)"/>
                        <img src={item.thumbnailS} alt={item.name}/>
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