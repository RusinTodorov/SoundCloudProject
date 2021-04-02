import profileImg1 from './Profile Imgs/Rob Wave Avatar.jpg';
import profileBackground1 from './Profile Imgs/Rob Wave Background.jpg';
import profileImg2 from './Profile Imgs/Lil Tjay Avatar.jpg';
import profileBackground2 from './Profile Imgs/Lil Tjay Background.jpg';
import profileImg3 from './Profile Imgs/Giveon Avatar.jpg';
import profileBackground3 from './Profile Imgs/Giveon Background.jpg';
import profileImg4 from './Profile Imgs/Pooh Shiesty Avatar.jpg';
import profileBackground4 from './Profile Imgs/Pooh Shiesty Background.jpg';
import profileImg5 from './Profile Imgs/Moustafa Hagag Avatar.jpg';
import profileBackground5 from './Profile Imgs/Moustafa Hagag Background.jpg';
import profileImg6 from './Profile Imgs/Mooski Avatar.jpg';
import profileBackground6 from './Profile Imgs/Mooski Background.jpg';
import profileImg7 from './Profile Imgs/Ahmed Kamel Avatar.jpg';
import profileImg8 from './Profile Imgs/Kevin Gates Avatar.jpg';
import profileBackground8 from './Profile Imgs/Kevin Gates Background.jpg';
import profileImg9 from './Profile Imgs/6IX9INE Avatar.jpg';
import profileBackground9 from './Profile Imgs/6IX9INE Background.jpg';
import profileImg10 from './Profile Imgs/Lil Baby Avatar.jpg';
import profileBackground10 from './Profile Imgs/Lil Baby Background.jpg';
import profileImg11 from './Profile Imgs/Polo G Avatar.jpg';
import profileBackground11 from './Profile Imgs/Polo G Background.jpg';

import img1 from '../Initial Page/Cover/Lil Tjay - Calling My Phone Cover.jpg';
import audio1 from '../Initial Page/Audio/Lil Tjay - Calling My Phone.mp3';
import img2 from '../Initial Page/Cover/Pooh Shiesty - Back In Blood Cover.jpg';
import audio2 from '../Initial Page/Audio/Pooh Shiesty - Back In Blood.mp3';
import img3 from '../Initial Page/Cover/Moustafa Hagag - Naseby & Qesmety Cover.jpg';
import audio3 from '../Initial Page/Audio/Moustafa Hagag - Naseby & Qesmety.mp3';
import img4 from '../Initial Page/Cover/Rob Wave - Street Runner Cover.jpg';
import audio4 from '../Initial Page/Audio/Rod Wave - Street Runner.mp3';
import img5 from '../Initial Page/Cover/Mooski - Track Star Cover.jpg';
import audio5 from '../Initial Page/Audio/Mooski - Track Star.mp3';
import img6 from '../Initial Page/Cover/Tamer Ashour - Ba2ol 3adi Cover.jpg';
import audio6 from '../Initial Page/Audio/Tamer Ashour - Ba2ol 3adi.mp3';
import img7 from '../Initial Page/Cover/Lil Tjay - Headshot Cover.jpg';
import audio7 from '../Initial Page/Audio/Lil Tjay - Headshot.mp3';
import img8 from '../Initial Page/Cover/Kevin Gates - Big Gangsta Cover.jpg';
import audio8 from '../Initial Page/Audio/Kevin Gates - Big Gangsta.mp3';
import img9 from '../Initial Page/Cover/ZAZA - 6IX9INE Cover.jpg';
import audio9 from '../Initial Page/Audio/ZAZA - 6IX9INE.mp3';
import img10 from '../Initial Page/Cover/Lil Baby - On Me Cover.jpg';
import audio10 from '../Initial Page/Audio/Lil Baby - On Me.mp3';
import img11 from '../Initial Page/Cover/Polo G - Martin & Gina Cover.jpg';
import audio11 from '../Initial Page/Audio/Polo G - Martin & Gina.mp3';
import img12 from '../Initial Page/Cover/Giveon - Heartbreak Anniversary Cover.jpg';
import audio12 from '../Initial Page/Audio/Giveon - Heartbreak Anniversary.mp3';

import { DATA as myUploads } from '../Home Page/data';

