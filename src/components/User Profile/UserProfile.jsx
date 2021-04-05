import style from './style.module.css';
import Footer from './Footer/Footer';
import EmptyImg from './EmptyImg.png';
import { useLocation } from 'react-router-dom';
import { DATA } from '../../data/Users Page/data';
import PageNotFound from '../Page Not Found/PageNotFound';
import Track from '../Track Horizontal Card/Track';

export default function UserProfile() {
    let location = useLocation();
    let userId = location.pathname.slice(7);
    let profileInfo = DATA.filter(profile => profile.userId === userId);

    if (profileInfo.length === 0) {
        return <PageNotFound />;
    }

    let { name, profileBackground, profileImg, uploads } = profileInfo[0];

    return (
        <>
            <main className={style.mainWrap}>
                <div className={style.headerImage}>
                    {profileBackground ? <img src={profileBackground} alt="Background" /> : <></>}
                    <div className={style.profileImage}
                        style={{
                            position: 'relative',
                            top: (profileBackground ? '-230px' : '31px')
                        }}
                    >
                        {profileImg ? <img src={profileImg} alt="Avatar" /> : <></>}
                    </div>
                    <div className={style.middleWrap}>
                        <div className={style.name}
                            style={{
                                position: 'relative',
                                top: (profileBackground ? '-260px' : '7px')
                            }}
                        >
                            {name}
                        </div>
                    </div>
                </div>
                <div className={style.mainDiv}>
                    <h5 style={{ color: '#f50' }}>Uploads:</h5>
                    <hr />
                    <div className={uploads.length === 0 ? style.uploadsDiv : style.hidden}>
                        <img src={EmptyImg} alt="Empty" width={240} height={178} />
                        <div className={style.links}>
                            <p style={{ margin: '10px' }}>Seems a little quite over here</p>
                        </div>
                    </div>
                    <div className={uploads.length !== 0 ? style.uploadsDiv : style.hidden}>
                        <ul style={{ listStyle: 'none' }}>
                            {uploads.map(trackInfo => {

                                return (
                                    <li key={trackInfo.trackId}>
                                        <Track {...trackInfo} />
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