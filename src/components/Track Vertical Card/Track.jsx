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
    onSeek,
    setId,
} from '../../redux/Track/track.actions'

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';

import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';

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
    function like(e) {
        e.target.innerHTML = 'Liked';
        let btn = e.target;
        btn.style.backgroundColor = 'LightGray';
        btn.style.borderColor = 'LightGray';
        btn.setAttribute('disabled', 'true');

        // to do set in local storage that song has been liked,
        // and send a like to firebase
    }

    const dispatch = useDispatch();
    const isPlaying = useSelector(state => state.track.isPlaying)
    const id = useSelector(state => state.track.id)

    const classes = useStyles();

    const playCurrTrack = () => {

        if (id !== trackId) {

            dispatch(setId(trackId));
            dispatch(addSrc(audio))
            dispatch(addImage(img));
            dispatch(addContent({ title, author: uploadedBy }));
            dispatch(setCurrTime(0));
        }

        dispatch(playTrack())
    }

    let [playBtnDisplay, setPlayBtnDisplay] = useState(style.hideBtnDiv)


    // let playBtnDisplay = ;
    if (previousTrackId === trackId && playBtnDisplay === style.showBtnDiv) {
        setPlayBtnDisplay(style.hideBtnDiv)
    }


    return (
        <>

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



                {/* <audio controls className={style.audio}>
                    <source src={audio} type="audio/mpeg" />
                    Your browser does not support the audio tag.
                </audio> */}
                <button className={style.like} onClick={like}>Like!</button>
            </div >

        </>
    )
}