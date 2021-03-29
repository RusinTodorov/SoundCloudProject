import React from 'react';
import WaveSurfer from 'wavesurfer';
import ReactAudioPlayer from 'react-audio-player';

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';

import styles from './waveform.module.scss';
import { calculateDate } from '../Utils/getDate';

import jer from './Jeremih - Birthday Sex.mp3'

class Waveform extends React.PureComponent {

    state = {
        audioEl: '',
        duration: '0:00',
        currTime: '0:00',
        song: this.props.track.song,
        image: this.props.track.image,
        title: this.props.track.title,
        author: this.props.track.author,
        date: this.props.track.date,
        playing: false,
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

        console.log('ww', this.waveform);

        this.waveform.load(this.state.song);

    };

    handlePlay = () => {
        if (this.state.playing) {
            this.state.audioEl.audioEl.current.pause();
        } else {
            this.state.audioEl.audioEl.current.play();
        }

        this.setState({ playing: !this.state.playing });
        this.waveform.playPause();
    };


    calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${minutes}:${returnedSeconds}`;
    }

    renderPlayBtn = () => {

        return this.state.playing ? <PauseCircleFilledIcon
            className={styles.playBtn}
            fontSize='large'
            onClick={this.handlePlay}
        /> : <PlayCircleFilledIcon
            className={styles.playBtn}
            fontSize='large'
            onClick={this.handlePlay}
        />
    }

    render() {

        return (
            <div className={styles.trackContainer}>
                <div className={styles.leftSideContainer}>
                    <div className={styles.playNameDateContainer}>
                        <div className={styles.playContainer}>
                            <span className={styles.playBtnSpan}></span>

                            {this.renderPlayBtn()}

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
                    <button onClick={() => console.log(this.state.audioEl.currentTime)}>Click</button>

                    <div className={styles.audioWavePlayer}>
                        <div className={styles.timeSpansContainer}>
                            <span style={{ marginTop: 3 }}>
                                {this.state.currTime !== '0:00' && <span className={styles.currTime}>{this.state.currTime}</span>}
                            </span>
                            <span className={styles.duration}>{this.state.duration}</span>
                        </div>
                        <div className={styles.waveformContianer}>

                            {/* 
                            
                            
                            
                            */}

                            <div className={styles.wave} id="waveform"> </div>
                            <ReactAudioPlayer
                                style={{ display: 'none' }}
                                ref={(element) => this.setState({ audioEl: element })}
                                src={this.state.song}
                                preload='metadata'
                                controls
                                onLoadedMetadata={() => {
                                    this.setState({ duration: this.calculateTime(this.state.audioEl.audioEl.current.duration) })
                                }}
                                listenInterval={900}
                                onListen={() => {
                                    let time = this.calculateTime(this.state.audioEl.audioEl.current.currentTime);
                                    this.setState({ currTime: time });
                                }}
                                muted={true}
                            />
                            {/* <audio src={this.state.song} ref={el => this.setState({ audioEl: el })} onTimeUpdate={(ev) => { console.log('asd') }} /> */}
                        </div >
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <img src={this.state.image} alt='track' />
                </div>
            </div>
            //

        );
    }
};

export default Waveform;