import style from './style.module.css';
import Tracks from './Tracks/Tracks';

export default function TrendingTracks() {

    return (
        <div className={style.trendingTracks}>
            <div className={style.trendingTracksTitle}>
                Hear what’s trending for free in the SoundCloud community
            </div>
            <div className={style.gridDiv}>
                <ul className={style.ul}>
                    <Tracks />
                </ul>
            </div>
        </div>
    );
}