import { useLocation } from 'react-router-dom';

import style from './style.module.css';
import Footer from './Footer/Footer';
import EmptyImg from './EmptyImg.png';
import PageNotFound from '../Page Not Found/PageNotFound';
import Track from '../Track Horizontal Card/Track';
import { useSelector } from 'react-redux';

import bgImage from '../../data/Users Page/Profile Imgs/Initial Background.jpg'
import avatar from '../../data/Users Page/Profile Imgs/Initial Avatar.jpg'


export default function UserProfile() {
    let location = useLocation();
    let userId = location.pathname.slice(7);

    const allUsers = useSelector(state => state.allUsers);
    const allTracks = useSelector(state => state.allTracks);

    let currUser = allUsers.find((user) => user.id === userId)

    if (!currUser) {
        return <PageNotFound />;
    }

    let { name, backgroundImg, profileImg, uploads } = currUser;

    if (!backgroundImg) {
        backgroundImg = bgImage;
    }

    if (!profileImg) {
        profileImg = avatar;
    }

    let userTracks = allTracks.filter((track) => uploads.includes(track.trackId))

    return (
        <>
            <main className={style.mainWrap}>
                <div className={style.headerImage}>
                    {backgroundImg ? <img src={backgroundImg} alt="Background" /> : <></>}
                    <div className={style.profileImage}
                        style={{
                            position: 'relative',
                            top: (backgroundImg ? '-230px' : '31px')
                        }}
                    >
                        {profileImg ? <img src={profileImg} alt="Avatar" /> : <></>}
                    </div>
                    <div className={style.middleWrap}>
                        <div className={style.name}
                            style={{
                                position: 'relative',
                                top: (backgroundImg ? '-260px' : '7px')
                            }}
                        >
                            {name}
                        </div>
                    </div>
                </div>
                <div className={style.mainDiv}>
                    <h5 style={{ color: '#f50' }}>Uploads:</h5>
                    <hr />
                    <div className={userTracks.length === 0 ? style.uploadsDiv : style.hidden}>
                        <img src={EmptyImg} alt="Empty" width={240} height={178} />
                        <div className={style.links}>
                            <p style={{ margin: '10px' }}>Seems a little quite over here</p>
                        </div>
                    </div>
                    <div className={userTracks.length !== 0 ? style.uploadsDiv : style.hidden}>
                        <ul style={{ listStyle: 'none' }}>
                            {userTracks.map(track => {

                                return (
                                    <li key={track.trackId}>
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