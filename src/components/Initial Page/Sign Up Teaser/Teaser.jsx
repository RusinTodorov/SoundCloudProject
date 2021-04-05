import style from './style.module.css';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { addPath } from '../../../redux/CurrentPath/currentPath.reducer'

export default function Teaser() {
    const dispatch = useDispatch();

    return (
        <div className={style.signupModule}>
            <div className={style.title}>
                Thanks for listening. Now join in.
                </div>
            <p className={style.datails}>
                Save tracks, follow artists and build playlists. All for free.
                </p>
            <p className={style.signUpP}>
                <Link to="/createAccount" className={style.signUpLink} onClick={() => { dispatch(addPath('/createAccount')) }}>Create account</Link>
            </p>
            <p className={style.signInP}>
                Already have an account?
                    <Link to="/signIn" className={style.signInLink} onClick={() => { dispatch(addPath('/signIn')) }}>Sign in</Link>
            </p>
        </div>
    );
}