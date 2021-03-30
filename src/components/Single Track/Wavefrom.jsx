import React from 'react';
import WaveSurfer from 'wavesurfer';

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';

import styles from './waveform.module.scss';
import { calculateDate } from '../Utils/getDate';

// import jer from './Jeremih - Birthday Sex.mp3'

class Waveform extends React.PureComponent {

    state = {
        image: this.props.track.image,
        title: this.props.track.title,
        author: this.props.track.author,
        date: this.props.track.date,

    }

    componentDidMount() {

        this.waveform = WaveSurfer.create({
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

        this.waveform.load(this.props.song.current.src);

        this.waveform.setMute(true)

        this.waveform.on('seek', (ev) => {
            this.props.onSeek(this.waveform.getCurrentTime())
        });

        this.waveform.backend.startPosition = this.props.timeInSecs;
    };

    componentDidUpdate() {
        if (this.props.isPlaying) {
            this.waveform.pause();
        } else if (!this.props.isPlaying) {
            this.waveform.play();
        }

        this.waveform.backend.startPosition = this.props.timeInSecs;

    }

    handlePlay = () => {
        this.props.onPlay();
    };

    render() {

        return (
            <div className={styles.trackContainer}>
                <div className={styles.leftSideContainer}>
                    <div className={styles.playNameDateContainer}>
                        <div className={styles.playContainer}>
                            <span className={styles.playBtnSpan}></span>

                            {this.props.isPlaying ? <PlayCircleFilledIcon
                                className={styles.playBtn}
                                fontSize='large'
                                onClick={this.handlePlay}
                            /> : <PauseCircleFilledIcon
                                className={styles.playBtn}
                                fontSize='large'
                                onClick={this.handlePlay}
                            />}

                        </div>
                        <div className={styles.nameContainer}>
                            <div className={styles.authorContainer}>
                                <span className={styles.author}>{this.state.author}</span>
                            </div>
                            <div>
                                <span className={styles.title}>{this.state.title}</span>
                            </div>
                        </div>
                        <div className={styles.dateContainer}>
                            <p>{calculateDate(this.state.date)}</p>
                        </div>
                    </div>

                    <button onClick={() => {
                        console.log('time in secs', this.props.timeInSecs)
                        console.log(this.waveform.backend.startPosition)
                    }}>Click</button>

                    <div className={styles.audioWavePlayer}>
                        <div className={styles.timeSpansContainer}>
                            <span style={{ marginTop: 3 }}>
                                {this.props.currTime !== '0:00' && <span className={styles.currTime}>{this.props.currTime}</span>}
                            </span>
                            <span className={styles.duration}>{this.props.duration}</span>
                        </div>
                        <div className={styles.waveformContianer}>
                            <div className={styles.wave} id="waveform">

                            </div>
                        </div >
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <img src={this.state.image} alt='track' />
                </div>
            </div >
            //

        );
    }
};

export default Waveform;