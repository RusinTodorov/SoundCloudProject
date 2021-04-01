import style from './style.module.css';
import { useLocation, Link } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { DATA as trackData } from '../Initial Page/TrendingTracks/Tracks/Tracks';
import userData from '../Users/data';
import Track from './Track/Track';

export default function Search() {
    let location = useLocation();
    const INPUT = location.pathname.slice(8);
    let filteredTracks = trackData.filter(track => track.title.includes(INPUT));
    let filteredUsers = userData.filter(track => track.name.includes(INPUT));
 
    const showTracks = () => {
        const RESULT_DIV_FOR_TRACKS = document.getElementById('resultsDivForTracks');
        RESULT_DIV_FOR_TRACKS.style.display = 'flex';

        const RESULT_DIV_FOR_USERS = document.getElementById('resultsDivForUsers');
        RESULT_DIV_FOR_USERS.style.display = 'none';

        const TRACKS_BTN = document.getElementById('tracksFilter');
        TRACKS_BTN.style.color = 'white';
        TRACKS_BTN.style.backgroundColor = '#f50';

        const USERS_BTN = document.getElementById('usersFilter');
        USERS_BTN.style.color = '#333';
        USERS_BTN.style.backgroundColor = 'transparent';
    }

    const showUsers = () => {
        const RESULT_DIV_FOR_TRACKS = document.getElementById('resultsDivForTracks');
        RESULT_DIV_FOR_TRACKS.style.display = 'none';

        const RESULT_DIV_FOR_USERS = document.getElementById('resultsDivForUsers');
        RESULT_DIV_FOR_USERS.style.display = 'flex';

        const TRACKS_BTN = document.getElementById('tracksFilter');
        TRACKS_BTN.style.color = '#333';
        TRACKS_BTN.style.backgroundColor = 'transparent';

        const USERS_BTN = document.getElementById('usersFilter');
        USERS_BTN.style.color = 'white';
        USERS_BTN.style.backgroundColor = '#f50';
    }

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
                    <li className={style.sideDivTracks} onClick={showTracks} id="tracksFilter">
                        <i className={style.trackIcon}>Tracks</i>
                    Tracks
                </li>
                    <li className={style.sideDivUsers} onClick={showUsers} id="usersFilter">
                        <i className={style.usersIcon}>Users</i>
                    Users
                </li>
                </ul>
                <div className={style.results} id="resultsDivForTracks">
                    <p>
                        Found {filteredTracks.length === 1 ? '1 track' : filteredTracks.length + ' tracks'}
                    </p>
                    <ul style={{ listStyle: 'none' }}>
                        {filteredTracks.map(trackInfo => {

                            return (
                                <li key={trackInfo.trackId}>
                                    <Track {...trackInfo} />
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className={style.results} id="resultsDivForUsers" style={{ display: 'none' }}>
                    <p>
                        Found {filteredUsers.length === 1 ? '1 user' : filteredUsers.length + ' users'}
                    </p>
                    <ul style={{ listStyle: 'none' }}>
                        {filteredUsers.map(({ userId, name, profileImg }) => {

                            return (
                                <li key={userId}>
                                    <Link to={`/Users/${userId}`} className={style.userLink}>
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