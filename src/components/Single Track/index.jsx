import Waveform from './Wavefrom'
import styles from './styles.module.scss'
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

import store from '../../redux/store';

import {
    addFavTrack,
    removeFavTrack,
} from '../../redux/CurrentUser/currentUser.actions'

import {
    updateUserLikes
} from '../../redux/AllUsers/allUsers.actions'

import {
    updateTrackLikes
} from '../../redux/AllTracks/allTracks.action'

const SingleTrack = () => {
    const dispatch = useDispatch();
    let history = useHistory();
    let trackId = history.location.pathname.split('/')[2].toString();

    console.log(trackId);

    const allTracks = useSelector(state => state.allTracks);
    const allUsers = useSelector(state => state.allUsers);
    let uploader = allUsers.find(user => user.uploads.includes(trackId));
    let track = allTracks.find(track => track.trackId === trackId)

    let currentUser = useSelector(state => state.currentUser);
    let likes = useSelector(state => state.currentUser.likes)

    return (
        <>
            <div style={{ paddingTop: 46 }}>
                <Waveform />
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
                                                dispatch(updateTrackLikes(trackId, track.likes - 1))
                                            }}
                                        /> :
                                        <FavoriteBorderIcon fontSize='large' className={styles.favBorderBtn}
                                            onClick={() => {
                                                dispatch(addFavTrack(trackId));
                                                dispatch(updateUserLikes({ id: currentUser.id, likes: store.getState().currentUser.likes }));
                                                dispatch(updateTrackLikes(trackId, track.likes + 1))
                                            }}
                                        />
                                    :
                                    <FavoriteBorderIcon fontSize='large' className={styles.favBorderBtn} onClick={() => history.push('/signIn')} />
                                }


                            </div>
                            <div>
                                <h4>{track.likes} likes</h4>
                                <div className={styles.likedUserProfiles}>
                                    {allUsers.filter(user => user.likes.includes(trackId)).map(user => <p>{user.name}</p>)}
                                </div>
                            </div>

                        </div>
                        <div className={styles.commentsContainer}>

                        </div>

                    </div>
                    <div className={styles.uploaderInfoContainer}>
                        <div className={styles.userImgContainer}>
                            <img src={uploader.profileImg} alt='profile img' onClick={() => history.push(`/users/${uploader.id}`)} />
                        </div>
                        <div className={styles.userInfoContainer}>
                            <h6>Uploaded by:</h6>
                            <Link className={styles.title} to={`/users/${uploader.id}`} >{uploader.name}</Link>
                        </div>
                    </div>
                    <div className={styles.descriptionContainer}>

                    </div>
                </div>

            </div>
        </>
    );
}

export default SingleTrack;