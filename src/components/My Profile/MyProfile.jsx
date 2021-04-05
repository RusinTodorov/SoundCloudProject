import style from './style.module.css';
import Footer from './Footer/Footer';
import EmptyImg from './EmptyImg.png';
import { Link } from 'react-router-dom';
import Track from '../Track Horizontal Card/Track';
import { DATA } from '../../data/Users Page/data';

export default function MyProfile() {
    let currenUserId = localStorage.getItem('userId');
    let userInfo = DATA.filter(({ userId }) => userId === currenUserId);
    let uploadsArr = [];

    if (userInfo.length) {
        uploadsArr = userInfo[0].uploads;
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
                                accept="image/jpeg,image/pjpeg,image/gif,image/png" />
                        </form>
                    </div>
                    <div className={style.middleWrap}>
                        <div className={style.name}>Rusin</div>
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
                    <div className={uploadsArr.length === 0 ? style.uploadsDiv : style.hidden}>
                        <img src={EmptyImg} alt="Empty" width={240} height={178} />
                        <div className={style.links}>
                            <p style={{ margin: '10px' }}>
                                Seems a little quite over here
                            </p>
                            <Link to="/home" className={style.bottomBtn}>
                                Explore more
                            </Link>
                        </div>
                    </div>
                    <div className={uploadsArr.length !== 0 ? style.uploadsDiv : style.hidden}>
                        <ul style={{ listStyle: 'none' }}>
                            {uploadsArr.map(trackInfo => {

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