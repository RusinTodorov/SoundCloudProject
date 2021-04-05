import style from './style.module.css';
import { DATA } from '../../data/Users Page/data';
import Footer from './Footer/Footer';
import TopBackground from './TopBackground.jpg';
import { Link } from 'react-router-dom';


export default function Users() {

    return (
        <>
            <main>
                <div className={style.topDiv}>
                    <img src={TopBackground} alt="Background" />
                    <div className={style.topDivMiddleInfo}>
                        <h2>
                            Connect on SoundCloud
                    </h2>
                        <p className={style.topDivMiddleInfoP}>
                            Discover, stream, and share a constantly expanding mix
                            of music from emerging and major artists around the world.
                    </p>
                        <Link to="/home" className={style.uploadBtn}>Explore more</Link>
                    </div>
                </div>
                <div className={style.middleDiv}>
                    <h5 style={{ color: '#f50' }}>Users:</h5>
                    <hr />
                    <ol className={style.ol}>
                        {DATA.map(({ userId, name, profileImg }) => {
                            return (
                                <li key={userId}>
                                    <Link to={`/users/${userId}`} className={style.userLink}>
                                        <img src={profileImg} className={style.avatar} alt="Avatar" />
                                        {name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </main>
            <Footer />
        </>);
}