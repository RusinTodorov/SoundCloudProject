import { useState } from 'react';
import Header from '../Home/Header/Header'
import styles from './styles.module.scss';

localStorage.setItem('tracks', JSON.stringify([]));


export default function Upload() {

    let [track, setTrack] = useState();
    let [title, setTitle] = useState();
    let [description, setDescription] = useState();
    let [image, setImage] = useState();
    // let [user, setUser] = useState();

    const generateTrackObject = () => {
        let tracks = JSON.parse(localStorage.getItem('tracks'));

        tracks.push({

        })



        localStorage.setItem('tracks', JSON.stringify(tracks));
    }

    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.uploadTrack}>
                    <h4>Upload your track</h4>
                    <input type="file" accept="audio/*" disabled={!!track}
                        onChange={(ev) => {
                            console.log(ev.target.files[0]);

                            // dispatch { type; SONG_UPLOADED, payload: objectUrl

                            let file = ev.target.files[0];

                            let objectURL = URL.createObjectURL(file);

                            console.log(objectURL);

                            setTrack(objectURL)



                            // URL.revokeObjectURL(objectURL)
                        }}
                    ></input>
                    <button onClick={() => {

                        let tracks = JSON.parse(localStorage.getItem('tracks'))
                        let currTrack = tracks[tracks.length - 1]

                    }}>Get Song</button>
                    <button onClick={() => generateTrackObject}>Upload</button>
                    <audio controls src={track}></audio>
                </div>
            </div>


        </>
    );
}