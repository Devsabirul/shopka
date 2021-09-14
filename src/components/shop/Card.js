import { Grid } from '@material-ui/core';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cardAddedDetails } from '../../App';
import CardDetails from './CardDetails';
import './card.css'

const Card = () => {
    const [card, setCard] = useContext(cardAddedDetails)

    const removeFromCard = id => {
        const newCard = card.filter(product => product.id !== id)
        setCard(newCard)
    }
    const total = card.reduce((total, product) => total + product.price, 0);
    let shipping = 0;
    if (total > 350) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.5
    }
    else if (total > 0) {
        shipping = 0;
    }

    //Add Tax 
    const tax = total / 10;

    const formateNumber = num => {
        const precision = num.toFixed(2)
        return Number(precision);
    }
    return (
        <div className="container">
            <Grid container>
                <Grid item sm={12} md={8} lg={8}>
                    {
                        card.map(card => <CardDetails
                            id={card.id}
                            card={card}
                            removeFromCard={removeFromCard}
                        />)
                    }
                </Grid>
                <Grid item sm={12} md={4} lg={4}>
                    <div className="shop_card">
                        <h3 className="text-center">Order Summary</h3>
                        <p>Items ordered: {card.length} </p>
                        <table className="customers">
                            <tr>
                                <td>Items</td>
                                <td>$ {formateNumber(total)}</td>
                            </tr>
                            <tr>
                                <td>Shipping & Handling</td>
                                <td> $ {formateNumber(shipping)}</td>
                            </tr>
                            <tr>
                                <td>Total tax</td>
                                <td>$ {formateNumber(tax)}</td>
                            </tr>
                            <tr className="total_price">
                                <td>Order Total:</td>
                                <td>${formateNumber(total + shipping + tax)}</td>
                            </tr>
                        </table>
                        <Link to="/checkout" className="proceed_to_checkout"> Proceed to Checkout</Link>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Card;