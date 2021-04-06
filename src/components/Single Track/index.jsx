import Waveform from './Wavefrom'
import styles from './styles.module.scss'
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const SingleTrack = () => {
    let history = useHistory();
    let currId = history.location.pathname.split('/')[2].toString();

    let allUsers = useSelector(state => state.allUsers);
    let user = allUsers.find(user => user.uploads.includes(currId));
    console.log(user);

    return (
        <>
            <div style={{ paddingTop: 46 }}>
                <Waveform />
                <div className={styles.uploaderCard}>
                    <div className={styles.userImgContainer}>
                        <img src={user.profileImg} alt='profile img' onClick={() => history.push(`/users/${user.id}`)} />
                    </div>
                    <div className={styles.userInfoContainer}>
                        <h6>Uploaded by:</h6>
                        <Link className={styles.title} to={`/users/${user.id}`} >{user.name}</Link>
                    </div>
                </div>

            </div>
        </>
    );
}

export default SingleTrack;