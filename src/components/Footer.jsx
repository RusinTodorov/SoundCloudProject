import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
    return (
        <Typography variant="body2" color="white">
            {'Copyright © '}
            <Link color="white" href="/">
                Slound Cloud by Hristo Dzhambazki and Rusin Todorov.
            </Link>
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    footer: {
        position: 'fixed',
        bottom: '0',
        padding: theme.spacing(2, 55),
        marginTop: 'auto',
        backgroundColor: 'black',
        color: 'white',
    },
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Container>
                <Copyright />
            </Container>
        </footer>
    );
}