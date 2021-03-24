import { CssBaseline, Card, Grid, Container, CardMedia, CardContent, Typography, IconButton, Button } from "@material-ui/core"
import { makeStyles, useTheme } from '@material-ui/core/styles';
import LandingHeader from './LandingHeader'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        marginTop: 20,
    },
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    buttons: {
        marginLeft: 10,
    },
}));

const Home = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <main >
            <CssBaseline />
            <div >
                <LandingHeader />
            </div>
            <Container className={classes.cardGrid}>
                <Grid container spacing={4}>
                    <Grid item>
                        <Card className={classes.root}>
                            <CardMedia
                                className={classes.cover}
                                image="https://source.unsplash.com/random"
                                title="Live from space album cover"
                            />
                            <div className={classes.details}>
                                <CardContent className={classes.content}>
                                    <Typography component="h5" variant="h5">
                                        Live From Space
                                      </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        Mac Miller
                                      </Typography>
                                </CardContent>
                                <div className={classes.controls}>
                                    <IconButton aria-label="previous">
                                        {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                                    </IconButton>
                                    <IconButton aria-label="play/pause">
                                        <PlayArrowIcon className={classes.playIcon} />
                                    </IconButton>
                                    <IconButton aria-label="next">
                                        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                                    </IconButton>
                                </div>
                                <div className={classes.buttons}>
                                    <Button color='primary'>Add comment</Button>
                                    <Button color='primary'>View comments</Button>
                                </div>
                            </div>

                        </Card>
                    </Grid>
                </Grid>
            </Container>

        </main >

    );
}


export default Home;