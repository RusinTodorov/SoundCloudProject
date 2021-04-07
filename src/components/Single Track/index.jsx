import Waveform from './Wavefrom'
import styles from './styles.module.scss'
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CancelIcon from '@material-ui/icons/Cancel';
import store from '../../redux/store';
import {
    addFavTrack,
    removeFavTrack,
} from '../../redux/CurrentUser/currentUser.actions';

import {
    updateUserLikes
} from '../../redux/AllUsers/allUsers.actions';

import {
    updateTrackLikes
} from '../../redux/AllTracks/allTracks.action';

import avatar from '../../data/Users/Profile Imgs/Initial Avatar.jpg';
import { useState } from 'react';

const SingleTrack = () => {
    const dispatch = useDispatch();
    let history = useHistory();
    let trackId = history.location.pathname.split('/')[2].toString();

    const allTracks = useSelector(state => state.allTracks);
    const allUsers = useSelector(state => state.allUsers);
    let uploader = allUsers.find(user => user.uploads.includes(trackId));
    let track = allTracks.find(track => track.trackId === trackId);

    let currentUser = useSelector(state => state.currentUser);
    let likes = currentUser.likes;

    let [closeLikesPopUp, setCloseLikesPopUp] = useState(true);

    return (
        <>
            <div style={{ paddingTop: 46 }}>
                <Waveform />
                {!closeLikesPopUp &&
                    <div className={styles.likedUserProfiles}>
                        <div className={styles.closeBtnContainer}>
                            <CancelIcon fontSize='large' onClick={() => setCloseLikesPopUp(true)} />
                        </div>
                        <ul className={styles.userLikesList}>
                            {allUsers
                                .filter(user => user.likes.includes(trackId))
                                .map(({ id, name, profileImg }) => {

                                    let profImg = profileImg;
                                    if (!profImg) {
                                        profImg = avatar;
                                    }

                                    return (
                                        <li className={styles.userLikeCard}>
                                            <img src={profImg} alt='avatar' onClick={() => history.push(`/users/${id}`)} />
                                            <h5 onClick={() => history.push(`/users/${id}`)}>{name}</h5>
                                        </li>
                                    )
                                })}
                        </ul>
                    </div>
                }
                <div className={styles.uploaderCard}>
                    <div className={styles.likeAndCommentBtnsContainer}>
                        <div className={styles.likesContainer}>
                            <div className={styles.favBtns}>
                                {(currentUser.isLoggedIn && likes) ?
                                    likes.includes(trackId) ?
                                        <FavoriteIcon fontSize='large' className={styles.favFilledBtn}
                                            onClick={() => {
                                                dispatch(removeFavTrack(trackId));
                                                dispatch(updateUserLikes({ id: currentUser.id, likes: store.getState().currentUser.likes }));
                                                dispatch(updateTrackLikes(trackId, track.likes - 1));
                                            }}
                                        /> :
                                        <FavoriteBorderIcon fontSize='large' className={styles.favBorderBtn}
                                            onClick={() => {
                                                dispatch(addFavTrack(trackId));
                                                dispatch(updateUserLikes({ id: currentUser.id, likes: store.getState().currentUser.likes }));
                                                dispatch(updateTrackLikes(trackId, track.likes + 1));
                                            }}
                                        />
                                    :
                                    <FavoriteBorderIcon fontSize='large' className={styles.favBorderBtn} onClick={() => history.push('/signIn')} />
                                }
                            </div>
                            <div>
                                <h4 onClick={() => {
                                    setCloseLikesPopUp(false)
                                    console.log(track)
                                }}>{track.likes} {track.likes === 1 ? 'like' : 'likes'}</h4>
                            </div>
                        </div>
                        <div className={styles.commentsContainer}>
                        </div>
                    </div>
                    <div className={styles.uploaderInfoContainer}>
                        <div className={styles.userImgContainer}>
                            <img src={avatar} alt='profile img' onClick={() => history.push(`/users/${uploader.id}`)} />
                        </div>
                        <div className={styles.userInfoContainer}>
                            <h6>Uploaded by:</h6>
                            <Link className={styles.title} to={`/users/${uploader.id}`} >{uploader.name}</Link>
                        </div>
                    </div>
                    <div className={styles.descriptionContainer}>
                        <h6>Description: </h6>
                        <p>{track.description}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleTrack;