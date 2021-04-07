import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import ReactAudioPlayer from 'react-audio-player';

import styles from './trackBar.module.scss'

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

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
    setDuration,
    setPrevTrackId,
} from '../../redux/Track/track.actions'
import {
    addFavTrack,
    removeFavTrack,
} from '../../redux/CurrentUser/currentUser.actions';

import {
    updateUserLikes
} from '../../redux/AllUsers/allUsers.actions';
import {
    updateTrackLikes
} from '../../redux/AllTracks/allTracks.action';

import store from '../../redux/store';

const TrackBar = () => {
    const dispatch = useDispatch();
    let history = useHistory()

    let currentUser = useSelector(state => state.currentUser);

    let [track, setTrack] = useState(null);
    let [sliderMaxValue, setSliderMaxValue] = useState(100);
    let [sliderValue, setSliderValue] = useState(0);
    let [volume, setVolume] = useState(100)
    let [isMuted, setIsMuted] = useState(false)
    let [progressPercent, setProgressPercent] = useState(0)
    let [volumePercent, setVolumePercent] = useState(100);
    let [volumeRange, setVolumeRange] = useState(null);
    let [previousVolume, setPreviousVolume] = useState(100);

    const isPlaying = useSelector(state => state.track.isPlaying)
    const id = useSelector(state => state.track.id)
    const userId = useSelector(state => state.track.userId)
    const songSrc = useSelector(state => state.track.src)
    const seekTime = useSelector(state => state.track.seekTime)
    const strTime = useSelector(state => state.track.strTime);
    const duration = useSelector(state => state.track.duration);

    const image = useSelector(state => state.track.image);
    const title = useSelector(state => state.track.content.title);
    const author = useSelector(state => state.track.content.author);

    if (track) {

        if (isPlaying) {
            track.audioEl.current.play();
        } else {
            track.audioEl.current.pause();
        }
    }

    useEffect(() => {
        if (track) {
            track.audioEl.current.currentTime = seekTime;
            setSliderValue(seekTime)
            changeProgressPercent(seekTime)
            dispatch(setCurrTime(seekTime));
        }
    }, [seekTime, track])


    const muteSong = () => {
        if (isMuted) {
            track.audioEl.current.muted = false

            setVolume(previousVolume)
            changeVolumePercent(previousVolume);
        } else {
            track.audioEl.current.muted = true
            setPreviousVolume(volume)
            setVolumePercent(0);
            setVolume(0);
        }

        setIsMuted(!isMuted);
    }

    const changeProgress = (value) => {
        track.audioEl.current.currentTime = value;

        dispatch(setCurrTime(value));

        setSliderValue(value);
    }

    const changeProgressPercent = (value) => {
        const percent =
            ((value) / (sliderMaxValue)) *
            100;
        setProgressPercent(percent);
    }

    const changeVolumePercent = (value) => {
        const percent =
            (value / 100) *
            100;
        setVolumePercent(percent);
    }

    const openTrackPage = () => {
        history.push(`/tracks/${id}`)
    }

    const openUserPage = () => {
        history.push(`/users/${userId}`)
    }

    const playNewTrack = (track) => {

        dispatch(setPrevTrackId(id))
        dispatch(addSrc(track.audio));
        dispatch(setUserId(track.userId));
        dispatch(setTrackId(track.trackId));
        dispatch(addImage(track.img));
        dispatch(addContent({ ...track, author: track.uploadedBy }));
        dispatch(setCurrTime(0));

        if (isPlaying) {
            dispatch(playTrack());
        } else {
            dispatch(pauseTrack());
        }
    }

    return (
        <div className={styles.trackBar} >

            <ReactAudioPlayer
                style={{ display: 'none' }}
                className={styles.audioPlayer}
                ref={(element) => setTrack(element)}
                src={songSrc}
                preload='metadata'
                controls
                onLoadedMetadata={() => {
                    dispatch(setDuration(track.audioEl.current.duration))
                    setSliderMaxValue(Math.floor(track.audioEl.current.duration))

                    if (track.audioEl.current.currentTime === 0) {
                        setSliderValue(0)
                        changeProgressPercent(0);
                    }
                }}
                listenInterval={900}
                onListen={() => {
                    let audioCurrTime = track.audioEl.current.currentTime;
                    setSliderValue(track.audioEl.current.currentTime)

                    dispatch(setCurrTime(audioCurrTime));

                    changeProgressPercent(track.audioEl.current.currentTime);

                }}
                volume={volume / 100}
            />
            <div className={styles.favBtns}>
                {currentUser.isLoggedIn ?
                    <>
                        {currentUser.likes.includes(id) ?
                            <FavoriteIcon className={styles.favFilledBtn}
                                onClick={() => {
                                    dispatch(removeFavTrack(id));
                                    dispatch(updateUserLikes({ id: currentUser.id, likes: store.getState().currentUser.likes }));

                                    let currTrack = store.getState().allTracks.find(track => track.trackId === id);
                                    dispatch(updateTrackLikes(id, currTrack.likes - 1));
                                }}
                            /> :
                            <FavoriteBorderIcon className={styles.favBorderBtn}
                                onClick={() => {
                                    dispatch(addFavTrack(id));
                                    dispatch(updateUserLikes({ id: currentUser.id, likes: store.getState().currentUser.likes }));

                                    let currTrack = store.getState().allTracks.find(track => track.trackId === id);
                                    dispatch(updateTrackLikes(id, currTrack.likes + 1));
                                }}
                            />
                        }
                    </> :
                    <FavoriteBorderIcon className={styles.favBorderBtn} />
                }

            </div>
            <div className={styles.audioBtns}>
                <SkipPreviousIcon
                    onClick={() => {
                        let allTracks = store.getState().allTracks;
                        let index = allTracks.findIndex(track => track.trackId === id);

                        if (index - 1 >= 0) {
                            let track = allTracks[index - 1];

                            playNewTrack(track)
                        }
                    }}
                />

                {isPlaying ?

                    <PauseIcon
                        onClick={() => dispatch(pauseTrack())}

                    /> :
                    <PlayArrowIcon
                        onClick={() => dispatch(playTrack())}

                    />}
                <SkipNextIcon
                    onClick={() => {
                        let allTracks = store.getState().allTracks;
                        let index = allTracks.findIndex(track => track.trackId === id);

                        if (index + 1 < allTracks.length) {
                            let track = allTracks[index + 1];

                            playNewTrack(track)
                        }
                    }}
                />
            </div>
            <div className={styles.time}>

                <span className={styles.currTime}>{strTime}</span>
                <div className={styles.timeRange}>
                    <input
                        type="range"
                        style={{ "--webkitProgressPercent": `${progressPercent}%` }}
                        max={sliderMaxValue} value={sliderValue}
                        onChange={(ev) => {
                            const value = ev.target.value;
                            changeProgress(value);
                            changeProgressPercent(value)
                        }} />
                </div>
                <span className={styles.duration}>{duration}</span>
            </div>
            <div className={styles.volume}
                onMouseLeave={() => volumeRange.style.display = 'none'}>

                <div className={styles.mute}
                    onMouseEnter={() => volumeRange.style.display = 'block'}>
                    {isMuted || !Number(volume) ?
                        <VolumeOffIcon
                            onClick={muteSong}
                            style={{ cursor: 'pointer' }}
                        /> :
                        <VolumeUpIcon
                            onClick={muteSong}
                            style={{ cursor: 'pointer' }}
                        />
                    }
                </div>


                <div className={styles.volumeRange} ref={el => setVolumeRange(el)} style={{ display: 'none' }}>
                    <input
                        type="range"
                        className={styles.volumeRange}
                        style={{ "--webkitProgressPercent": `${volumePercent}%` }}
                        max="100" value={volume}
                        onChange={(ev) => {
                            const value = ev.target.value;
                            track.audioEl.current.volume = value / 100;
                            setVolume(value)

                            if (value > 0 && track.audioEl.current.muted) {
                                track.audioEl.current.muted = false;
                                setIsMuted(false)
                            }

                            changeVolumePercent(value);
                        }} />
                </div>
            </div>

            <div className={styles.imgAndTitle}>
                <div className={styles.imageContainer}>
                    <img src={image} alt='track' onClick={openTrackPage} />
                </div>
                {/* to={`/Users/${userId}`} */}
                <div className={styles.titleAndAuthor}>
                    <span className={styles.author} onClick={openUserPage} >{author}</span>
                    <span className={styles.title} onClick={openTrackPage}>{title}</span>
                </div>
            </div>
            <div className={styles.closeBar}>
                <HighlightOffIcon onClick={() => {
                    dispatch(pauseTrack())
                    dispatch(setTrackId(''))
                }} />
            </div>
        </div>
    );
}

export default TrackBar;