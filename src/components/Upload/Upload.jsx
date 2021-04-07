import { useState } from 'react';
import styles from './styles.module.scss';

import store from '../../redux/store'
import { useDispatch, useSelector } from 'react-redux';

import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import { addTrack } from '../../redux/AllTracks/allTracks.action'
import { addIdToUserUploads } from '../../redux/CurrentUser/currentUser.actions'
import { updateUserUploads } from '../../redux/AllUsers/allUsers.actions'

import initialImage from './initialImage.JPG'

export default function Upload() {
    const dispatch = useDispatch();

    let currentUser = useSelector(state => state.currentUser)

    let [track, setTrack] = useState();
    let [image, setImage] = useState(initialImage);
    let [title, setTitle] = useState('');
    let [description, setDescription] = useState();
    let [warning, setWarning] = useState(false)
    let [uploaded, setUploaded] = useState(false)

    const generateTrackObject = () => {
        let currDate = new Date();

        let trackTitle = title.trim();
        let trackDesc = description ? description.trim() : '';

        let trackId = store.getState().allTracks.length.toString();

        let currTrack = {
            trackId,
            title: trackTitle,
            imageSrc: image,
            songSrc: track,
            date: currDate.getTime(),
            uploadedBy: currentUser.name,
            userId: currentUser.id,
            description: trackDesc,
        }

        dispatch(addIdToUserUploads(trackId))
        dispatch(addTrack(currTrack))
        dispatch(updateUserUploads(currentUser.id, trackId))
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
                                        onChange={(ev) => setTitle(ev.target.value)} value={title}
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
                                    if (title.trim().length < 1 || !track) {
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