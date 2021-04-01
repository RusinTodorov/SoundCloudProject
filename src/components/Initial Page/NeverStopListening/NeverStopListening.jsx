import style from './style.module.css';
// import { Link } from 'react-router-dom';
import img from './Never Stop Listening.jpg';
import AppStoreBtn from './AppStoreBtn.png';
import GooglePlayBtn from './GooglePlayBtn.png';

export default function NeverStopListening() {

    return (
        <div className={style.divWrap}>
            <img src={img} alt="Mobile Divices" className={style.img} />
            <div className={style.asideDiv}>
                <div className={style.titleDiv}>
                    Never stop listening
                </div>
                <p className={style.details}>
                    SoundCloud is available on
                    Web, iOS, Android, Sonos,
                    Chromecast, and Xbox One.
                </p>
                <div className={style.bottomDiv}>
                    <a href="https://itunes.apple.com/us/app/soundcloud/id336353151?mt=8"
                        className={style.appStore} target="_blank" rel="noreferrer">
                        <img src={AppStoreBtn} alt="AppStoreBtn" />
                        Download on the App Store
                </a>
                    <a href="https://play.google.com/store/apps/details?id=com.soundcloud.android&hl=us"
                        className={style.googlePlay} target="_blank" rel="noreferrer">
                        <img src={GooglePlayBtn} alt="GooglePlayBtn" />
                        Get it on Google Play
                    </a>
                </div>
            </div>
        </div>
    );
}