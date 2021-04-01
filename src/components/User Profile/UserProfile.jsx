import style from './style.module.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import EmptyImg from './EmptyImg.png';
import { useLocation } from 'react-router-dom';
import DATA from '../Users/data';
import PageNotFound from '../Page Not Found/PageNotFound';

export default function UserProfile() {
    let location = useLocation();
    let userId = location.pathname.slice(7);
    let profileInfo = DATA.filter(profile => profile.userId === userId);

    if (profileInfo.length === 0) {
        return <PageNotFound />;
    }

    let { name, profileBackground, profileImg } = profileInfo[0];

    return (
        <>
            <Header />
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
                    <div className={style.noUploads}>
                        <img src={EmptyImg} alt="Empty" width={240} height={178} />
                        <div className={style.links}>
                            <p style={{ margin: '10px' }}>Seems a little quite over here</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}