const DATA = [
    {
        userId: '1',
        name: 'Rob Wave',
        profileImg: profileImg1,
        profileBackground: profileBackground1,
        uploads: [
            {
                title: 'Rod Wave - Street Runner',
                trackId: '4',
                userId: '1',
                img: img4,
                audio: audio4,
                uploadedBy: 'Rod Wave',
                likes: 123000,
            }
        ],
    },
    {
        userId: '2',
        name: 'Lil Tjay',
        profileImg: profileImg2,
        profileBackground: profileBackground2,
        uploads: [
            {
                title: 'Lil Tjay - Calling My Phone (feat. 6LACK)',
                trackId: '1',
                userId: '2',
                img: img1,
                audio: audio1,
                uploadedBy: 'Lil Tjay',
                likes: 377000,
            },
            {
                title: 'Lil Tjay - Headshot',
                trackId: '7',
                userId: '2',
                img: img7,
                audio: audio7,
                uploadedBy: 'Lil Tjay',
                likes: 74200,
              }
        ],
    },
    {
        userId: '3',
        name: 'Giveon',
        profileImg: profileImg3,
        profileBackground: profileBackground3,
        uploads: [
            {
                title: 'Giveon - Heartbreak Anniversary',
                trackId: '12',
                userId: '3',
                img: img12,
                audio: audio12,
                uploadedBy: 'Giveon',
                likes: 2231,
            }
        ],
    },
    {
        userId: '4',
        name: 'Pooh Shiesty',
        profileImg: profileImg4,
        profileBackground: profileBackground4,
        uploads: [
            {
                title: 'Pooh Shiesty - Back In Blood',
                trackId: '2',
                userId: '4',
                img: img2,
                audio: audio2,
                uploadedBy: 'Pooh Shiesty',
                likes: 377000,
            }
        ],
    },
    {
        userId: '5',
        name: 'Moustafa Hagag',
        profileImg: profileImg5,
        profileBackground: profileBackground5,
        uploads: [
            {
                title: 'Moustafa Hagag - Naseby & Qesmety',
                trackId: '3',
                userId: '5',
                img: img3,
                audio: audio3,
                uploadedBy: 'Moustafa Hagag',
                likes: 747000,
            }
        ],
    },
    {
        userId: '6',
        name: 'Mooski',
        profileImg: profileImg6,
        profileBackground: profileBackground6,
        uploads: [
            {
                title: 'Mooski - Track Star',
                trackId: '5',
                userId: '6',
                img: img5,
                audio: audio5,
                uploadedBy: 'Mooski',
                likes: 126000,
            }
        ],
    },
    {
        userId: '7',
        name: 'Ahmed Kamel',
        profileImg: profileImg7,
        profileBackground: undefined,
        uploads: [
            {
                title: 'Tamer Ashour - Ba2ol 3adi',
                trackId: '6',
                userId: '7',
                img: img6,
                audio: audio6,
                uploadedBy: 'Ahmed Kamel',
                likes: 203000,
            }
        ],
    },
    {
        userId: '8',
        name: 'Kevin Gates',
        profileImg: profileImg8,
        profileBackground: profileBackground8,
        uploads: [
            {
                title: 'Kevin Gates - Big Gangsta',
                trackId: '8',
                userId: '8',
                img: img8,
                audio: audio8,
                uploadedBy: 'Kevin Gates',
                likes: 258000,
            }
        ],
    },
    {
        userId: '9',
        name: '6IX9INE',
        profileImg: profileImg9,
        profileBackground: profileBackground9,
        uploads: [
            {
                title: 'ZAZA - 6IX9INE',
                trackId: '9',
                userId: '9',
                img: img9,
                audio: audio9,
                uploadedBy: '6IX9INE',
                likes: 160000,
            }
        ],
    },
    {
        userId: '10',
        name: 'Lil Baby',
        profileImg: profileImg10,
        profileBackground: profileBackground10,
        uploads: [
            {
                title: 'Lil Baby - On Me',
                trackId: '10',
                userId: '10',
                img: img10,
                audio: audio10,
                uploadedBy: 'Lil Baby',
                likes: 296000,
            }
        ],
    },
    {
        userId: '11',
        name: 'Polo G',
        profileImg: profileImg11,
        profileBackground: profileBackground11,
        uploads: [
            {
                title: 'Polo G - Martin & Gina',
                trackId: '11',
                userId: '11',
                img: img11,
                audio: audio11,
                uploadedBy: 'Polo G',
                likes: 504000,
            }
        ],
    },
    {
        userId: '12',
        name: 'Rusin',
        profileImg: undefined,
        profileBackground: undefined,
        uploads: [...myUploads],
    }
];

export { DATA };