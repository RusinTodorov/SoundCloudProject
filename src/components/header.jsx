import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'black',
        width: '100%',
        color: 'white',
        height: '50px',
    },
    navBar: {
        width: '30%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    links: {
        textDecoration: 'none',
        color: 'white',
    },
    search: {
        display: 'flex',
        height: '50%',
        margin: '0 50px'
    },
    buttons: {
        width: '10%',
        display: 'flex',
        justifyContent: 'space-between'
    }
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.navBar}>
                <h3>Sound Cloud</h3>
                <Link className={classes.links} href="/">Home</Link>
                <Link className={classes.links} href="/AllTracks">All Tracks</Link>
                <Link className={classes.links} href="/Users">Users</Link>
            </div>
            <div className={classes.search}>
                <div>
                    <SearchIcon />
                </div>
                <input id="search"/>
            </div>
            <div className={classes.buttons}>
            <Link className={classes.links} href="/LogIn">Log In</Link>
            <Link className={classes.links} href="/Register">Register</Link>
            </div>
        </div >
    );
}