import Footer from './Footer/Footer';
import style from './style.module.css';

import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Track from '../Track Horizontal Card/Track';

import avatar from '../../data/Users/Profile Imgs/Initial Avatar.jpg'

export default function Search() {
    const [selectedTab, setSelectedTab] = useState('tracks');
    const PARAMS = useParams();
    const INPUT = PARAMS.input;

    const allTracks = useSelector(state => state.allTracks);
    const allUsers = useSelector(state => state.allUsers);

    const FILTERED_TRACKS = allTracks.filter(track => track.title.toLowerCase().includes(INPUT.toLowerCase()));
    const FILTERED_USERS = allUsers.filter(user => user.name.toLowerCase().includes(INPUT.toLowerCase()));

    return (
        <>
            <div className={style.main}>
                <h4>
                    Search results for "{INPUT}"
                </h4>
                <hr />
                <h6>Filter:</h6>
                <ul>
                    <li className={selectedTab === 'tracks' ? style.activeTab : style.inactiveTab} onClick={() => setSelectedTab('tracks')} >
                        <i className={style.trackIcon}>Tracks</i>
                    Tracks
                </li>
                    <li className={selectedTab === 'users' ? style.activeTab : style.inactiveTab} onClick={() => setSelectedTab('users')}>
                        <i className={style.usersIcon}>Users</i>
                    Users
                </li>
                </ul>
                <div className={selectedTab === 'tracks' ? style.results : style.hidden}>
                    <p>
                        Found {FILTERED_TRACKS.length === 1 ? '1 track' : FILTERED_TRACKS.length + ' tracks'}
                    </p>
                    <ul className={style.list}>
                        {FILTERED_TRACKS.map(trackInfo => {

                            return (
                                <li key={trackInfo.trackId}>
                                    <Track {...trackInfo} />
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className={selectedTab === 'users' ? style.results : style.hidden}>
                    <p>
                        Found {FILTERED_USERS.length === 1 ? '1 user' : FILTERED_USERS.length + ' users'}
                    </p>
                    <ul className={style.list}>
                        {FILTERED_USERS.map(({ id, name, profileImg }) => {

                            let profImg = profileImg;
                            if (!profImg) {
                                profImg = avatar;
                            }

                            return (
                                <li key={id}>
                                    <Link to={`/users/${id}`} className={style.userLink}>
                                        <img src={profImg} className={style.avatar} alt="Avatar" />
                                        {name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
}