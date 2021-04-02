import { useEffect, useState } from 'react';

import ReactAudioPlayer from 'react-audio-player';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';

import styles from './trackBar.module.scss'

import song from './Jeremih - Birthday Sex.mp3'
import songTwo from './Rod Wave - Street Runner.mp3'
import sixnineImage from './sixnine.jpg'

import { useDispatch, useSelector } from 'react-redux'
import store from '../../redux/store';
import {
    addSrc,
    playTrack,
    pauseTrack,
    setCurrTime,
    setDuration,
    addContent,
    addImage,

} from '../../redux/Track/track.actions'

let trackObj = {
    title: 'Street Runner',
    author: 'Rod Wave',
    song: song,
    image: sixnineImage,
    date: "March, 28, 2021 16:25:00",
    description: 'this is my new song',
}


const TrackBar = () => {
    let [track, setTrack] = useState(null);
    let [sliderMaxValue, setSliderMaxValue] = useState(100);
    let [sliderValue, setSliderValue] = useState(0);
    let [volume, setVolume] = useState(100)
    let [isMuted, setIsMuted] = useState(false)
    let [progressPercent, setProgressPercent] = useState(0)
    let [volumePercent, setVolumePercent] = useState(100);
    let [volumeRange, setVolumeRange] = useState(null);
    let [previousVolume, setPreviousVolume] = useState(100);

    const dispatch = useDispatch();
    const isPlay = useSelector(state => state.track.isPlaying)
    const songSrc = useSelector(state => state.track.src)
    const seekTime = useSelector(state => state.track.seekTime)
    const strTime = useSelector(state => state.track.strTime);
    const duration = useSelector(state => state.track.duration);

    const image = useSelector(state => state.track.image);
    const title = useSelector(state => state.track.content.title);
    const author = useSelector(state => state.track.content.author);

    if (track) {

        if (isPlay) {
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

    return (
        <div className={styles.trackBar} >
            <div className={styles.test}>
                <button onClick={() => dispatch(playTrack())}>Play</button>
                <button onClick={() => dispatch(pauseTrack())}>Pause</button>
                <button onClick={() => {
                    dispatch(addSrc(songTwo))
                    dispatch(addImage(sixnineImage))
                    dispatch(addContent(trackObj))

                }}>Add source</button>
                <button onClick={() => { console.log(store.getState()) }}>Check</button>
            </div>


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
            <div className={styles.audioBtns}>
                <SkipPreviousIcon />

                {isPlay ?

                    <PauseIcon
                        style={{ cursor: 'pointer' }}
                        onClick={() => dispatch(pauseTrack())}

                    /> :
                    <PlayArrowIcon
                        style={{ cursor: 'pointer' }}
                        onClick={() => dispatch(playTrack())}

                    />}

                <SkipNextIcon />
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
                    <img src={image} alt='track' />
                </div>
                <div className={styles.titleAndAuthor}>
                    <span className={styles.author}>{author}</span>
                    <span className={styles.title}>{title}</span>
                </div>
            </div>
        </div>
    );
}

export default TrackBar;