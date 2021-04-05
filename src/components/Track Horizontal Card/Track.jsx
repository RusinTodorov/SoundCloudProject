import { useState } from 'react';
import style from './style.module.css';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux'

import {
    addSrc,
    playTrack,
    pauseTrack,
    setCurrTime,
    addContent,
    addImage,
    setTrackId,
    setUserId,
} from '../../redux/Track/track.actions'


import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';

import { makeStyles } from '@material-ui/core/styles';
import { useEffect } from 'react';

const useStyles = makeStyles({
    btn: {
        fontSize: '7.5rem',
        color: '#f50',

        '&:hover': {
            cursor: 'pointer',
        },
    }
});

let previousTrackId = -1;

export default function Track({ userId, trackId, img, audio, title, uploadedBy, likes }) {
    let [playBtnDisplay, setPlayBtnDisplay] = useState(style.hideBtnDiv)

    const dispatch = useDispatch();
    const isPlaying = useSelector(state => state.track.isPlaying)
    const id = useSelector(state => state.track.id)

    const classes = useStyles();

    const playCurrTrack = () => {

        if (id !== trackId) {

            dispatch(setUserId(userId));
            dispatch(setTrackId(trackId));
            dispatch(addSrc(audio))
            dispatch(addImage(img));
            dispatch(addContent({ title, author: uploadedBy }));
            dispatch(setCurrTime(0));
        }

        dispatch(playTrack())
    }

    if (previousTrackId === trackId && playBtnDisplay === style.showBtnDiv) {
        console.log('ins');
        setPlayBtnDisplay(style.hideBtnDiv)
        previousTrackId = -1;
    }

    useEffect(() => {
        if (id === trackId && isPlaying) {
            setPlayBtnDisplay(style.showBtnDiv)
        }
    })

    const like = (e) => {
        // to do Like
    };

    return (
        <div className={style.card}>
            <div
                onMouseEnter={() => {
                    setPlayBtnDisplay(style.showBtnDiv)
                }}
                onMouseLeave={() => {
                    if (!isPlaying || id !== trackId) {
                        setPlayBtnDisplay(style.hideBtnDiv)
                    }
                }}
            >
                <div className={`${style.playBtnDiv} ${playBtnDisplay}`}>
                    <span className={style.playBtnSpan}></span>
                    {id === trackId && isPlaying ?
                        <PauseCircleFilledIcon
                            className={classes.btn}
                            fontSize='large'
                            onClick={() => {
                                dispatch(pauseTrack())
                            }}
                        /> : <PlayCircleFilledIcon
                            className={classes.btn}
                            fontSize='large'
                            onClick={() => {

                                if (trackId !== id) {
                                    previousTrackId = id;
                                }

                                playCurrTrack()
                            }}
                        />}
                </div>
                <img src={img} alt="Cover" className={style.img} />
            </div>
            <div className={style.info}>
                <Link className={style.uploader} to={`/users/${userId}`}>{uploadedBy}</Link>
                <Link className={style.title} to={`/tracks/${trackId}`}>{title}</Link>

                {/* <audio controls className={style.audio}>
                    <source src={audio} type="audio/mpeg" />
                    Your browser does not support the audio tag.
                </audio> */}
                <div className={style.bottomDiv}>
                    <button className={style.like} onClick={() => { console.log(trackId) }}>Like!</button>
                    <p>Likes: {likes}</p>
                </div>
            </div>
        </div>
    );
}