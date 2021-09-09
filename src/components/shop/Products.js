import React, { useContext, useState } from 'react';
import { productContest } from '../../App'
import ProductDetails from './ProductDetails'
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ViewStreamIcon from '@material-ui/icons/ViewStream';
import './style.css'
import { makeStyles } from '@material-ui/styles';

const styles = makeStyles((theme) => ({
    hiddenItem: {
        display: "flex",
    }
}))

const Products = () => {
    const classes = styles()
    const [products, setProducts] = useContext(productContest)
    const [alignment, setAlignment] = React.useState('left');
    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    return (
        <>
            <div className="d-flex justify-content-between">
                <div className={`related_container ${classes.hiddenItem}`}>
                    <h6 className="related_button mt-2 m-2 ">Relative</h6>
                    <ul className="related_category">
                        <li>under $50</li>
                        <li>Kitchen</li>
                        <li>plastic plugs</li>
                        <li>pucker shoes</li>
                    </ul>
                </div>
                <div className="d-flex justify-content-end">
                    <ToggleButtonGroup
                        value={alignment}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="text alignment"
                    >
                        <ToggleButton value="left" aria-label="left aligned">
                            <FormatListBulletedIcon />
                        </ToggleButton>
                        <ToggleButton value="center" aria-label="centered">
                            <ViewStreamIcon />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
            </div>
            {
                products.map(product => <ProductDetails key={product.id} data={product} />
                )
            }
        </>
    );
};

export default Products;