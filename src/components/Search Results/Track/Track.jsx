import style from './style.module.css';
import {Link} from 'react-router-dom';

export default function Track({ userId, trackId, img, audio, title, uploadedBy, likes }) {

    const like = (e) => {
        // to do Like
    };

    return (
        <div className={style.card}>
            <img src={img} alt="Cover" />
            <div className={style.info}>
                <Link className={style.uploader} to={`/Users/${userId}`}>{uploadedBy}</Link>
                <Link className={style.title} to={`/Tracks/${trackId}`}>{title}</Link>
                <audio controls className={style.audio}>
                    <source src={audio} type="audio/mpeg" />
                    Your browser does not support the audio tag.
                </audio>
                <div className={style.bottomDiv}>
                <button className={style.like} onClick={like}>Like!</button>
                <p>Likes: {likes}</p>
                </div>
            </div>
        </div>
    );
}