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
    console.log(card)
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
                                <td>$ </td>
                            </tr>
                            <tr>
                                <td>Shipping & Handling</td>
                                <td> $ </td>
                            </tr>
                            <tr>
                                <td>Total tax</td>
                                <td>$ </td>
                            </tr>
                            <tr className="total_price">
                                <td>Order Total:</td>
                                <td>$</td>
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