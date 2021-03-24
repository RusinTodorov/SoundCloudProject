import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: '410px',
        margin: '10px',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 110,
        height: 110,
    },
}));

export default function SmallTrackCard({track, img, audio, key}) {
    const classes = useStyles();

    return (
        <Card className={classes.root} key={key}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography>
                        {track}
                    </Typography>
                </CardContent>
                <audio controls>
                    <source src={audio} type="audio/mpeg" />
                    Your browser does not support the audio tag.
                </audio>
            </div>
            <CardMedia
                className={classes.cover}
                image={img}
                title={track}
            />
        </Card>
    );
}