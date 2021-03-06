import styles from './styles.module.scss';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import firebase from '../../services/firebase'

import {
    logoutUser
} from '../../redux/CurrentUser/currentUser.actions'

import avatar from '../../data/Users/Profile Imgs/Initial Avatar.jpg'

export default function Header() {
    const HISTORY = useHistory();
    const dispatch = useDispatch();
    const location = useLocation();

    const currentUser = useSelector(state => state.currentUser)

    const page = location.pathname;

    const [input, setInput] = useState('');

    const search = e => {
        e.preventDefault();
        setInput('')
        HISTORY.push(`/search/${input}`);
    };

    return (
        <header className={styles.header}>
            <div className={styles.divWraper}>
                <div className={styles.headerLogo}>
                    <Link to="/" className={styles.logo}
                    ></Link>
                    <Link to="/" className={styles.afterLogo}
                    >SOUNDCLOUD</Link>
                </div>
                <nav>
                    <ul className={styles.navUl}>
                        <li className={styles.li}>
                            <Link className={`${styles.navLinks} ${page === '/home' && styles.white}`} to="/home"
                                style={{ color: (page === '/home' ? 'white' : '#999') }}

                            >Home</Link>
                        </li>
                        <li className={styles.li}>
                            <Link className={styles.navLinks} to="/users"
                                style={{ color: (page === '/users' ? 'white' : '#999') }}

                            >Users</Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <form className={styles.form} onSubmit={search} >
                        <input
                            type='text'
                            className={styles.input}
                            placeholder="Search for artists, bands, tracks, podcasts"
                            autoComplete="off"
                            onInput={(ev) => setInput(ev.target.value.trim())}
                            value={input}
                            style={{ width: '505px' }}
                        />
                        <button className={styles.submit} type="submit">Search</button>
                    </form>
                </div>
                <div className={styles.headerRight}>
                    {!currentUser.isLoggedIn ?
                        <>
                            <Link to="/signIn" className={styles.singIn}
                                style={{ color: (page === '/signIn' ? 'white' : '#999') }}
                            >Sign in</Link>
                            <Link to="/createAccount" className={styles.createAccount}>Create account</Link>
                            <Link to="/signIn" className={styles.upload}>Upload</Link>
                        </>
                        :
                        <>
                            <Link to="/upload" className={styles.upload}
                                style={{ color: (page === '/upload' ? 'white' : '#999') }}
                            >Upload</Link>
                            <div className={styles.profile}>
                                <img src={avatar} alt='avatar' onClick={() => HISTORY.push("/myProfile")} />
                                <Link to="/myProfile" className={styles.upload}
                                    style={{ color: (page === '/myProfile' ? 'white' : '#999') }}
                                >{currentUser.name} </Link>
                            </div>
                            <Link className={styles.singIn}
                                onClick={() => {
                                    firebase.auth().signOut().then(() => {
                                        // Sign-out successful.
                                        console.log('signed out');
                                        dispatch(logoutUser())

                                    }).catch((error) => { });

                                    HISTORY.push('/home')
                                }}
                            >Sign out</Link>

                        </>
                    }
                </div>
            </div>
        </header >
    );
}