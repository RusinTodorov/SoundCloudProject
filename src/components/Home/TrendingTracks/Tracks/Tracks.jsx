import style from './style.module.css';
import Track from './Track/Track';
import img1 from './Lil Tjay - Calling My Phone Cover.jpg';
import audio1 from './Lil Tjay - Calling My Phone.mp3';
import img2 from './Pooh Shiesty - Back In Blood Cover.jpg';
import audio2 from './Pooh Shiesty - Back In Blood.mp3';
import img3 from './Moustafa Hagag - Naseby & Qesmety Cover.jpg';
import audio3 from './Moustafa Hagag - Naseby & Qesmety.mp3';
import img4 from './Rob Wave - Street Runner Cover.jpg';
import audio4 from './Rod Wave - Street Runner.mp3';
import img5 from './Mooski - Track Star Cover.jpg';
import audio5 from './Mooski - Track Star.mp3';
import img6 from './Tamer Ashour - Ba2ol 3adi Cover.jpg';
import audio6 from './Tamer Ashour - Ba2ol 3adi.mp3';
import img7 from './Lil Tjay - Headshot Cover.jpg';
import audio7 from './Lil Tjay - Headshot.mp3';
import img8 from './Kevin Gates - Big Gangsta Cover.jpg';
import audio8 from './Kevin Gates - Big Gangsta.mp3';
import img9 from './ZAZA - 6IX9INE Cover.jpg';
import audio9 from './ZAZA - 6IX9INE.mp3';
import img10 from './Lil Baby - On Me Cover.jpg';
import audio10 from './Lil Baby - On Me.mp3';
import img11 from './Polo G - Martin & Gina Cover.jpg';
import audio11 from './Polo G - Martin & Gina.mp3';
import img12 from './Giveon - Heartbreak Anniversary Cover.jpg';
import audio12 from './Giveon - Heartbreak Anniversary.mp3';


export default function Tracks() {
  let data = [
    {
      title: 'Lil Tjay - Calling My Phone (feat. 6LACK)',
      trackId: 1,
      img: img1,
      audio: audio1,
      uploadedBy: 'Rusin',
    },
    {
      title: 'Pooh Shiesty - Back In Blood',
      trackId: 2,
      img: img2,
      audio: audio2,
      uploadedBy: 'Rusin',
    },
    {
      title: 'Moustafa Hagag - Naseby & Qesmety',
      trackId: 3,
      img : img3,
      audio : audio3,
      uploadedBy: 'Rusin',
    },
    {
      title: 'Rod Wave - Street Runner',
      trackId: 4,
      img: img4,
      audio: audio4,
      uploadedBy: 'Rusin',
    },
    {
      title: 'Mooski - Track Star',
      trackId: 5,
      img: img5,
      audio: audio5,
      uploadedBy: 'Rusin',
    },
    {
      title: 'Tamer Ashour - Ba2ol 3adi',
      trackId: 6,
      img: img6,
      audio: audio6,
      uploadedBy: 'Rusin',
    },
    {
      title: 'Lil Tjay - Headshot',
      trackId: 7,
      img: img7,
      audio: audio7,
      uploadedBy: 'Rusin',
    },
    {
      title: 'Kevin Gates - Big Gangsta',
      trackId: 8,
      img: img8,
      audio: audio8,
      uploadedBy: 'Rusin',
    },
    {
      title: 'ZAZA - 6IX9INE',
      trackId: 9,
      img: img9,
      audio: audio9,
      uploadedBy: 'Rusin',
    },
    {
      title: 'Lil Baby - On Me',
      trackId: 10,
      img: img10,
      audio: audio10,
      uploadedBy: 'Rusin',
    },
    {
      title: 'Polo G - Martin & Gina',
      trackId: 11,
      img: img11,
      audio: audio11,
      uploadedBy: 'Rusin',
    },
    {
      title: 'Giveon - Heartbreak Anniversary',
      trackId: 12,
      img: img12,
      audio: audio12,
      uploadedBy: 'Rusin',
    },
  ];

  return (
    <>
      {data.map(trackInfo => {
        return (
          <li className={style.li} key={trackInfo.trackId}>
            <Track {...trackInfo} />
          </li>
        );
      })}
    </>
  );
}