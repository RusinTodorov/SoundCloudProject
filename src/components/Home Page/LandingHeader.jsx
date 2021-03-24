import { Typography, CardMedia, Button } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import landing_header1 from './landing_header1.jpg'


const useStyles = makeStyles(() => ({
    media: {
        width: 1250,
        borderTop: '4px solid #f50',
        height: 442,
    },
    landingTypoDiv: {
        maxWidth: 430,
        position: 'relative',
        margin: 'auto',
        top: 120,
        color: 'white',
    },
    landingBtn: {
        backgroundColor: '#f50',
        color: 'white',
        '&:hover': {
            backgroundColor: '#f50',
        }
    },
    landingBtnDiv: {
        margin: 'auto',
        width: '60%',
        display: 'flex',
        justifyContent: 'space-around',
    }

}));



const LandingHeader = () => {
    const classes = useStyles();

    return (
        <div>
            <CardMedia className={classes.media} image={landing_header1}>
                <div className={classes.landingTypoDiv}>
                    <Typography variant='h4' align='center' gutterBottom>Welcome to our site</Typography>
                    <Typography variant='subtitle1' align='center' paragraph>Here you can listen music for free and upload your tracks. If you want to upload track you have to Login or Regiser.</Typography>
                    <div className={classes.landingBtnDiv}>
                        <Button href='/LogIn' className={classes.landingBtn} variant="contained">Login</Button>
                        <Button href='/Register' className={classes.landingBtn} variant="contained">Register</Button>
                    </div>
                </div>
            </CardMedia>
        </div>
    );
}

export default LandingHeader;