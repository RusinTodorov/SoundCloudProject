export const emailInput = (e, setEmail, setWrongEmail) => {
    const email = e.target.value.trim();
    const REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (REGEX.test(email)) {
        setEmail(email);
        setWrongEmail('');
    } else {
        setWrongEmail('Wrong email address!');
    }
};

export const passwordInput = (e, setPassword, setWrongPassword) => {
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

export const nameInput = (e, setName, setWorngName) => {
    const name = e.target.value.trim();

    if (name.length < 3) {
        setWorngName('Your name should be at least 3 characters long!');
    } else {
        setWorngName('');
        setName(name);
    }
};