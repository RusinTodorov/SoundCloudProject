import style from './style.module.css';
import { Link } from 'react-router-dom';

export default function Teaser() {
    return (
        <div className={style.signupModule}>
            <div className={style.title}>
                Thanks for listening. Now join in.
                </div>
            <p className={style.datails}>
                Save tracks, follow artists and build playlists. All for free.
                </p>
            <p className={style.signUpP}>
                <Link to="/createAccount" className={style.signUpLink}>Create account</Link>
            </p>
            <p className={style.signInP}>
                Already have an account?
                    <Link to="/signIn" className={style.signInLink}>Sign in</Link>
            </p>
        </div>
    );
}