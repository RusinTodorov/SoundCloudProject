import style from './style.module.css';
import HomeTop from './Home Top/HomeTop';
import SearchOrUpload from './Search Or Upload/SearchOrUpload';
import TrendingTrakcs from './Trending Tracks/TrendingTracks';
import NeverStopListening from './Never Stop Listening/NeverStopListening';
import CreatorsTeaser from './Creators Teaser/Teaser';
import SignUpTeaser from './Sign Up Teaser/Teaser';
import Footer from './Footer/Footer';

export default function Home() {

    return (
        <div className={style.body}>
            <HomeTop />
            <SearchOrUpload />
            <TrendingTrakcs />
            <NeverStopListening />
            <CreatorsTeaser />
            <SignUpTeaser />
            <Footer />
        </div>
    );
}