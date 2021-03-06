import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Body from './body/Body';
import Header from './header/Header';
import Login from './login/Login';
import Card from './shop/Card'
import PrivateRoute from './login/PrivateRoute'
import FooterBottom from './footer/FooterBottom';
import Checkout from './checkout/Checkout';

const MainComponents = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Body />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <PrivateRoute exact path="/card">
                    <Card />
                </PrivateRoute>
                <PrivateRoute exact path="/checkout" >
                    <Checkout />
                </PrivateRoute>
            </Switch>
            <FooterBottom />
        </>
    );
};

export default MainComponents;