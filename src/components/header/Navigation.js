import React, { useContext, useState } from 'react';
import { BottomNavigation, makeStyles } from '@material-ui/core';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { GiHanger, GiPalmTree, GiLightningElectron } from "react-icons/gi";
import TheatersIcon from '@material-ui/icons/Theaters';
import SportsHandballIcon from '@material-ui/icons/SportsHandball';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import './style.css'
import { productContest } from '../../App';
import Product from '../data/Product'

const styles = makeStyles((theme) => ({
    hideItem: {
        display: "block",
        [theme.breakpoints.down("sm")]: {
            display: "none",
        }
    },
}))

export default function Navigation() {
    const [value, setValue] = React.useState(0);
    const classes = styles()
    const [products, setProducts] = useContext(productContest)
    const filterItem = (currentProduct) => {
        const updateItems = Product.filter(currentElement => {
            return currentElement.category === currentProduct;
        })
        setProducts(updateItems)
    }
    return (
        <>
            <div className="container">
                <BottomNavigation value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    showLabels
                >
                    <BottomNavigationAction onClick={() => setProducts(Product)} label="All Products" icon={<LocalMallIcon />} />
                    <BottomNavigationAction onClick={() => filterItem('clothing')} label="Clothing & Shoes" icon={<GiHanger fontSize="large" />} />
                    <BottomNavigationAction onClick={() => filterItem('accessories')} label="Accessories" icon={<TheatersIcon />} />
                    <BottomNavigationAction label="Sport & Lifestyle" icon={<SportsHandballIcon />} />
                    {/* <BottomNavigationAction label="Pets" icon={<AllInclusiveIcon />} /> */}
                    <BottomNavigationAction className={classes.hideItem} label="Kitchen Accessories" icon={<RestaurantMenuIcon />} />
                    <BottomNavigationAction className={classes.hideItem} label="Travel Equipment" icon={<FlightTakeoffIcon />} />
                    <BottomNavigationAction className={classes.hideItem} label="Growing & Garden" icon={<GiPalmTree />} />
                    <BottomNavigationAction className={classes.hideItem} label="Electrical Tools" icon={<GiLightningElectron />} />
                    {/* <BottomNavigationAction label="Mother Care" icon={<LocationOnIcon />} /> */}
                </BottomNavigation>
            </div>

        </>
    );
}
