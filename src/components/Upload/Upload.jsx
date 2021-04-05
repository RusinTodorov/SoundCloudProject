import { useState } from 'react';
import styles from './styles.module.scss';

import store from '../../redux/store'
import { addTrack } from '../../redux/AllTracks/allTracks.action'
import { useDispatch } from 'react-redux';

import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import initialImage from './initialImage.JPG'

export default function Upload() {
    const dispatch = useDispatch();

    let [track, setTrack] = useState();
    let [image, setImage] = useState(initialImage);
    let [title, setTitle] = useState('');
    let [description, setDescription] = useState();
    let [warning, setWarning] = useState(false)
    let [uploaded, setUploaded] = useState(false)
    // let [user, setUser] = useState();

    const generateTrackObject = () => {
        let currTrack = {
            trackId: `${store.getState().allTracks.length + 1}`,
            title,
            imageSrc: image,
            songSrc: track,
            date: Date.now(),
            uploadedBy: 'Rusin',
            userId: '12',
        }

        dispatch(addTrack(currTrack))
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.uploadTrack}>

                    {uploaded ? <h3 className={styles.successUpload}>
                        <CheckCircleOutlineIcon fontSize='large' className={styles.checkBtn} />
                        You have successfully uploaded your track.</h3> :
                        <>
                            <h4>Upload your track</h4>
                            <div className={styles.trackInfo}>
                                <div className={styles.imgContainer}>
                                    <img src={image} alt='profile' />
                                    <label htmlFor='uplImage'> <PhotoCameraIcon fontSize='small' /> Upload image</label>
                                    <input type="file" accept="image/*" id='uplImage'
                                        onChange={(ev) => {

                                            let file = ev.target.files[0];

                                            const reader = new FileReader();

                                            reader.onload = function () {
                                                // convert image file to base64 string

                                                setImage(reader.result)
                                            };

                                            if (file) {
                                                reader.readAsDataURL(file);
                                            }
                                        }}
                                    ></input>
                                </div>
                                <div className={styles.infoContainer}>
                                    <label htmlFor='title'>Title</label>
                                    <input type="text" id='title'
                                        onChange={(ev) => setTitle(ev.target.value.trim())} value={title}
                                    ></input>

                                    <label htmlFor='descr'>Description</label>
                                    <textarea id='descr' style={{ height: '73px' }}
                                        onChange={(ev) => setDescription(ev.target.value)} value={description}
                                    ></textarea>

                                    <label htmlFor='uplAudio'>Upload audio file:</label>
                                    <input type="file" accept="audio/*" id='uplAudio'
                                        onChange={(ev) => {


                                            let file = ev.target.files[0];

                                            let objectURL = URL.createObjectURL(file);

                                            setTrack(objectURL)

                                            // URL.revokeObjectURL(objectURL)
                                        }}
                                    ></input>
                                </div>
                            </div>
                            <div className={styles.uplBtnDiv}>
                                {warning && <p>*Please upload audio file and add title</p>}
                                <button onClick={() => {
                                    if (title.length < 1 || !track) {
                                        setWarning(true)
                                    } else {
                                        setWarning(false)
                                        generateTrackObject();
                                        setUploaded(true);
                                    }

                                }}> Upload</button>
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    );
}