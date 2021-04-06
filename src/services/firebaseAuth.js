import firebase from './firebase';

export const emailAndPasswordLogin = (HISTORY, setError, email, password) => {
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            HISTORY.push(`/home`);
        })
        .catch((err) => {
            setError(err.message);
        });
}

export const emailAndPasswordSignUp = (HISTORY, setError, email, password, name) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            HISTORY.push(`/signIn`);
            userCredential.user.updateProfile({
                displayName: name
            })
        })
        .catch((err) => {
            setError(err.message);
        });
}

export const facebookLogin = (HISTORY, setError) => {
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

export const googleLogin = (HISTORY, setError) => {
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