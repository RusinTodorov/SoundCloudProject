import style from './style.module.css';
import { Link } from 'react-router-dom';

export default function Header() {
    const search = (e) => {
        e.preventDefault();
        const INPUT = e.target.querySelector('input').value;
        window.location = `http://localhost:3000/Search/${INPUT}`;
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
                            <Link className={style.navLinks} to="/Home">Home</Link>
                        </li>
                        <li className={style.li}>
                            <Link className={style.navLinks} to="/Users">Users</Link>
                        </li>
                        <li className={style.li}>
                            <Link className={style.navLinks} to="/MyProfile">My Profile</Link>
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
                    <Link to="/SignIn" className={style.singIn}>Sign in</Link>
                    <Link to="/CreateAccount" className={style.createAccount}>Create account</Link>
                    <Link to="/Upload" className={style.upload}>Upload</Link>
                </div>
            </div>
        </header>
    );
}