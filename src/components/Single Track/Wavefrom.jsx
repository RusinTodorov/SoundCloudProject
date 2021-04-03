import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import WaveSurfer from 'wavesurfer';

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';

import styles from './waveform.module.scss';
import { calculateDate } from '../Utils/getDate';

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

import { DATA as InitialPageDATA } from '../../data/Initial Page/data'
import { DATA as HomePageDATA } from '../../data/Home Page/data'

let waveform = '';
let onReady = false;

const Waveform = () => {
    const dispatch = useDispatch();
    let history = useHistory();
    let currId = history.location.pathname.split('/')[2].toString();

    const id = useSelector(state => state.track.id)
    const songSrc = useSelector(state => state.track.src)

    if (id !== currId) {
        let track = '';

        if (currId <= 12) {
            track = InitialPageDATA.find(x => x.trackId === currId);
        } else {
            track = HomePageDATA.find(x => x.trackId === currId);
        }

        dispatch(setId(currId));
        dispatch(addSrc(track.audio));
        dispatch(addImage(track.img));
        dispatch(addContent({ ...track, author: track.uploadedBy }));
        dispatch(setCurrTime(0));
    }

    const isPlaying = useSelector(state => state.track.isPlaying)
    const strTime = useSelector(state => state.track.strTime);
    const currTime = useSelector(state => state.track.currTime);
    const duration = useSelector(state => state.track.duration);

    const image = useSelector(state => state.track.image);
    const title = useSelector(state => state.track.content.title);
    const author = useSelector(state => state.track.content.author);
    const date = useSelector(state => state.track.content.date);
    const description = useSelector(state => state.track.content.description);

    let [seekend, setSeekend] = useState(false);

    useEffect(() => {
        document.getElementById('waveform').innerHTML = '';

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
            // skipLength: currTime,
        });


        waveform.load(songSrc);

        waveform.setMute(true)

        waveform.on("ready", () => {
            if (!onReady) {
                waveform.skip(currTime)
                onReady = true;
            }
        });

        waveform.on('seek', () => {
            dispatch(onSeek(waveform.getCurrentTime()))
            setSeekend(true)
        });
    }, [id]);

    useEffect(() => {

        const wavefromCurrentTime = waveform.getCurrentTime()
        const timeToSkip = wavefromCurrentTime - currTime;

        if (isPlaying && !seekend) {

            if ((timeToSkip < -1 || timeToSkip > 1) && wavefromCurrentTime !== 0) {
                waveform.play(Number(currTime));
            } else {
                waveform.play();
            }


        } else if (!isPlaying) {
            waveform.pause();

            //1 and -1 are minimal time to skip
            if (timeToSkip < -1) {
                waveform.skip(Math.abs(timeToSkip));
            } else if (timeToSkip > 1) {
                waveform.skip(-Math.abs(timeToSkip));
            }
        }

        if (seekend) {
            setSeekend(false)
        }


    }, [currTime, isPlaying])


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