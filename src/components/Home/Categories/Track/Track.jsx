import style from './style.module.css';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux'
import {
    addSrc,
    addContent,
    addImage,

} from '../../../../redux/Track/track.actions'


export default function Track({ img, title, audio, uploadedBy, trackId }) {
    function like(e) {
        e.target.innerHTML = 'Liked';
        let btn = e.target;
        btn.style.backgroundColor = 'LightGray';
        btn.style.borderColor = 'LightGray';
        btn.setAttribute('disabled', 'true');

        // to do set in local storage that song has been liked,
        // and send a like to firebase
    }

    const dispatch = useDispatch();

    let trackObj = {
        title: title,
        author: 'pesho'
    }

    const sendSong = () => {
        dispatch(addSrc(audio));
        dispatch(addImage(img));
        dispatch(addContent(trackObj))
    }


    return (
        <>
            <div className={style.cardDiv}>
                <img className={style.img} src={img} alt="Song Cover" />
                <Link className={style.title} to={`/Tracks/${trackId}`}>{title}</Link>
                <Link className={style.uploader} to={`/Users/${uploadedBy}`}>{uploadedBy}</Link>
                <button onClick={() => {
                    sendSong()
                }}>Play</button>
                <audio controls className={style.audio}>
                    <source src={audio} type="audio/mpeg" />
                    Your browser does not support the audio tag.
                </audio>
                <button className={style.like} onClick={like}>Like!</button>
            </div >

        </>
    )
}