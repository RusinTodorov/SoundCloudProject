import { useState } from 'react';
import { useEffect } from 'react';

import ReactAudioPlayer from 'react-audio-player';
import Waveform from './Wavefrom'

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import Tooltip from '@material-ui/core/Tooltip';

import styles from './track.module.scss'

import song from './Rod Wave - Street Runner.mp3'
import sixnineImage from './sixnine.jpg'


let trackObj = {
    title: 'Street Runner',
    author: 'Rod Wave',
    song: song,
    image: sixnineImage,
    date: "March, 28, 2021 16:25:00",
}


const SingleTrack = () => {
    let [isPlaying, setIsPlaying] = useState(true);
    let [track, setTrack] = useState();
    let [currTime, setCurrTime] = useState('00:00')
    let [duration, setDuration] = useState('00:00')
    let [sliderMaxValue, setSliderMaxValue] = useState(100);
    let [sliderValue, setSliderValue] = useState(0);
    let [volume, setVolume] = useState(100)
    let [isMuted, setIsMuted] = useState(false)
    let [progressPercent, setProgressPercent] = useState(0)
    let [volumePercent, setVolumePercent] = useState(100);

    useEffect(() => {
        // track.audioEl.current.currentTime;
    }, [track])

    const togglePlay = () => {

        if (isPlaying) {
            track.audioEl.current.play();

            console.log(track);

            // audio.play();
            setIsPlaying(false);
        } else {
            track.audioEl.current.pause();
            setIsPlaying(true);
        }
    };

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${minutes}:${returnedSeconds}`;
    }

    const muteSong = () => {
        if (isMuted) {
            track.audioEl.current.muted = false
        } else {
            track.audioEl.current.muted = true
        }

        setIsMuted(!isMuted);
    }

    const changeProgressPercent = () => {
        const percent =
            ((sliderValue) / (sliderMaxValue)) *
            100;
        setProgressPercent(percent);
    }

    const changeVolumePercent = () => {
        const percent =
            ((volume) / 100) *
            100;
        setVolumePercent(percent);
    }

    return (
        <div>
            <Waveform track={trackObj} />
            <div className={styles.test}>
                Helloooo
                <button onClick={togglePlay}>Play</button>
                <button onClick={muteSong}>Mute</button>
                <button onClick={() => {
                    console.log(!!track.audioEl.current.volume);
                }}>Check</button>
                <div className={styles.audioPlayer}>
                    <ReactAudioPlayer
                        ref={(element) => setTrack(element)}
                        src={song}
                        preload='metadata'
                        controls
                        onLoadedMetadata={() => {
                            setDuration(calculateTime(track.audioEl.current.duration))
                            setSliderMaxValue(Math.floor(track.audioEl.current.duration))
                        }}
                        listenInterval={900}
                        onListen={() => {
                            setSliderValue(track.audioEl.current.currentTime)

                            let time = calculateTime(track.audioEl.current.currentTime);
                            setCurrTime(time)

                            changeProgressPercent();

                        }}
                        volume={volume / 100}
                    />


                    <div className={styles.timeRange}>

                    </div>
                    <div>
                        <input
                            type="range"
                            className={styles.volumeRange}
                            style={{ "--webkitProgressPercent": `${volumePercent}%` }}
                            max="100" value={volume}
                            onChange={(ev) => {
                                track.audioEl.current.volume = ev.target.value / 100;
                                setVolume(ev.target.value)

                                changeVolumePercent();
                            }} />
                    </div>

                    <output>Volume: {volume}</output>

                </div>
            </div>

            <div className={styles.trackBar}>
                <div className={styles.audioBtns}>
                    <SkipPreviousIcon />

                    {isPlaying ?
                        <PlayArrowIcon
                            style={{ cursor: 'pointer' }}
                            onClick={togglePlay}

                        /> :
                        <PauseIcon
                            style={{ cursor: 'pointer' }}
                            onClick={togglePlay}

                        />}

                    <SkipNextIcon />
                </div>
                <div className={styles.time}>

                    <span className={styles.currTime}>{currTime}</span>
                    <div className={styles.timeRange}>
                        <input
                            type="range"
                            style={{ "--webkitProgressPercent": `${progressPercent}%` }}
                            max={sliderMaxValue} value={sliderValue}
                            onChange={(ev) => {
                                let time = calculateTime(ev.target.value);
                                setCurrTime(time)

                                setSliderValue(ev.target.value);
                                track.audioEl.current.currentTime = ev.target.value;

                                changeProgressPercent();
                            }} />
                    </div>
                    <span className={styles.duration}>{duration}</span>
                </div>
                <div className={styles.volume} onMouseOver={() => console.log('yes')}>

                    <div className={styles.mute}>
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


                    <div className={styles.volumeRange}>
                        <input
                            type="range"
                            className={styles.volumeRange}
                            style={{ "--webkitProgressPercent": `${volumePercent}%` }}
                            max="100" value={volume}
                            onChange={(ev) => {
                                track.audioEl.current.volume = ev.target.value / 100;
                                setVolume(ev.target.value)

                                changeVolumePercent();
                            }} />
                    </div>
                </div>
            </div>

        </div>

    );
}

export default SingleTrack;

// const RangeInput = ({
//     min = 0,
//     max = 100,
//     step = 1,
//     defaultValue = 0,
//     onChange = () => { }
// }) => {
//     const inputRef = useRef();
//     const [isChanging, setIsChanging] = useState(false);

//     useEffect(() => {
//         const inputElement = inputRef.current;

//         const handleMove = () => {
//             if (!isChanging) return;
//             const percent =
//                 ((inputElement.value - inputElement.min) /
//                     (inputElement.max - inputElement.min)) *
//                 100;
//             inputElement.style.setProperty("--webkitProgressPercent", `${percent}%`);
//         };
//         const handleUpAndLeave = () => setIsChanging(false);
//         const handleDown = () => setIsChanging(true);

//         inputElement.addEventListener("mousemove", handleMove);
//         inputElement.addEventListener("mousedown", handleDown);
//         inputElement.addEventListener("mouseup", handleUpAndLeave);
//         inputElement.addEventListener("mouseleave", handleUpAndLeave);
//         return () => {
//             inputElement.removeEventListener("mousemove", handleMove);
//             inputElement.removeEventListener("mousedown", handleDown);
//             inputElement.removeEventListener("mouseup", handleUpAndLeave);
//             inputElement.removeEventListener("mouseleave", handleUpAndLeave);
//         };
//     }, [isChanging]);

//     return (
//         <div>
//             <input
//                 className="range"
//                 type="range"
//                 ref={inputRef}
//                 min={min}
//                 max={max}
//                 step={step}
//                 value={defaultValue}
//                 onChange={e => onChange(e.currentTarget.value)}
//             />
//         </div>
//     );
// };

