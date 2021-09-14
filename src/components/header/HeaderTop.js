import React, { useContext, useState } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './style.css'
import { InputBase, MenuItem, Toolbar, Badge, Avatar } from '@material-ui/core';
import { authContext, cardAddedDetails, UserContext } from '../../App';
//firebase
import { firebaseConfig } from '../login/Config'
import { getAuth, signOut } from "firebase/auth";


const styles = makeStyles((theme) => ({
    container: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    NavLink: {
        textDecoration: "none",
        color: "white",
        '&:hover': {
            color: "white",
        }
    },
    search: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: alpha(theme.palette.common.black, 0.10),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.black, 0.15),
        },
        borderRadius: "50px",
        width: "60ch",
        padding: "5px",
        [theme.breakpoints.down("md")]: {
            display: (props) => props.searchOpen ? "flex" : "none",
        },
    },
    searchIcon: {
        cursor: "pointer",
        color: "gray",
    },
    input: {
        color: "black",
        marginLeft: theme.spacing(2)
    },
    button: {
        marginRight: theme.spacing(4),
        color: "rgb(0, 17, 173)",
        border: "2px solid rgb(0, 17, 173)",
        padding: "5px 20px ",
        textDecoration: "none",
        display: "block",
    },
    consumer: {
        display: "block",
        color: "rgb(0, 17, 173)",
        [theme.breakpoints.down("sm")]: {
            display: "none",
        }
    },
    disNone: {
        display: "block",
        [theme.breakpoints.down("xs")]: {
            display: "none",
        }
    },
    homeDir: {
        color: "blue !important",
        fontSize: "25px",
        fontWeight: "bold",
    }
}))

const HeaderTop = () => {
    const classes = styles()
    const [loggedIn, setLoggedIn] = useContext(UserContext)
    const [user, setUser] = useContext(authContext)
    //card Details 
    const [card, setCard] = useContext(cardAddedDetails)
    //end Card Details
    const { photo } = user;
    const history = useHistory()
    //firebase signOut 
    const signOutHandler = e => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setLoggedIn(false)
        }).catch((error) => {
            // An error happened.
        });

    }
    //firebase end
    const pushHandler = () => {
        history.push('/card')
    }
    return (
        <>
            <div className="navbar navbar-expand-lg">
                <Toolbar className="container-fluid">
                    <div className="header_top_left" >
                        <Link to="/" className={classes.homeDir}>SHOPKA</Link>
                        <Link className={classes.disNone} to="/">Buy From Shopka</Link>
                        {
                            !loggedIn && <Link to="/login">Register</Link>
                        }
                    </div>
                    <div className={classes.container}>
                        <div className={classes.search}>
                            <SearchIcon className={classes.searchIcon} />
                            <InputBase
                                className={classes.input}
                                placeholder="Search....."
                            />
                        </div>
                        <MenuItem className={classes.consumer} > Consumer Electronics </MenuItem>
                    </div>
                    <div className={classes.container}>
                        {
                            loggedIn ? <NavLink to="/" className="button" onClick={signOutHandler}>Sign Out</NavLink> : <NavLink to="/login" className="button" > Sign in</NavLink>
                        }
                        <Badge badgeContent={card.length} color="secondary" onClick={pushHandler} >
                            <ShoppingCartIcon style={{ marginLeft: "20px", cursor: "pointer" }} />
                        </Badge>

                        {
                            loggedIn && <Avatar style={{ marginLeft: "20px", cursor: "pointer" }} alt={photo} src={photo} />
                        }
                    </div>
                </Toolbar>
            </div >
        </>
    )
}

export default HeaderTop;