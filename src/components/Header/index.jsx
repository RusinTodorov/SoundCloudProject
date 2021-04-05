import styles from './styles.module.scss';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addPath } from '../../redux/CurrentPath/currentPath.reducer'

export default function Header() {
    const HISTORY = useHistory();
    const dispatch = useDispatch();

    const page = useSelector(state => state.path)

    const [input, setInput] = useState('');

    const search = e => {
        e.preventDefault();
        setInput('')
        dispatch(addPath('/search'))
        HISTORY.push(`/search/${input}`);
    };

    return (
        <header className={styles.header}>
            <div className={styles.divWraper}>
                <div className={styles.headerLogo}>
                    <Link to="/" className={styles.logo}
                        onClick={() => { dispatch(addPath('')) }}
                    ></Link>
                    <Link to="/" className={styles.afterLogo}
                        onClick={() => { dispatch(addPath('')) }}
                    >SOUNDCLOUD</Link>
                </div>
                <nav>
                    <ul className={styles.navUl}>
                        <li className={styles.li}>
                            <Link className={`${styles.navLinks} ${page === '/home' && styles.white}`} to="/home"
                                onClick={() => { dispatch(addPath('/home')) }}
                                style={{ color: (page === '/home' ? 'white' : '#999') }}

                            >Home</Link>
                        </li>
                        <li className={styles.li}>
                            <Link className={styles.navLinks} to="/users"
                                onClick={() => { dispatch(addPath('/users')) }}
                                style={{ color: (page === '/users' ? 'white' : '#999') }}

                            >Users</Link>
                        </li>
                        <li className={styles.li}>
                            <Link className={styles.navLinks} to="/myProfile"
                                onClick={() => { dispatch(addPath('/myProfile')) }}
                                style={{ color: (page === '/myProfile' ? 'white' : '#999') }}
                            >My Profile</Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <form className={styles.form} onSubmit={search}>
                        <input
                            type='text'
                            className={styles.input}
                            placeholder="Search for artists, bands, tracks, podcasts"
                            autoComplete="off"
                            onInput={(ev) => setInput(ev.target.value.trim())}
                            value={input} />
                        <button className={styles.submit} type="submit">Search</button>
                    </form>
                </div>
                <div className={styles.headerRight}>
                    <Link to="/signIn" className={styles.singIn}
                        onClick={() => { dispatch(addPath('/signIn')) }}
                    >Sign in</Link>
                    <Link to="/createAccount" className={styles.createAccount}
                        onClick={() => { dispatch(addPath('/createAccount')) }}
                    >Create account</Link>
                    <Link to="/upload" className={styles.upload}
                        onClick={() => { dispatch(addPath('/upload')) }}
                    >Upload</Link>
                </div>
            </div>
        </header >
    );
}