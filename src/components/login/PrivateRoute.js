import React, { useContext, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { authContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [user, setUser] = useContext(authContext)
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;