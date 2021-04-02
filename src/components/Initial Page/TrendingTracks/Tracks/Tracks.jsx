import style from './style.module.css';
import Track from './Track/Track';
import { DATA } from '../../../../data/Initial Page/data';

export default function Tracks() {

  return (
    <>
      {DATA.map(trackInfo => {
        
        return (
          <li className={style.li} key={trackInfo.trackId}>
            <Track {...trackInfo} />
          </li>
        );
      })}
    </>
  );
}

export { DATA };