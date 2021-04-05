import style from './style.module.css';
import Track from '../../Track Vertical Card/Track';

export default function Categories({ title, details, data }) {

    return (
        <div className={style.mainDiv}>
            <div className={style.topDiv}>
                <h2 className={style.topDivTitle}>{title}</h2>
                <p className={style.topDivDetails}>{details}</p>
            </div>
            <div className={style.gridDiv}>
                <ul className={style.ul}>
                    {data.map(track => <Track key={track.trackId} {...track} />)}
                </ul>
            </div>
        </div>
    );
}