import { makeStyles, MenuItem, Select } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import React from 'react';
import Shop from '../shop/Shop';
import './style.css'

const useStyles = makeStyles((theme) => ({

}));
const RightBar = () => {
    const classes = useStyles();
    return (
        <div className="right_container">
            <div className="container">
                <Shop />
            </div>
        </div>
    );
};

export default RightBar;