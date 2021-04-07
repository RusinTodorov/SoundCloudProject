import { useState, useEffect } from 'react';
import style from './style.module.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles';
import {
    addSrc,
    playTrack,
    pauseTrack,
    setCurrTime,
    addContent,
    addImage,
    setTrackId,
    setUserId,
    setPrevTrackId,
} from '../../redux/Track/track.actions';
import {
    addFavTrack,
    removeFavTrack,
} from '../../redux/CurrentUser/currentUser.actions';
import {
    updateUserLikes
} from '../../redux/AllUsers/allUsers.actions';
import store from '../../redux/store';
import {
    updateTrackLikes
} from '../../redux/AllTracks/allTracks.action';

const useStyles = makeStyles({
    btn: {
        fontSize: '7.5rem',
        color: '#f50',

        '&:hover': {
            cursor: 'pointer',
        },
    }
});

export default function Track({ img, title, audio, uploadedBy, trackId, userId }) {
    let currentUser = useSelector(state => state.currentUser);
    let likes = useSelector(state => state.currentUser.likes);

    let [playBtnDisplay, setPlayBtnDisplay] = useState(style.hideBtnDiv);

    const dispatch = useDispatch();
    const isPlaying = useSelector(state => state.track.isPlaying);
    const id = useSelector(state => state.track.id);
    const prevId = useSelector(state => state.track.prevId)

    const classes = useStyles();

    if (prevId === trackId && playBtnDisplay === style.showBtnDiv) {
        setPlayBtnDisplay(style.hideBtnDiv);
    }

    useEffect(() => {

        if (id === trackId && isPlaying) {
            setPlayBtnDisplay(style.showBtnDiv);
        }

    });

    let [isMouseInside, setIsMouseInside] = useState(false)

    useEffect(() => {
        if (!isPlaying && !isMouseInside) {
            setPlayBtnDisplay(style.hideBtnDiv);
        }
    }, [isPlaying])

    const playCurrTrack = () => {

        if (id !== trackId) {
            dispatch(setUserId(userId));
            dispatch(setTrackId(trackId));
            dispatch(addSrc(audio));
            dispatch(addImage(img));
            dispatch(addContent({ title, author: uploadedBy }));
            dispatch(setCurrTime(0));
        }

        dispatch(playTrack());
    }


    return (
        <div className={style.cardDiv}>
            <div
                onMouseEnter={() => {
                    setPlayBtnDisplay(style.showBtnDiv);
                    setIsMouseInside(true)
                }}
                onMouseLeave={() => {
                    setIsMouseInside(false);
                    if (!isPlaying || id !== trackId) {
                        setPlayBtnDisplay(style.hideBtnDiv);
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
                                dispatch(pauseTrack());
                            }}
                        /> : <PlayCircleFilledIcon
                            className={classes.btn}
                            fontSize='large'
                            onClick={() => {
                                if (trackId !== id) {
                                    dispatch(setPrevTrackId(id))
                                }

                                playCurrTrack();
                            }}
                        />}
                </div>
                <img className={style.img} src={img} alt="Song Cover" />
            </div>
            <Link className={style.title} to={`/tracks/${trackId}`}>{title}</Link>
            <Link className={style.uploader} to={`/users/${userId}`}>{uploadedBy}</Link>
            {
                (currentUser.isLoggedIn && likes)
                &&
                <div className={style.favBtns}>
                    {likes.includes(trackId) ? <FavoriteIcon fontSize='large' className={style.favFilledBtn}
                        onClick={() => {
                            dispatch(removeFavTrack(trackId));
                            dispatch(updateUserLikes({ id: currentUser.id, likes: store.getState().currentUser.likes }));

                            let currTrack = store.getState().allTracks.find(track => track.trackId === trackId);
                            dispatch(updateTrackLikes(trackId, currTrack.likes - 1));
                        }}
                    /> : <FavoriteBorderIcon fontSize='large' className={style.favBorderBtn}
                        onClick={() => {
                            dispatch(addFavTrack(trackId));
                            dispatch(updateUserLikes({ id: currentUser.id, likes: store.getState().currentUser.likes }));

                            let currTrack = store.getState().allTracks.find(track => track.trackId === trackId);
                            dispatch(updateTrackLikes(trackId, currTrack.likes + 1));
                        }}
                    />}
                </div>
            }
        </div >
    )
}