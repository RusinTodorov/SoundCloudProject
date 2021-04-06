import style from './style.module.css';
import Footer from './Footer/Footer';
import EmptyImg from './EmptyImg.png';
import { Link } from 'react-router-dom';
import Track from '../Track Horizontal Card/Track';
import { useSelector } from 'react-redux';

export default function MyProfile() {

    let user = useSelector(state => state.currentUser)
    let allTracks = useSelector(state => state.allTracks);
    let userTracks = [];
    if (user.isLoggedIn) {
        userTracks = allTracks.filter(track => user.uploads.includes(track.trackId))
    }

    return (
        <>
            <main className={style.mainWrap}>
                <div className={style.headerImage}>
                    <div className={style.profileImage}>
                        <form action="" className={style.editImageForm}>
                            <label htmlFor="imageProfile" className={style.imageChooser}>Upload image</label>
                            <input
                                id="imageProfile"
                                className={style.imageFileInput}
                                type="file"
                                accept="image/jpeg,image/pjpeg,image/gif,image/png"
                                onChange={(ev) => {

                                    let file = ev.target.files[0];

                                    const reader = new FileReader();

                                    reader.onload = function () {
                                        // convert image file to base64 string
                                    };

                                    if (file) {
                                        reader.readAsDataURL(file);
                                    }
                                }}

                            />
                        </form>
                    </div>
                    <div className={style.middleWrap}>
                        <div className={style.name}>{user.name}</div>
                        <form action="">
                            <label htmlFor="imageBackground" className={style.imageChooser}>Upload header image</label>
                            <input
                                id="imageBackground"
                                className={style.imageFileInput}
                                type="file"
                                accept="image/jpeg,image/pjpeg,image/gif,image/png" />
                        </form>
                    </div>
                </div>
                <div className={style.mainDiv} >
                    <h5 style={{ color: '#f50' }}>Uploads:</h5>
                    <hr />
                    <div className={userTracks.length === 0 ? style.uploadsDiv : style.hidden}>
                        <img src={EmptyImg} alt="Empty" width={240} height={178} />
                        <div className={style.links}>
                            <p style={{ margin: '10px' }}>
                                Seems a little quite over here
                            </p>
                            <Link to="/upload" className={style.bottomBtn}>
                                Upload your own track
                            </Link>
                        </div>
                    </div>
                    <div className={userTracks.length !== 0 ? style.uploadsDiv : style.hidden}>
                        <ul style={{ listStyle: 'none' }}>
                            {userTracks.map(track => {
                                console.log(track);
                                return (
                                    <li key={track.id}>
                                        <Track {...track} />
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}