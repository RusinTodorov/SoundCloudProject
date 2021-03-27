import styles from './track.module.scss'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import ReactAudioPlayer from 'react-audio-player';

import sixnineImage from './sixnine.jpg'
import song from './Jeremih - Birthday Sex.mp3'
import { useState } from 'react';
import { useEffect } from 'react';

const Track = () => {
    let [isPlay, setIsPlay] = useState(true);
    let [track, setTrack] = useState(null);
    let [currTime, setCurrTime] = useState('00:00')
    let [duration, setDuration] = useState('00:00')
    let [sliderMaxValue, setSliderMaxValue] = useState(100);

    useEffect(() => {
        // track.audioEl.current.currentTime;
        console.log(track)
    }, [track])

    const togglePlay = () => {

        if (isPlay) {
            new Audio(track.props.src).play();
            console.log(track)
            setIsPlay(false);
        } else {
            setIsPlay(true);
        }
    };

    const calculateTime = (secs) => {
        console.log('secs', secs);
        const minutes = Math.floor(secs / 60);
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${minutes}:${returnedSeconds}`;
    }

    return (
        <div>
            <div className={styles.trackContainer}>
                <div className={styles.leftSideContainer}>
                    <div className={styles.playNameDateContainer}>
                        <div className={styles.playContainer}>
                            <span className={styles.playBtnSpan}></span>

                            {isPlay ? <PlayCircleFilledIcon
                                className={styles.playBtn}
                                fontSize='large'
                                onClick={togglePlay}
                            /> : <PauseCircleFilledIcon
                                className={styles.playBtn}
                                fontSize='large'
                                onClick={togglePlay}
                            />}

                        </div>
                        <div className={styles.nameContainer}>
                            <div className={styles.authorContainer}>
                                <span className={styles.author}>6IX9INE</span>
                            </div>
                            <div>
                                <span className={styles.title}>ZAZA</span>
                            </div>
                        </div>
                        <div className={styles.dateContainer}>
                            <p>1 month ago</p>
                        </div>
                    </div>
                    <div className={styles.audioPlayer}>

                        <ReactAudioPlayer
                            ref={(element) => setTrack(element)}
                            src={song}
                            preload='metadata'
                            autoPlay
                            controls
                            onLoadedMetadata={() => {
                                setDuration(calculateTime(track.audioEl.current.duration))
                                setSliderMaxValue(Math.floor(track.audioEl.current.duration))
                            }}

                            listenInterval={900}
                            onListen={() => {
                                let time = calculateTime(track.audioEl.current.currentTime);
                                setCurrTime(time)
                                // console.log()
                            }}
                        />

                        <div className={styles.timeSpansContainer}>
                            <span id="current-time" className={styles.timeSpan}>{currTime}</span>
                            <span>/</span>
                            <span id="duration" className={styles.timeSpan}>{duration}</span>
                        </div>

                        <input type="range" id="seek-slider" max={sliderMaxValue} defaultValue="0" onChange={(ev) => {
                            let time = calculateTime(ev.target.value);
                            setCurrTime(time);
                        }} />

                        <input type="range" id="volume-slider" max="100" defaultValue="100" />

                        <output id="volume-output">Volume: 100</output>

                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <img src={sixnineImage} alt='track' />
                </div>
            </div>
        </div>
    );
}

export default Track;