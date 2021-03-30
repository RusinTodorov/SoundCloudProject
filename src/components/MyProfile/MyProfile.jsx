import style from './style.module.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import EmptyImg from './EmptyImg.png';
import { Link } from 'react-router-dom';

export default function MyProfile() {
    return (
        <>
            <Header />
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
                <div className={style.mainDiv}>
                    <h5 style={{color: '#f50'}}>Uploads:</h5>
                    <hr/>
                    <div className={style.noUploads}>
                        <img src={EmptyImg} alt="Empty" width={240} height={178} />
                        <div className={style.links}>
                        <p style={{margin: '10px'}}>Seems a little quite over here</p>
                        <Link to="/Upload" className={style.link}>Upload a track to share it with others.</Link>
                        <Link to="/Upload" className={style.bottomBtn}>Upload now</Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}