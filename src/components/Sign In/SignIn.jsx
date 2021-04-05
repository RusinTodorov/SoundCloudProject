import style from './style.module.css';
import Footer from './Footer/Footer';
import firebase from '../../services/firebase';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function SingIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [wrongEmail, setWrongEmail] = useState('');
    const [wrongPassword, setWrongPassword] = useState('');
    const [error, setError] = useState('');
    const HISTORY = useHistory();

    const facebookLogin = () => {
        let provider = new firebase.auth.FacebookAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then(result => {
                HISTORY.push(`/home`);
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    const googleLogin = () => {
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then(result => {
                HISTORY.push(`/home`);
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    function submit(e) {
        e.preventDefault();

        if (email && password) {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    HISTORY.push(`/home`);
                })
                .catch((err) => {
                    setError(err.message);
                });
        }

    };

    const emailInput = e => {
        const email = e.target.value.trim();
        const REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (REGEX.test(email)) {
            setEmail(email);
            setWrongEmail('');
        } else {
            setWrongEmail('Wrong email address!');
        }
    };

    const passwordInput = e => {
        const password = e.target.value.trim();

        if (password.includes(' ')) {
            setWrongPassword('Your password should not includes spaces!');
        } else if (password.length < 6) {
            setWrongPassword('Your password should be at least 6 character long!');
        } else {
            setWrongPassword('');
            setPassword(password);
        }

    };

    return (
        <>
            <div className={style.divWraper}>
                <div className={style.providerButtons}>
                    <h4 className={style.title}>Sign in with:</h4>
                    <button className={style.facebookBtn} onClick={facebookLogin}>
                        Continue with Facebook
                    </button>
                    <button className={style.googleBtn} onClick={googleLogin}>
                        Continue with Google
                    </button>
                </div>
                <div className={style.or}>
                    -----------------------------  or  -----------------------------
                </div>
                <form className={style.form} onSubmit={submit}>
                    <input
                        className={style.input}
                        type="email"
                        placeholder="Your email address"
                        onInput={emailInput} />
                    {wrongEmail ? <span style={{ color: 'red' }}>{wrongEmail}</span> : null}
                    <input
                        className={style.input}
                        type="password"
                        placeholder="Password"
                        onInput={passwordInput} />
                    {wrongPassword ? <span style={{ color: 'red' }}>{wrongPassword}</span> : null}
                    <button
                        className={style.formSubmit}
                        type="submit"
                    >
                        Continue
                    </button>
                    {error ? <span style={{ color: 'red' }}>{error}</span> : null}
                </form>
                <div>
                    <p className={style.bottomInfoP}>
                        <span>
                            We may use your email and devices for
                            updates and tips on SoundCloud's products
                            and services, and for activities notifications.
                            You can unsubscribe for free at any time in
                            your notification settings.
                    </span>
                    </p>
                    <p className={style.bottomInfoP}>
                        <span>
                            We may use information you provide us in order
                            to show you targeted ads as described in our
                            Privacy Policy.
                    </span>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}