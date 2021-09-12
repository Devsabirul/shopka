import { Button, } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './style.css'
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        marginTop: "20px",
    },
    media: {
        height: 200,
    },
    price: {
        color: "red",
        fontWeight: "bold",
        marginTop: "5px",
        fontSize: "20px",
    },
});
const ProductDetails = ({ data, addToCardHandle }) => {
    const classes = useStyles();
    const { discription, title, price, rating, img } = data;
    return (
        <>
            <div className="col-lg-3 col-md-4 col-sm-12 ">
                <div class="card card_container">
                    <img className={classes.media} src={img} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 style={{ cursor: "pointer" }} class="card-title">{title.slice(0, 15)}...</h5>
                        <p class="card-text">{discription.slice(0, 40)}...</p>
                        <p style={{ fontWeight: "600", lineHeight: "5px", }} >Rating: {rating}★</p>
                        <p className={classes.price} >Price: $ {price}</p>
                        <Button onClick={() => addToCardHandle(data)} size="small" variant="outlined" startIcon={<ShoppingBasketIcon />} color="primary">
                            Add to Card
                        </Button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ProductDetails;