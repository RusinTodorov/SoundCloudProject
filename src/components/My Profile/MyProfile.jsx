import style from './style.module.css';
import Footer from './Footer/Footer';
import EmptyImg from './EmptyImg.png';
import { Link } from 'react-router-dom';
import Track from '../Track Horizontal Card/Track';
import { useSelector } from 'react-redux';

export default function MyProfile() {

    let user = useSelector(state => state.currentUser);
    let allTracks = useSelector(state => state.allTracks);
    let userTracks = [];
    if (user.isLoggedIn) {
        userTracks = allTracks.filter(track => user.uploads.includes(track.trackId));
    }
    console.log(user)
    return (
        <>
            <main className={style.mainWrap}>
                <div className={style.headerImage}>
                    <div className={style.profileImage}>
                    </div>
                    <div className={style.middleWrap}>
                        <div className={style.name}>{user.name}</div>
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