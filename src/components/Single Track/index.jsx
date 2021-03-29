import { useState } from 'react';
import { useEffect } from 'react';

import ReactAudioPlayer from 'react-audio-player';
import Waveform from './Wavefrom'

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
    let [isPlay, setIsPlay] = useState(true);
    let [track, setTrack] = useState();
    let [currTime, setCurrTime] = useState('00:00')
    let [duration, setDuration] = useState('00:00')
    let [sliderMaxValue, setSliderMaxValue] = useState(100);
    let [sliderValue, setSliderValue] = useState(0);
    let [volume, setVolume] = useState(100)

    useEffect(() => {
        // track.audioEl.current.currentTime;
    }, [track])

    const togglePlay = () => {

        if (isPlay) {
            track.audioEl.current.play();

            console.log(track);

            // audio.play();
            setIsPlay(false);
        } else {
            track.audioEl.current.pause();
            setIsPlay(true);
        }
    };

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${minutes}:${returnedSeconds}`;
    }

    return (
        <div>
            <Waveform track={trackObj} />
            <div className={styles.wave}>
                Helloooo
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
                        }}
                        volume={volume / 100}
                    />

                    <div className={styles.timeSpansContainer}>
                        <span id="current-time" className={styles.timeSpan}>{currTime}</span>
                        <span>/</span>
                        <span id="duration" className={styles.timeSpan}>{duration}</span>
                    </div>

                    <input type="range" id="seek-slider" max={sliderMaxValue} value={sliderValue} onChange={(ev) => {
                        let time = calculateTime(ev.target.value);
                        setCurrTime(time)

                        setSliderValue(ev.target.value);
                        track.audioEl.current.currentTime = ev.target.value;
                    }} />

                    <input type="range" id="volume-slider" max="100" value={volume} onChange={(ev) => {
                        track.audioEl.current.volume = ev.target.value / 100;
                        setVolume(ev.target.value)
                    }} />

                    <output id="volume-output">Volume: {volume}</output>

                </div>
            </div>

        </div>

    );
}

export default SingleTrack;