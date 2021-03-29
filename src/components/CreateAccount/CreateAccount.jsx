import style from './style.module.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';

export default function CreateAccount() {
    // TO DO Register with FireBase
    return (
        <>
            <Header />
            <div className={style.divWraper}>
                <div className={style.providerButtons}>
                    <button className={style.facebookBtn}>
                        Continue with Facebook
                    </button>
                    <button className={style.googleBtn}>
                        Continue with Google
                    </button>
                    <button className={style.appleBtn}>
                        Continue with Apple
                </button>
                </div>
                <div className={style.or}>
                    -----------------------------  or  -----------------------------
                </div>
                <form className={style.form}>
                    <input
                        id="sign_in_up_email"
                        className={style.input}
                        type="email"
                        name="email"
                        required
                        placeholder="Your email address" />
                    <input
                        id="sign_in_up_password"
                        className={style.input}
                        type="password"
                        name="password"
                        required
                        placeholder="Password" />
                    <input
                        id="sign_in_up_name"
                        className={style.input}
                        name="name"
                        required
                        placeholder="Name" />
                    <input
                        id="sign_in_up_age"
                        className={style.input}
                        type="number"
                        name="Age"
                        required
                        placeholder="Age" />
                    <button
                        className={style.formSubmit}
                        type="submit"
                        id="sign_in_up_submit">
                        Continue
                </button>
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