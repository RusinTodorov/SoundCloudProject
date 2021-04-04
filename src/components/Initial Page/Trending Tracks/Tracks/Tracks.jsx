import style from './style.module.css';
import Track from '../../../Track Vertical Card/Track';
import { useSelector } from 'react-redux';


export default function Tracks() {

  const allTracks = useSelector(state => state.allTracks).slice(0, 12);

  return (
    <>
      {allTracks.map(trackInfo => {

        return (
          <li className={style.li} key={trackInfo.trackId}>
            <Track {...trackInfo} />
          </li>
        );
      })}
    </>
  );
}
