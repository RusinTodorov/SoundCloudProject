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
    setTrackId,
    setUserId,
} from '../../redux/Track/track.actions'

let waveform = '';
let onReady = false;

const Waveform = () => {
    const dispatch = useDispatch();
    let history = useHistory();
    let currId = history.location.pathname.split('/')[2].toString();

    const allTracks = useSelector(state => state.allTracks)

    let track = allTracks.find(x => x.trackId === currId)

    const id = useSelector(state => state.track.id)
    const isPlaying = useSelector(state => state.track.isPlaying)
    const currTime = useSelector(state => state.track.currTime);

    let userId = useSelector(state => state.track.userId)
    let strTime = useSelector(state => state.track.strTime);
    let duration = useSelector(state => state.track.duration);
    let songSrc = useSelector(state => state.track.src)
    let image = useSelector(state => state.track.image);
    let title = useSelector(state => state.track.content.title);
    let author = useSelector(state => state.track.content.author);
    let date = useSelector(state => state.track.content.date);
    // const description = useSelector(state => state.track.content.description);

    if (id !== currId) {
        userId = track.userId;
        image = track.img;
        title = track.title;
        author = track.uploadedBy;
        songSrc = track.audio;
        strTime = '0:00'
        duration = '0:00'
        date = track.date;
    }

    let [seekend, setSeekend] = useState(false);

    useEffect(() => {
        onReady = false;
        document.getElementById('waveform').innerHTML = '';

        if (id !== currId) {
            waveform = WaveSurfer.create({
                barWidth: 3,
                cursorWidth: 1,
                container: '#waveform',
                backend: 'WebAudio',
                height: 180,
                progressColor: '#ccc',
                responsive: true,
                waveColor: '#ccc',
                cursorColor: 'transparent',
                // skipLength: currTime,
            });
        } else {
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

            waveform.on("ready", () => {

                if (!onReady && id === currId) {
                    const waveformCurrentTime = waveform.getCurrentTime()
                    const timeToSkip = waveformCurrentTime - currTime;

                    //1 and -1 are minimal time to skip
                    if (timeToSkip < -1) {
                        waveform.skip(Math.abs(timeToSkip));
                    } else if (timeToSkip > 1) {
                        waveform.skip(-Math.abs(timeToSkip));
                    }

                    onReady = true;
                }


            });

            waveform.on('seek', () => {

                const waveformCurrentTime = waveform.getCurrentTime()
                const timeToSkip = waveformCurrentTime - currTime;

                if ((timeToSkip < -1 || timeToSkip > 1) && waveformCurrentTime !== 0) {
                    dispatch(onSeek(waveform.getCurrentTime()))
                    setSeekend(true)
                    console.log('ins');
                }

            });
        }

        waveform.load(songSrc);

        waveform.setMute(true)

    }, [id, songSrc]);

    useEffect(() => {

        const waveformCurrentTime = waveform.getCurrentTime()
        const timeToSkip = waveformCurrentTime - currTime;

        if (isPlaying && !seekend) {

            if ((timeToSkip < -1 || timeToSkip > 1) && waveformCurrentTime !== 0) {
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

    const setTrackFromThisPage = () => {

        dispatch(addSrc(track.audio));
        dispatch(setUserId(track.userId));
        dispatch(setTrackId(currId));
        dispatch(addImage(track.img));
        dispatch(addContent({ ...track, author: track.uploadedBy }));
        dispatch(setCurrTime(0));
        dispatch(pauseTrack());

    }

    return (
        <div className={styles.trackContainer}>
            <div className={styles.leftSideContainer}>
                <div className={styles.playNameDateContainer}>
                    <div className={styles.playContainer}>
                        <span className={styles.playBtnSpan}></span>

                        {isPlaying && id === currId ? <PauseCircleFilledIcon
                            className={styles.playBtn}
                            fontSize='large'
                            onClick={() => dispatch(pauseTrack())}
                        /> : <PlayCircleFilledIcon
                            className={styles.playBtn}
                            fontSize='large'
                            onClick={() => {
                                setTrackFromThisPage()
                                dispatch(playTrack())
                            }}
                        />}


                    </div>
                    <div className={styles.nameContainer}>
                        <div className={styles.authorContainer}>
                            {/* <span className={styles.author} onClick={() => {
                                history.push(`/users/${track.userId}`)

                            }}>{author}</span> */}
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
                        {duration !== '0:00' && <span className={styles.duration}>{duration}</span>}
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