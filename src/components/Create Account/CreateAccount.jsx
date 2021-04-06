import style from './style.module.css';
import Footer from './Footer/Footer';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { emailInput, passwordInput, nameInput } from '../../services/inputValidations';
import { emailAndPasswordSignUp, facebookLogin, googleLogin } from '../../services/firebaseAuth';

export default function CreateAccount() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [wrongEmail, setWrongEmail] = useState('');
    const [wrongPassword, setWrongPassword] = useState('');
    const [wrongName, setWrongName] = useState('');
    const [error, setError] = useState('');
    const HISTORY = useHistory();

    const submit = e => {
        e.preventDefault();

        if (email && password && name) {
           emailAndPasswordSignUp(HISTORY, setError, email, password, name);
        }

    };

    return (
        <>
            <div className={style.divWraper}>
                <div className={style.providerButtons}>
                    <h4 className={style.title}>Sign up with:</h4>
                    <button className={style.facebookBtn} onClick={e => facebookLogin(HISTORY, setError)}>
                        Continue with Facebook
                    </button>
                    <button className={style.googleBtn} onClick={e => googleLogin(HISTORY, setError)}>
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
                        onInput={e => emailInput(e, setEmail, setWrongEmail)} />
                    {wrongEmail ? <span style={{ color: 'red' }}>{wrongEmail}</span> : null}
                    <input
                        className={style.input}
                        type="password"
                        placeholder="Password"
                        onInput={e => passwordInput(e, setPassword, setWrongPassword)} />
                    {wrongPassword ? <span style={{ color: 'red' }}>{wrongPassword}</span> : null}
                    <input
                        className={style.input}
                        placeholder="Name"
                        onInput={e => nameInput(e, setName, setWrongName)} />
                    {wrongName ? <span style={{ color: 'red' }}>{wrongName}</span> : null}
                    <button
                        className={style.formSubmit}
                        type="submit"
                        onClick={submit}
                    >
                        Create account
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