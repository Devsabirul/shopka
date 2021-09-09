import React, { useContext } from 'react';
import { TreeItem, TreeView } from '@material-ui/lab';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/styles';
import FilterListIcon from '@material-ui/icons/FilterList';
import { Checkbox, FormControlLabel, Typography } from '@material-ui/core';
import { productContest } from '../../App';
import Product from '../data/Product'

const styles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 400,
    },
    btnFilter: {
        paddingLeft: "50px",
    }
}))
const SideBar = () => {
    const classes = styles()
    const [products, setProducts] = useContext(productContest)

    const filterItem = (currentProduct) => {
        const updateItems = Product.filter(currentElement => {
            return currentElement.category === currentProduct;
        })
        setProducts(updateItems)
    }

    return (
        <div className="left_container">
            <div className="btn btn-outline-primary d-flex mb-4">
                <FilterListIcon fontSize="large" />
                <Typography variant="h6" className={classes.btnFilter} >Departments</Typography>
            </div>
            <TreeView
                className={classes.root}
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
            >
                <TreeItem nodeId="1" label="All Categories">
                    <TreeItem nodeId="2" label="Cell Phones & Smartphones">
                        <TreeItem nodeId="3" label="Cell Phones Accessories" />
                        <TreeItem nodeId="4" label="Cell Phones Gadgets" />
                        <TreeItem nodeId="5" label="Applications" />
                        <TreeItem nodeId="6" label="Smart Watches" />
                    </TreeItem>
                    <TreeItem nodeId="10" label="Business & Industrial">
                        <TreeItem nodeId="11" onClick={() => filterItem('accessories')} label="Accessories" />
                        <TreeItem nodeId="12" label="Gadgets" />
                    </TreeItem>
                    <TreeItem nodeId="13" label="Computers">
                        <TreeItem nodeId="14" onClick={() => filterItem('dell')} label="Dell " />
                        <TreeItem nodeId="15" label="Asus" />
                    </TreeItem>
                    <TreeItem nodeId="16" label="Consumer Electronics">
                        <TreeItem nodeId="17" label="Applications" />
                        <TreeItem nodeId="18" label="Smart Watches" />
                    </TreeItem>
                    <TreeItem nodeId="19" label="Home & Garden">
                        <TreeItem nodeId="20" label="Cell Phones Accessories" />
                        <TreeItem nodeId="21" label="Cell Phones Gadgets" />
                        <TreeItem nodeId="22" label="Applications" />
                    </TreeItem>
                    <TreeItem nodeId="23" label="Collectibles">
                        <TreeItem nodeId="24" label="Cell Phones Accessories" />
                        <TreeItem nodeId="25" label="Cell Phones Gadgets" />
                    </TreeItem>
                </TreeItem>
            </TreeView >
            <div className="collapsed_filters">
                <div className="heading">
                    <Typography variant="h6">Expanded Filters</Typography>
                </div>
                <FormControlLabel control={<Checkbox name="antoine" />} label="Recommended"
                />
                <FormControlLabel control={<Checkbox name="antoine" />} label="Recently Added"
                />
                <FormControlLabel control={<Checkbox name="antoine" />} label="Expiring Soon"
                />
                <FormControlLabel control={<Checkbox name="antoine" />} label="Most Rated"
                />
                <FormControlLabel control={<Checkbox name="antoine" />} label="Price: Low → High"
                />
                <FormControlLabel control={<Checkbox name="antoine" />} label="Price: High → Low"
                />
            </div>
            <div className="collapsed_filters">
                <div className="heading">
                    <Typography variant="h6">Year of manufacturing</Typography>
                </div>
                <FormControlLabel style={{ display: "block" }} control={<Checkbox name="antoine" />} label="1954"
                />
                <FormControlLabel style={{ display: "block" }} control={<Checkbox name="antoine" />} label="1955"
                />
                <FormControlLabel style={{ display: "block" }} control={<Checkbox name="antoine" />} label="1956"
                />
                <FormControlLabel style={{ display: "block" }} control={<Checkbox name="antoine" />} label="1957"
                />
                <FormControlLabel style={{ display: "block" }} control={<Checkbox name="antoine" />} label="1958"
                />
                <FormControlLabel style={{ display: "block" }} control={<Checkbox name="antoine" />} label="1959"
                />
                <FormControlLabel style={{ display: "block" }} control={<Checkbox name="antoine" />} label="1960"
                />
                <FormControlLabel style={{ display: "block" }} control={<Checkbox name="antoine" />} label="1961"
                />
                <FormControlLabel style={{ display: "block" }} control={<Checkbox name="antoine" />} label="1962-2021"
                />
            </div>
        </div >
    );
};

export default SideBar;