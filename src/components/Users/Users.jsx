import style from './style.module.css';
import Footer from './Footer/Footer';
import TopBackground from './TopBackground.jpg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import avatar from '../../data/Users/Profile Imgs/Initial Avatar.jpg'


export default function Users() {

    const allUsers = useSelector(state => state.allUsers)

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
                        {allUsers.map(({ id, name, profileImg }) => {

                            let profImg = profileImg;
                            if (!profImg) {
                                profImg = avatar;
                            }

                            return (
                                <li key={id}>
                                    <Link to={`/users/${id}`} className={style.userLink}>
                                        <img src={profImg} className={style.avatar} alt="Avatar" />
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