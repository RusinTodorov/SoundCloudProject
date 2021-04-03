import { useState, useEffect } from 'react';

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

export default function Track({ img, title, audio, uploadedBy, trackId, userId }) {
    let [playBtnDisplay, setPlayBtnDisplay] = useState(style.hideBtnDiv)


    const dispatch = useDispatch();
    const isPlaying = useSelector(state => state.track.isPlaying)
    const id = useSelector(state => state.track.id)

    const classes = useStyles();

    const playCurrTrack = () => {

        if (id !== trackId) {

            dispatch(setTrackId(userId));
            dispatch(setTrackId(trackId));
            dispatch(addSrc(audio))
            dispatch(addImage(img));
            dispatch(addContent({ title, author: uploadedBy }));
            dispatch(setCurrTime(0));
        }

        dispatch(playTrack())
    }


    if (previousTrackId === trackId && playBtnDisplay === style.showBtnDiv) {
        setPlayBtnDisplay(style.hideBtnDiv)
        previousTrackId = -1;
    }

    useEffect(() => {
        if (id === trackId && isPlaying) {
            setPlayBtnDisplay(style.showBtnDiv)
        }
    })

    function like(e) {
        e.target.innerHTML = 'Liked';
        let btn = e.target;
        btn.style.backgroundColor = 'LightGray';
        btn.style.borderColor = 'LightGray';
        btn.setAttribute('disabled', 'true');

        // to do set in local storage that song has been liked,
        // and send a like to firebase
    }
    return (
        <div className={style.cardDiv}>
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
                <img className={style.img} src={img} alt="Song Cover" />
            </div>

            <Link className={style.title} to={`/Tracks/${trackId}`}>{title}</Link>
            <Link className={style.uploader} to={`/Users/${userId}`}>{uploadedBy}</Link>

            <button className={style.like} onClick={like}>Like!</button>
        </div >
    )
}