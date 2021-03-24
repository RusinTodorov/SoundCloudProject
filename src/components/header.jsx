import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import SearchIcon from '@material-ui/icons/Search';
import transperantLogo from '../data/logos/transperantLogo.png'

const useStyles = makeStyles(() => ({
    root: {
        width: 1250,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'black',
        color: 'white',
        height: '50px',
    },
    title: {
        marginLeft: -22,
    },
    logo: {
        marginLeft: 10,
    },
    navBar: {
        width: '30%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: -26,
    },
    links: {
        textDecoration: 'none',
        color: 'white',
    },
    search: {
        display: 'flex',
        height: '50%',
        margin: '0 50px',
        width: '36%',
    },
    input: {
        width: '100%',
    },
    buttons: {
        width: '14%',
        display: 'flex',
        justifyContent: 'space-between'
    }
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.navBar}>
                <img className={classes.logo} src={transperantLogo} alt='logo'></img>
                <h3 className={classes.title}>SoundCloud</h3>
                <Link className={classes.links} href="/">Home</Link>
                <Link className={classes.links} href="/AllTracks">All Tracks</Link>
                <Link className={classes.links} href="/Users">Users</Link>
            </div>
            <div className={classes.search}>
                <div>
                    <SearchIcon />
                </div>
                <input placeholder='Search for artists, bands, track, podcasts' className={classes.input} id="search" />
            </div>
            <div className={classes.buttons}>
                <Link className={classes.links} href="/Upload">Upload</Link>
                <Link className={classes.links} href="/LogIn">Log In</Link>
                <Link className={classes.links} href="/Register">Register</Link>
            </div>
        </div >
    );
}