import style from './style.module.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export default function Header() {
    const history = useHistory();

    const search = (e) => {
        e.preventDefault();
        const INPUT = e.target.querySelector('input').value;
        history.push(`/search/${INPUT}`);
    }

    return (
        <header className={style.header}>
            <div className={style.divWraper}>
                <div className={style.headerLogo}>
                    <Link to="/" className={style.logo}></Link>
                    <Link to="/" className={style.afterLogo}>SOUNDCLOUD</Link>
                </div>
                <nav>
                    <ul className={style.navUl}>
                        <li className={style.li}>
                            <Link className={style.navLinks} to="/home">Home</Link>
                        </li>
                        <li className={style.li}>
                            <Link className={style.navLinks} to="/users">Users</Link>
                        </li>
                        <li className={style.li}>
                            <Link className={style.navLinks} to="/myProfile">My Profile</Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <form className={style.form} onSubmit={search}>
                        <input className={style.input}
                            placeholder="Search for artists, bands, tracks, podcasts" autoComplete="off" />
                        <button className={style.submit} type="submit">Search</button>
                    </form>
                </div>
                <div className={style.headerRight}>
                    <Link to="/signIn" className={style.singIn} >Sign in</Link>
                    <Link to="/createAccount" className={style.createAccount} >Create account</Link>
                    <Link to="/upload" className={style.upload}>Upload</Link>
                </div>
            </div>
        </header>
    );
}