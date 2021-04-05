import style from './style.module.css';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { addPath } from '../../../redux/Current Path/currentPath.reducer'

export default function Search() {
    const dispatch = useDispatch();

    const HISTORY = useHistory();
    const [input, setInput] = useState('');

    const onInput = e => {
        setInput(e.target.value.trim());
    }

    const search = e => {
        e.preventDefault();
        dispatch(addPath('/search'))
        HISTORY.push(`/search/${input}`);
    }

    return (
        <div className={style.searchOrUploadDiv}>
            <span>
                <span>
                    <form className={style.form} onSubmit={search}>
                        <input className={style.input}
                            placeholder="Search for artists, bands, tracks, podcasts"
                            autoComplete="off"
                            onInput={onInput}
                        />
                        <button className={style.submit} type="submit">Search</button>
                    </form>
                </span>
                or
                <Link to="/upload" className={style.linkToUpload} onClick={() => { dispatch(addPath('/upload')) }}>Upload your own</Link>
            </span>
        </div>
    );
}