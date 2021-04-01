import React, { useEffect, useState } from 'react';
import WaveSurfer from 'wavesurfer';

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';

import styles from './waveform.module.scss';
import { calculateDate } from '../Utils/getDate';

import jer from './Jeremih - Birthday Sex.mp3'

import { useDispatch, useSelector } from 'react-redux'
import {
    playTrack,
    pauseTrack,
    onSeek,

} from '../../redux/Track/track.actions'

let waveform = null;

const Waveform = ({ track }) => {
    const dispatch = useDispatch();
    const isPlaying = useSelector(state => state.track.isPlaying)
    const songSrc = useSelector(state => state.track.src)
    const strTime = useSelector(state => state.track.strTime);
    const currTime = useSelector(state => state.track.currTime);
    const duration = useSelector(state => state.track.duration);


    const image = useSelector(state => state.track.image);
    const title = useSelector(state => state.track.content.title);
    const author = useSelector(state => state.track.content.author);
    const date = useSelector(state => state.track.content.date);
    const description = useSelector(state => state.track.content.description);

    useEffect(() => {
        waveform = WaveSurfer.create({
            barWidth: 3,
            cursorWidth: 1,
            container: '#waveform',
            backend: 'WebAudio',
            height: 180,
            progressColor: '#f50',
            responsive: true,
            waveColor: '#EFEFEF',
            cursorColor: 'transparent',
        });

        waveform.load(songSrc);

        waveform.setMute(true)

        waveform.on('seek', () => {
            dispatch(onSeek(waveform.getCurrentTime()))
        });
    }, [songSrc])


    useEffect(() => {
        if (isPlaying) {
            waveform.play();
        } else if (!isPlaying) {
            waveform.pause();
        }

        waveform.backend.startPosition = Number(currTime);

    }, [isPlaying, currTime])

    return (
        <div className={styles.trackContainer}>
            <div className={styles.leftSideContainer}>
                <div className={styles.playNameDateContainer}>
                    <div className={styles.playContainer}>
                        <span className={styles.playBtnSpan}></span>

                        {isPlaying ? <PauseCircleFilledIcon
                            className={styles.playBtn}
                            fontSize='large'
                            onClick={() => dispatch(pauseTrack())}
                        /> : <PlayCircleFilledIcon
                            className={styles.playBtn}
                            fontSize='large'
                            onClick={() => dispatch(playTrack())}
                        />}

                    </div>
                    <div className={styles.nameContainer}>
                        <div className={styles.authorContainer}>
                            <span className={styles.author}>{author}</span>
                        </div>
                        <div>
                            <span className={styles.title}>{title}</span>
                        </div>
                    </div>
                    <div className={styles.dateContainer}>
                        <p>{calculateDate(date)}</p>
                    </div>
                </div>

                <div className={styles.audioWavePlayer}>
                    <div className={styles.timeSpansContainer}>
                        <span style={{ marginTop: 3 }}>
                            {strTime !== '0:00' && <span className={styles.currTime}>{strTime}</span>}
                        </span>
                        <span className={styles.duration}>{duration}</span>
                    </div>
                    <div className={styles.waveformContianer}>
                        <div className={styles.wave} id="waveform">

                        </div>
                    </div >
                </div>
            </div>
            <div className={styles.imageContainer}>
                <img src={image} alt='track' />
            </div>
        </div >
    );
}

export default Waveform;