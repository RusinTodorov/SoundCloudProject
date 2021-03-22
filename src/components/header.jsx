import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
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
                <h3>Soundcloud</h3>
                <Link className={classes.links}>Home</Link>
                <Link className={classes.links}>Stream</Link>
                <Link className={classes.links}>Library</Link>
            </div>
            <div className={classes.search}>
                <div>
                    <SearchIcon />
                </div>
                <input type='text' />
            </div>
            <div className={classes.buttons}>
                <button>Login</button>
                <button>Register</button>
            </div>

        </div >
    );
}