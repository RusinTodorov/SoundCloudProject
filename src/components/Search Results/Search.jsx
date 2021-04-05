import style from './style.module.css';
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { DATA as userData } from '../../data/Users Page/data';
import Track from '../Track Horizontal Card/Track';
import { useSelector } from 'react-redux';

export default function Search() {
    const [selectedTab, setSelectedTab] = useState('tracks');
    const PARAMS = useParams();
    const INPUT = PARAMS.input;

    const allTracks = useSelector(state => state.allTracks);

    const FILTERED_TRACKS = allTracks.filter(track => track.title.includes(INPUT));
    const FILTERED_USERS = userData.filter(track => track.name.includes(INPUT));

    return (
        <>
            <Header />
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
                        {FILTERED_USERS.map(({ userId, name, profileImg }) => {

                            return (
                                <li key={userId}>
                                    <Link to={`/users/${userId}`} className={style.userLink}>
                                        <img src={profileImg} className={style.avatar} alt="Avatar" />
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