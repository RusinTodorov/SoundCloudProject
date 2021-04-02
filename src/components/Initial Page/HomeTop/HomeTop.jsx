import style from './style.module.css';
import { Link } from 'react-router-dom';

export default function HomeTop() {

    return (
        <>
            <div className={style.topBorder}></div>
            <div className={style.homeTopDiv}>
                <h1 className={style.logo}>SoundCloud</h1>
                <div className={style.topRightDiv}>
                    <Link to="/signIn" className={style.singInLink}>Sign in</Link>
                    <Link to="/createAccount" className={style.createAccountLink}>Create account</Link>
                    <a href="https://creators.soundcloud.com" 
                    target="_blank" 
                    className={style.creatorsLink}
                    rel="noreferrer">
                        For Creators
                    </a>
                </div>
                <div className={style.topDivCenter}>
                    <h2 className={style.topDivCenterTitle}>Connect on SoundCloud</h2>
                    <p className={style.topDivCenterDescription}>
                        Discover, stream, and share a constantly 
                        expanding mix of music from emerging and 
                        major artists around the world.
                    </p>
                    <div className={style.topDivCenterBottomDiv}>
                        <Link to="/createAccount" className={style.topDivCenterBottomLink}>Sign up for free</Link>
                    </div>
                </div>
            </div>
        </>
    );
}