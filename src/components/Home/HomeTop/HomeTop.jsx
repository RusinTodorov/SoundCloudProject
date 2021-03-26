import style from './style.module.css';
import { Link } from 'react-router-dom';

export default function HomeTop() {

    return (
        <>
            <div className={style.topBorder}></div>
            <div className={style.homeTopDiv}>
                <h1 className={style.logo}>SoundCloud</h1>
                <div className={style.topRightDiv}>
                    <Link to="/SignIn" className={style.singInLink}>Sign in</Link>
                    <Link to="/CreateAccount" className={style.createAccountLink}>Create account</Link>
                    <Link to="https://creators.soundcloud.com" target="_blank" className={style.creatorsLink}>For Creators</Link>
                </div>
                <div className={style.topDivCenter}>
                    <h2 className={style.topDivCenterTitle}>Connect on SoundCloud</h2>
                    <p className={style.topDivCenterDescription}>
                        Discover, stream, and share a constantly 
                        expanding mix of music from emerging and 
                        major artists around the world.
                    </p>
                    <div className={style.topDivCenterBottomDiv}>
                        <Link to="/CreateAccount" className={style.topDivCenterBottomLink}>Sign up for free</Link>
                    </div>
                </div>
            </div>
        </>
    );
}