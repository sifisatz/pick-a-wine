import React from 'react'
import { useStyles } from '../styles/styles';
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import Logo from './Logo';
import SearchBar from './SearchBar';
import Language from './Language';
import MenuItems from './MenuItems';
export default function AppBar() {
    const classes = useStyles();

    return (
        <div className={classes.appBarContainer}>
            <div className={classes.appBarSection} >
                <div>
                    <Logo />
                    <SearchBar className={classes.search} />
                </div>
                <div className={classes.actionButtons}>
                    <Language />
                    <IconButton className={classes.item} color="inherit" aria-label="upload picture" >
                        <PersonIcon />
                    </IconButton>
                </div>
            </div>
            <div className={classes.appBarSection}>
                <MenuItems/>
            </div>

        </div>
    )
}
